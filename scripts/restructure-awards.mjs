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

  const wr = data.content.worldRecords;

  const achievements = [
    {
      title: "International Distinguished Young Researcher",
      year: "2020",
      source: "Green Thinkerz",
      description: "Dr. Yethindra is acknowledged for his remarkable contributions to medical research at a young age, positioning him as a leading researcher by Green Thinkerz.",
      images: ["/awards-certificates/International Distinguished Young Researcher, 2020.webp"],
    },
    {
      title: "Mahatma Gandhi National Award",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum (UN DESA affiliated)",
      description: "Bestowed for his impact on science and society, this distinction recognizes his achievements in academic and medical advancements.",
      images: ["/awards-certificates/Mahatma Gandhi National Award, 2020.webp"],
    },
    {
      title: "Ambassador of Peace",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum (UN DESA affiliated)",
      description: "Honored as a Peace Ambassador for breaking linguistic, cultural, and geographical barriers to make medical knowledge accessible.",
      images: ["/awards-certificates/Ambassador of Peace.webp"],
    },
    {
      title: "Honorary Doctorate (Doctor of Science)",
      year: "2020",
      source: "Global Peace University, USA",
      description: "He received an honorary doctorate for his groundbreaking medical research achievements and authored scientific works in three languages.",
      images: [
        "/awards-certificates/Receiving honorary doctorate from Dr. Stalbek M. Akhunbaev.webp",
        "/awards-certificates/Receiving honorary doctorate from Prof. Indira Orozobaevna Kudaibergenova and Prof. Ziiabidin Aidarov.webp",
      ],
    },
    {
      title: "Karmaveer Chakra Award",
      year: "2021",
      source: "iCONGO and the United Nations",
      description: "Esteemed as a top civilian award, this honor recognizes dedication to humanity, medical research, and education.",
      images: ["/awards-certificates/Karmaveer Chakra Award from Prof. Mamatov, 2021.webp"],
    },
    {
      title: "Champion of the Champions (MedEngage Award)",
      year: "2021",
      source: "MedEngage Scholarship Summit",
      description: "At the summit, this top honor recognized his exceptional contributions to medical research and their impact on future professionals.",
      images: ["/awards-certificates/Champion of the Champions (MedEngage Award).webp"],
    },
    {
      title: "Global Under 30 Leadership Summit (Winner)",
      year: "2022",
      source: "Global Under 30 Leadership Summit",
      description: "Celebrated as a top leader under 30 across fields for significant contributions to medical science and research.",
      images: [
        "/awards-certificates/Global Under 30 Leadership Summit (Winner).webp",
        "/awards-certificates/Global Under 30 Leadership Summit.webp",
      ],
    },
    {
      title: "Dr. Yellapragada Subbarao Memorial Award",
      year: "2022",
      source: "Biomedical science recognition",
      description: "This award, named after a renowned Indian biomedical scientist, acknowledges exceptional contributions to research.",
      images: ["/awards-certificates/Dr. Yellapragada Subbarao Memorial Award.webp"],
    },
    {
      title: "50 Aspiring Authors & Researchers (Winner)",
      year: "2022",
      source: "National recognition",
      description: "This honor places Dr. Yethindra among India's most promising figures in authorship and research.",
      images: ["/awards-certificates/50 Aspiring Authors & Researchers (Winner).webp"],
    },
    {
      title: "Nationwide Award for Under 30 Emerging Industry Experts (Winner)",
      year: "2023",
      source: "Business Mint",
      description: "Considered one of India's most impactful young specialists under 30, spanning various fields.",
      images: [],
    },
    {
      title: "International Physician-Scientist of the Year",
      year: "2026",
      source: "Global recognition",
      description: "Acknowledges his ten-year dedication to medical science as a practicing doctor and prolific researcher on the global stage.",
      images: ["/awards-certificates/International Physician-Scientist of the Year.webp"],
    },
    {
      title: "Best Poster Award & Best Presenter Award (ASCO Direct GI 2026)",
      year: "2026",
      source: "Global Healthcare Academy at HCG Manavata Cancer Centre, Nashik",
      description: "At the ASCO Direct GI Cancers Symposium 2026, Dr. Yethindra Vityala won both the Best Poster and Best Presenter Awards.",
      images: ["/awards-certificates/Best Poster Award & Best Presenter Award.webp"],
    },
    {
      title: "World's Youngest Scientist in Medicine",
      year: "2019",
      source: wr[0]?.affiliatedSource || "High Range Book of World Records, Assam Book of Records, World Record Certification Agency, and Assist World Records, 2019",
      description: wr[0]?.description || "At 22, Dr. Yethindra Vityala achieved what many scientists strive for, publishing path-breaking peer-reviewed medical research papers.",
      images: [
        "/awards-certificates/World_s Youngest Scientist in Medicine.webp",
        "/awards-certificates/World_s Youngest Scientist in Medicine(1).webp",
      ],
    },
    {
      title: "Guinness World Records – Longest Title of a Book",
      year: "2020",
      source: "Guinness World Records",
      description: "In 2020, the Guinness World Records acknowledged the longest title of a book, with over 3,777 words and 26,021 characters. Starting with The Historical Development of the Heart..., it lists every known species with a heart, marking an unparalleled achievement.",
      images: [
        "/awards-certificates/Guinness World Record certificate for Longest Title of a Book.webp",
        "/awards-certificates/Vityala Yethindra with guinness world record for longest title of a book.webp",
        "/awards-certificates/With Joel Davis IPS.webp",
        "/awards-certificates/With Vaddiraju Ravichandra, MP Rajyasabha.webp",
      ],
    },
  ];

  const { error } = await supabase
    .from("cms_pages")
    .update({ content: { ...data.content, awards: achievements } })
    .eq("page_slug", "awards-records");

  if (error) {
    console.error("Update error:", error.message);
    return;
  }

  console.log("Done! Updated to", achievements.length, "unique achievements.");
  achievements.forEach((a, i) => {
    console.log(i + ": " + a.title + " (" + a.images.length + " images)");
  });
}

main();
