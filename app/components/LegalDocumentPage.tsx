import Link from "next/link";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

type LegalDocumentPageProps = {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
  contactEmail: string;
  contactName: string;
};

export default function LegalDocumentPage({
  eyebrow = "Legalities",
  title,
  lastUpdated,
  intro,
  sections,
  contactEmail,
  contactName,
}: LegalDocumentPageProps) {
  return (
    <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
      <div className="mx-5 max-w-[1220px]">
        <header className="mb-6 sm:mb-8 lg:mb-10">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-gray-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-[24px] sm:text-[30px] lg:text-[34px] font-light tracking-tight text-[#111]">
            {title}
          </h1>
          <p className="mt-1 text-[11px] sm:text-[12px] text-gray-400">
            {lastUpdated}
          </p>
          {intro ? (
            <p className="mt-4 max-w-4xl text-[12px] sm:text-[13px] leading-7 text-gray-600">
              {intro}
            </p>
          ) : null}
        </header>

        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          {sections.map((section, idx) => (
            <section key={section.heading} className="space-y-2">
              <h2 className="text-[14px] sm:text-[15px] font-medium tracking-tight text-[#111]">
                {idx + 1}. {section.heading}
              </h2>

              {section.paragraphs.map((paragraph, paragraphIdx) => (
                <p
                  key={paragraphIdx}
                  className="text-[12px] sm:text-[13px] leading-7 text-gray-600"
                >
                  {paragraph}
                </p>
              ))}

              {section.items ? (
                <ul className="space-y-2 pl-5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="list-disc text-[12px] sm:text-[13px] leading-7 text-gray-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="pt-2">
            <h2 className="text-[14px] sm:text-[15px] font-medium tracking-tight text-[#111]">
              Contact Us
            </h2>
            <p className="mt-2 text-[12px] sm:text-[13px] leading-7 text-gray-600">
              For privacy, permissions, or policy questions, contact{" "}
              <span className="font-medium text-[#111]">{contactName}</span>.
            </p>
            <Link
              href={`mailto:${contactEmail}`}
              className="mt-1 inline-flex text-[12px] sm:text-[13px] font-medium text-[#111] underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-500"
            >
              {contactEmail}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
