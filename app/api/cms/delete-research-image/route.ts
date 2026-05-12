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

const getObjectPathFromImageUrl = (imageUrl: string) => {
  try {
    const parsed = new URL(imageUrl);
    const marker = `/storage/v1/object/public/${BUCKET_NAME}/`;
    const index = parsed.pathname.indexOf(marker);

    if (index === -1) {
      return "";
    }

    return decodeURIComponent(parsed.pathname.slice(index + marker.length));
  } catch {
    return "";
  }
};

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

    const body = (await req.json()) as { objectPath?: string; imageUrl?: string };
    const objectPath = body.objectPath || (body.imageUrl ? getObjectPathFromImageUrl(body.imageUrl) : "");

    if (!objectPath) {
      return NextResponse.json(
        { success: false, message: "objectPath is required" },
        { status: 400 }
      );
    }

    const serviceClient = getServiceRoleClient();
    const { error } = await serviceClient.storage.from(BUCKET_NAME).remove([objectPath]);

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
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
