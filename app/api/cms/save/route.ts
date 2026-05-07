import { NextResponse } from "next/server";
import { createClient } from "../../../lib/supabase/server";

type SaveCmsBody = {
  pageSlug: "home" | "about" | "awards-records" | "research-publications";
  content: Record<string, unknown>;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SaveCmsBody;
    const { pageSlug, content } = body;

    if (!pageSlug || !content) {
      return NextResponse.json(
        { success: false, message: "pageSlug and content are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("cms_pages")
      .upsert(
        {
          page_slug: pageSlug,
          content,
        },
        { onConflict: "page_slug" }
      )
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `${pageSlug} CMS saved successfully`,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
