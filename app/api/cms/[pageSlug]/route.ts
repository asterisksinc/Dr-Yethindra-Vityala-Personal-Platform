import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

type RouteContext = {
  params: Promise<{ pageSlug: string }>;
};

export async function GET(_: Request, context: RouteContext) {
  try {
    const { pageSlug } = await context.params;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cms_pages")
      .select("id, page_slug, content, created_at, updated_at")
      .eq("page_slug", pageSlug)
      .maybeSingle();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { success: false, message: "Page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}