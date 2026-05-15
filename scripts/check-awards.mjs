import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rvleyzlrzxdkgfyqrvzy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGV5emxyenhka2dmeXFydnp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzQwMjI2NiwiZXhwIjoyMDg4OTc4MjY2fQ.M4MHrzxDdD5Eo5I-lxQbe5VcXjN_bieaeKdr4vWPTbY"
);

async function main() {
  const { data } = await supabase
    .from("cms_pages")
    .select("content")
    .eq("page_slug", "awards-records")
    .single();

  const awards = data.content.awards;
  console.log("Total awards:", awards.length + "\n");

  const wrTitles = [
    "longest title of a book",
    "world's youngest scientist in medicine",
    "fastest research study accomplished in the world",
    "first person in the world to complete 20 medical courses at 10 universities in 9 days",
    "youngest person to write a trilingual book",
    "most medical related certificates received in 9 days",
  ];

  let shown = 0;
  for (let i = 0; i < awards.length; i++) {
    const a = awards[i];
    const lower = a.title.toLowerCase();
    const filtered = wrTitles.some((w) => lower.includes(w) || w.includes(lower));
    const status = filtered ? "FILTERED" : "SHOWN";
    if (!filtered) shown++;
    console.log(
      i + " " + status +
      " | img:" + (a.imageUrl ? a.imageUrl.substring(0, 35) : "NONE") +
      " | " + a.title.substring(0, 65)
    );
  }
  console.log("\nVisible cards:", shown);
}

main();
