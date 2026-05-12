import { createClient as createServerClient } from "../../../lib/supabase/server";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const BUCKET_NAME = "research-publications";

function getServiceRoleClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Missing Supabase upload configuration");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function POST(req: Request) {
  try {
    const supabase = await createServerClient();
    const { data: userData } = await supabase.auth.getUser();

    if (!userData?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: "Image file is required" },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { success: false, message: "Only image uploads are allowed" },
        { status: 400 }
      );
    }

    const serviceClient = getServiceRoleClient();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
    const objectPath = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;

    const { error: uploadError } = await serviceClient.storage
      .from(BUCKET_NAME)
      .upload(objectPath, file, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json(
        { success: false, message: uploadError.message },
        { status: 500 }
      );
    }

    const { data } = serviceClient.storage
      .from(BUCKET_NAME)
      .getPublicUrl(objectPath);

    return NextResponse.json({
      success: true,
      data: {
        imageUrl: data.publicUrl,
        objectPath,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}
