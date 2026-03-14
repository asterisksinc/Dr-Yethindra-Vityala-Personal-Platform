import Image from "next/image";
import "./awards-records.css";
import "../about/about.css";
export default function AwardsRecords() {
  return (
    <section className="vit-awards-wrapper">

      {/* Title */}
      <div className="vit-awards-header">
        <h2>Awards & Records</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="vit-awards-grid">

        {/* Left Content */}
        <div className="vit-awards-left">

          {/* Video Section */}
          <div className="vit-awards-video height">
            <Image
              src="/awards/video-placeholder.png"
              alt="video"
              fill
              className="vit-awards-video-img"
            />
          </div>

          {/* Certificates */}
          <div className="vit-awards-cert-section">
            <h3>Honour & Certifications</h3>

            <div className="vit-awards-cert-grid">

              {[
                {
                  title: "Karmaveer Chakra Award (2021)",
                  img: "/certeficate.png",
                    sub: "This prestigious honor, granted by iCONGO and the United Nations, celebrates his commitment to using medical science for social change and community health.",
                },
                {
                  title: "Mahatma Gandhi National Award (2020)",
                  img: "/certeficate.png",
                  sub:'Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award highlights Dr. Yethindra’s contributions to global healthcare and medical research.'
                },
                {
                  title: "Young Researcher, Green Thinker, 2020",
                  img: "/certeficate.png",
                  sub:`Dr. Yethindra's research has been published in some of the most respected medical journals globally. His work spans a wide range of medical topics, 
                  `
                },
                {
                  title: "Dr. Yellapragada Subbarao Memorial Award, 2020",
                  img: "/certeficate.png",
                  sub:`Honored by the Indian Association of Biomedical Scientists for outstanding achievements in biomedical research, reflecting excellence in advancing healthcare and scientific discovery in the spirit of Dr. Yellapragada Subbarao's legacy.`
                },
                {
                  title: "Nationwide Awards Under 30 Emerging Industry Experts, 2023",
                  img: "/certeficate.png",
                  sub:`Winner of the 2023 Business Mint Nationwide Awards Under 30 Emerging Industry Experts in the Researcher Category for his contributions to the medical research.`
                },
                {
                  title: "Champion of the Champions – MedEngage Award (2021)",
                  img: "/certeficate.png",
                  sub:`Recognized by Metropolis Healthcare for his unparalleled achievements in academics and medical research, particularly his contributions during the COVID-19 pandemic.`
                },
              ].map((cert, index) => (
                <div className="vit-awards-cert-card" key={index}>
                  <div className="vit-awards-cert-img">
                    <Image
                      src={cert.img}
                      alt="certificate"
                      width={420}
                      height={250}
                    />
                  </div>
                  <p className="vit-awards-cert-title">{cert.title}</p>
                  <p className="sub">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="vit-awards-right">

          {/* Quote Box */}
          <div className="vit-card vit-people-card height">
                    <div className="vit-card-content">
                      <Image
                        src="/man.svg"
                        width={45}
                        height={45}
                        alt="man"
                      />
                      <p>
                        I move through products like narrative also, noting what works,
                        what slows me down, and how design could make the flow a little easier.
                      </p>
        
                      <div className="vit-tags">
                        <span>Lorem ipsum</span>
                        <span>Lorem ipsum</span>
                        <span>Lorem ipsum</span>
                      </div>
                    </div>
        
                    <h3>Lorem ipsum</h3>
                  </div>

          {/* Records */}
            {/* MEMBERSHIP LIST */}
            <div className="vit-membership-cards">

              <div className="vit-member-card">
                <div className="vit-member-icon triangle"></div>

                <div>
                  <h4>American Academy of Sleep Medicine</h4>
                  <span>ID – CSESSS</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">
                <div className="vit-member-icon square"></div>

                <div>
                  <h4>American Society of Clinical Oncology</h4>
                  <span>ID – 123456</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">
                <div className="vit-member-icon circle"></div>

                <div>
                  <h4>American College of Physicians</h4>
                  <span>ID – 987654</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">
                <div className="vit-member-icon diamond"></div>

                <div>
                  <h4>European Society for Medical Oncology</h4>
                  <span>ID – 456321</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">
                <div className="vit-member-icon diamond"></div>

                <div>
                  <h4>Indian Association of Biomedical Scientists</h4>
                  <span>ID – 555555</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>

            </div>
          {/* <div className="vit-awards-records">
            <div className="vit-awards-records-title">
              <h3>World Records</h3>
              <span>Lorem ipsum</span>
            </div>

            <div className="vit-awards-record-item">
              <div className="vit-awards-icon triangle"></div>
              <div>
                <h4>Youngest Person to Write a Trilingual Book</h4>
                <p>
                  Recognized for linguistic versatility and dedication to
                  cross-cultural communication at an early age.
                </p>
              </div>
            </div>

            <div className="vit-awards-record-item">
              <div className="vit-awards-icon square"></div>
              <div>
                <h4>Fastest Research Study Accomplished</h4>
                <p>
                  Completed a research study in record time demonstrating
                  extraordinary dedication to scientific exploration.
                </p>
              </div>
            </div>

            <div className="vit-awards-record-item">
              <div className="vit-awards-icon circle"></div>
              <div>
                <h4>Title Goes Here</h4>
                <p>
                  Recognized by world record certification agencies for
                  outstanding contributions.
                </p>
              </div>
            </div>

            <div className="vit-awards-record-item">
              <div className="vit-awards-icon diamond"></div>
              <div>
                <h4>Youngest Scientist in Medicine</h4>
                <p>
                  One of the youngest individuals to make groundbreaking
                  contributions to medical science.
                </p>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
}