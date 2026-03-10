
"use client";
import { useEffect, useState } from "react";
import "./about.css";
import Image from "next/image";
import SkillRadar from "../components/SkillRadar";
import JourneyMap from "../components/JourneyMap";
export default function AboutPage() {
  const [cursorX, setCursorX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleMove = (e: any) => {
    setCursorX(e.clientX);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="vit-about-wrapper">

        {/* HERO */}
        <section className="vit-about-hero">
          <div className="vit-hero-overlay">
            <h1>Lorem ipsum dolor</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* <div className="vit-hero-scale">
    <Image
      src="/scale.svg"
      width={1300}
      height={40}
      alt="skills"
    />
  </div> */}
          <div className="vit-hero-scale">
            <div className="vit-scale-wrapper" onMouseMove={handleMove}>
              {Array.from({ length: 180 }).map((_, i) => {
                const distance = Math.abs(cursorX - (i * screenWidth) / 180);
                const height = Math.max(30, 50 - distance / 12);

                return (
                  <div
                    key={i}
                    className="vit-scale-bar"
                    style={{ height: `${height}px` }}
                  />
                );
              })}
            </div>
          </div>
        </section>


        {/* INFO CARDS */}
        <section className="vit-info-cards">

          {/* <div className="vit-card1 vit-skill-card">
    <Image
      src="/card1.svg"
      width={420}
      height={290}
      alt="skills"
    />
  </div> */}
          <div className="vit-card1 vit-skill-card">
            <p className="h12">Professional skills</p>
            <SkillRadar />
          </div>
          <div className="vit-card vit-people-card">
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
                <span>Comfort Seek</span>
                <span>Picky</span>
                <span>Everyday User</span>
              </div>
            </div>

            <h3>People</h3>
          </div>

          <div className="vit-card vit-speciality-card">
            <div className="vit-card-content">
              <Image
                src="/man.svg"
                width={45}
                height={45}
                alt="man"
              />
              <p>
                His advanced training and commitment to medical research are reflected in his world records, such as the fastest completion of medical courses and his research into the historical development of the heart.
              </p>

              <div className="vit-tags">
                <span>Endocrinology</span>
                <span>Neurology</span>
                <span>Oncology</span>
                <span>Infectious Diseases</span>
                <span>Medical Education</span>
                <span>Public Health</span>
              </div>
            </div>

            <h3>Specialities</h3>
          </div>

        </section>


        {/* ACADEMICS */}
        <section className="vit-academic-section">

          <h2>Academics</h2>
          <p className="vit-academic-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="vit-academic-list">

            {/* Row 1 */}
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Master in Public Health</h4>
                <p>Guglielmo Marconi University</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot purple"></span>
                Rome, Italy
              </div>

              <div className="vit-academic-year">
                2024-2026
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </div>

            </div>


            {/* Row 2 */}
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Master of Business Administration</h4>
                <p>Manav Rachna University</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot blue"></span>
                Faridabad, Delhi, India
              </div>

              <div className="vit-academic-year">
                2023-2025
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Bachelor of Medicine and Bachelor of Surgery (MBBS [MD]) </h4>
                <p>International Higher School of Medicine</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot red"></span>
                Bishkek, Kyrgyzstan
              </div>

              <div className="vit-academic-year">
                2016-2021
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>11th & 12th standard (Intermediate)</h4>
                <p>S.R. Junior College for Boys</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot green"></span>
                Warangal, Telangana, India
              </div>

              <div className="vit-academic-year">
                2013-2015
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>10th standard</h4>
                <p>Tejaswi concept High School</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot purple"></span>
                Warangal, Telangana, India
              </div>

              <div className="vit-academic-year">
                2012-2013
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </div>

            </div>
          </div>
        </section>


        {/* BIO */}
        <section className="vit-about-bio">
          <div className="vit-bio-card">
            <p>
              Dr. Yethindra Vityala is an esteemed Indian physician, medical researcher,
              author, and public health advocate whose work excels in clinical sciences
              and academic communication. He has made notable contributions to
              endocrinology, neurology, oncology, infectious diseases, and public health.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="vit-academic-section">

          <h2>Work & Experience</h2>
          <p className="vit-academic-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>

          <div className="vit-academic-list">

            {/* Row 1 */}
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Founder and Chief Executive Officer</h4>
                <p>Scivyt Research Technologies Private Limited</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot purple"></span>
                Hyderabad, Telangana
              </div>

              <div className="vit-academic-year">
                2024-Present
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Education Name      </div>

            </div>


            {/* Row 2 */}
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Associate Professor</h4>
                <p>Honorary International Faculty, AJ Research Centre, AJ Institute of Medical Sciences and Research Centre</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot blue"></span>
                Mangalore, Karnataka
              </div>

              <div className="vit-academic-year">
                2023-Present
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Education Name      </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Doctor</h4>
                <p>City Clinical Hospital No. 1</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot red"></span>
                Bishkek, Kyrgyzstan
              </div>

              <div className="vit-academic-year">
                2021-Present
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>

              <div className="vit-academic-text">
                Education Name      </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Associate Professor</h4>
                <p>Department of Hospital Internal Medicine, I. K. Akhunbaev Kyrgyz State Medical Academy</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot green"></span>
                Bishkek, Kyrgyzstan
              </div>

              <div className="vit-academic-year">
                2021-Present
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>
              <div className="vit-academic-text">
                Education Name      </div>

            </div>
            <div className="vit-academic-row">

              <div className="vit-academic-degree">
                <h4>Associate Professor</h4>
                <p>Department of Pathology, International Higher School of Medicine</p>
              </div>

              <div className="vit-academic-location">
                <span className="dot purple"></span>
                Bishkek, Kyrgyzstan
              </div>

              <div className="vit-academic-year">
                2021-Present
              </div>

              <div className="vit-academic-graph">
                <svg viewBox="0 0 120 40" className="vit-mini-graph">

                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00e676" />
                      <stop offset="100%" stopColor="#ffeb3b" />
                    </linearGradient>
                  </defs>

                  <polyline
                    points="0,15 35,15 60,30 90,35 120,38"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="vit-graph-line"
                  />

                </svg>
              </div>
              <div className="vit-academic-text">
                Education Name      </div>

            </div>
          </div>
        </section>

        <section className="vit-academic-section">

          <h2>Memberships</h2>
          <p className="vit-academic-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>

          <div className="vit-membership-grid">

            {/* MAP */}
            <div className="vit-map-container">
              {/* <Image
                src="/map.svg"
                width={900}
                height={500}
                alt="map"
              /> */}
              <JourneyMap />
            </div>

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

          </div>

        </section>


      </div>
    </>
  );
}