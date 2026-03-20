"use client";

import { ChangeEvent, useState } from "react";
import "./dashboard-cms.css";
import { useEffect } from "react";
type HomeState = {
  mainComponent: {
    heading: string;
    subHeading: string;
    image1: File | null;
    image2: File | null;
    image3: File | null;
  };
  currentWork: {
    details: string;
  };
  researchMetrics: {
    hIndex: string;
    citations: string;
    publications: string;
    lastUpdatedOn: string;
  };
achievementsGoals: {
  heading: string;
  subHeading: string;
}[];
  timeSpent: {
    startYear: string;
    endYear: string;
    startLocation: string;
    startCoordinate: string;
    endLocation: string;
    endCoordinate: string;
    lowTimeHr: string;
    highTimeHr: string;
    mediumTimeHr: string;
  };
};

type InfoItem = {
  description: string;
  tags: string[];
  footer: string;
};

type AcademicItem = {
  education: string;
  university: string;
  location: string;
  year: string;
  description: string;
};

type WorkItem = {
  designation: string;
  company: string;
  location: string;
  year: string;
  description: string;
};

type MembershipItem = {
  membershipTitle: string;
  id: string;
  description: string;
};

type WorldRecordItem = {
  recordTitle: string;
  date: string;
  description: string;
};
type AwardsRecordsState = {
  worldRecords: WorldRecordItem[];
};
type AboutState = {
  heroComponent: {
    heading: string;
    subHeading: string;
  };
  informationComponent: InfoItem[];
  academicsDescription: string;
  academics: AcademicItem[];
  section100vh: {
    description: string;
  };
  workExperience: {
    description: string;
    items: WorkItem[];
  };
  memberships: {
    description: string;
    items: MembershipItem[];
  };
};

export default function DashboardPage() {
const [activePage, setActivePage] = useState<"home" | "about" | "awards-records">("home");useEffect(() => {
  const loadCmsData = async () => {
    try {
      const res = await fetch(`/api/cms/${activePage}`);
      const result = await res.json();

      if (!res.ok || !result?.data?.content) return;

      if (activePage === "home") {
         const data = result.data.content;

  if (data?.achievementsGoals && !Array.isArray(data.achievementsGoals)) {
    data.achievementsGoals = [data.achievementsGoals];
  }

  setHomeData(result.data.content);
} else if (activePage === "about") {
  setAboutData(result.data.content);
} else if (activePage === "awards-records") {
  setAwardsRecordsData(result.data.content);
}
    } catch (error) {
      console.error("Failed to load CMS data", error);
    }
  };

  loadCmsData();
}, [activePage]);
const [awardsRecordsData, setAwardsRecordsData] = useState<AwardsRecordsState>({
  worldRecords: [
    {
      recordTitle: "",
      date: "",
      description: "",
    },
  ],
});
  const [homeData, setHomeData] = useState<HomeState>({
    mainComponent: {
      heading: "",
      subHeading: "",
      image1: null,
      image2: null,
      image3: null,
    },
    currentWork: {
      details: "",
    },
    researchMetrics: {
      hIndex: "",
      citations: "",
      publications: "",
      lastUpdatedOn: "",
    },
  achievementsGoals: [
  {
    heading: "",
    subHeading: "",
  },
],
    timeSpent: {
      startYear: "",
      endYear: "",
      startLocation: "",
      startCoordinate: "",
      endLocation: "",
      endCoordinate: "",
      lowTimeHr: "",
      highTimeHr: "",
      mediumTimeHr: "",
    },
  });
const handleAchievementChange = (
  index: number,
  field: "heading" | "subHeading",
  value: string
) => {
  setHomeData((prev) => {
    const updated = [...prev.achievementsGoals];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    return {
      ...prev,
      achievementsGoals: updated,
    };
  });
};

const addAchievementRow = () => {
  setHomeData((prev) => ({
    ...prev,
    achievementsGoals: [
      ...prev.achievementsGoals,
      {
        heading: "",
        subHeading: "",
      },
    ],
  }));
};

const deleteAchievementRow = (index: number) => {
  setHomeData((prev) => ({
    ...prev,
    achievementsGoals: prev.achievementsGoals.filter((_, i) => i !== index),
  }));
};
  const [aboutData, setAboutData] = useState<AboutState>({
    heroComponent: {
      heading: "",
      subHeading: "",
    },
    informationComponent: [
      {
        description: "",
        tags: ["", "", ""],
        footer: "",
      },
    ],
    academicsDescription: "",
    academics: [
      {
        education: "",
        university: "",
        location: "",
        year: "",
        description: "",
      },
    ],
    section100vh: {
      description: "",
    },
    workExperience: {
      description: "",
      items: [
        {
          designation: "",
          company: "",
          location: "",
          year: "",
          description: "",
        },
      ],
    },
    memberships: {
      description: "",
      items: [
        {
          membershipTitle: "",
          id: "",
          description: "",
        },
      ],
    },
  
  });

  const handleHomeChange = (
    section: keyof HomeState,
    field: string,
    value: string | File | null
  ) => {
    setHomeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleAboutSectionChange = (
    section: keyof AboutState,
    field: string,
    value: string
  ) => {
    setAboutData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as object),
        [field]: value,
      },
    }));
  };

  const handleInfoChange = (
    index: number,
    field: keyof InfoItem,
    value: string | string[]
  ) => {
    setAboutData((prev) => {
      const updated = [...prev.informationComponent];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return { ...prev, informationComponent: updated };
    });
  };

  const handleInfoTagChange = (index: number, tagIndex: number, value: string) => {
    setAboutData((prev) => {
      const updated = [...prev.informationComponent];
      const newTags = [...updated[index].tags];
      newTags[tagIndex] = value;
      updated[index] = { ...updated[index], tags: newTags };
      return { ...prev, informationComponent: updated };
    });
  };

  const addInfoRow = () => {
    setAboutData((prev) => ({
      ...prev,
      informationComponent: [
        ...prev.informationComponent,
        { description: "", tags: ["", "", ""], footer: "" },
      ],
    }));
  };

  const deleteInfoRow = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      informationComponent: prev.informationComponent.filter((_, i) => i !== index),
    }));
  };

  const handleAcademicChange = (
    index: number,
    field: keyof AcademicItem,
    value: string
  ) => {
    setAboutData((prev) => {
      const updated = [...prev.academics];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, academics: updated };
    });
  };

  const addAcademicRow = () => {
    setAboutData((prev) => ({
      ...prev,
      academics: [
        ...prev.academics,
        {
          education: "",
          university: "",
          location: "",
          year: "",
          description: "",
        },
      ],
    }));
  };

  const deleteAcademicRow = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      academics: prev.academics.filter((_, i) => i !== index),
    }));
  };

  const handleWorkChange = (index: number, field: keyof WorkItem, value: string) => {
    setAboutData((prev) => {
      const updated = [...prev.workExperience.items];
      updated[index] = { ...updated[index], [field]: value };
      return {
        ...prev,
        workExperience: { ...prev.workExperience, items: updated },
      };
    });
  };

  const addWorkRow = () => {
    setAboutData((prev) => ({
      ...prev,
      workExperience: {
        ...prev.workExperience,
        items: [
          ...prev.workExperience.items,
          {
            designation: "",
            company: "",
            location: "",
            year: "",
            description: "",
          },
        ],
      },
    }));
  };

  const deleteWorkRow = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      workExperience: {
        ...prev.workExperience,
        items: prev.workExperience.items.filter((_, i) => i !== index),
      },
    }));
  };

  const handleMembershipChange = (
    index: number,
    field: keyof MembershipItem,
    value: string
  ) => {
    setAboutData((prev) => {
      const updated = [...prev.memberships.items];
      updated[index] = { ...updated[index], [field]: value };
      return {
        ...prev,
        memberships: { ...prev.memberships, items: updated },
      };
    });
  };

  const addMembershipRow = () => {
    setAboutData((prev) => ({
      ...prev,
      memberships: {
        ...prev.memberships,
        items: [
          ...prev.memberships.items,
          {
            membershipTitle: "",
            id: "",
            description: "",
          },
        ],
      },
    }));
  };

  const deleteMembershipRow = (index: number) => {
    setAboutData((prev) => ({
      ...prev,
      memberships: {
        ...prev.memberships,
        items: prev.memberships.items.filter((_, i) => i !== index),
      },
    }));
  };

const handleWorldRecordChange = (
  index: number,
  field: keyof WorldRecordItem,
  value: string
) => {
  setAwardsRecordsData((prev) => {
    const updated = [...prev.worldRecords];
    updated[index] = { ...updated[index], [field]: value };
    return { ...prev, worldRecords: updated };
  });
};

const addWorldRecordRow = () => {
  setAwardsRecordsData((prev) => ({
    ...prev,
    worldRecords: [
      ...prev.worldRecords,
      { recordTitle: "", date: "", description: "" },
    ],
  }));
};

const deleteWorldRecordRow = (index: number) => {
  setAwardsRecordsData((prev) => ({
    ...prev,
    worldRecords: prev.worldRecords.filter((_, i) => i !== index),
  }));
};

//   const addWorldRecordRow = () => {
//     setAboutData((prev) => ({
//       ...prev,
//       worldRecords: [
//         ...prev.worldRecords,
//         { recordTitle: "", date: "", description: "" },
//       ],
//     }));
//   };

//   const deleteWorldRecordRow = (index: number) => {
//     setAboutData((prev) => ({
//       ...prev,
//       worldRecords: prev.worldRecords.filter((_, i) => i !== index),
//     }));
//   };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof HomeState,
    field: string
  ) => {
    const file = e.target.files?.[0] || null;
    handleHomeChange(section, field, file);
  };

const handleSave = async () => {
const content =
  activePage === "home"
    ? homeData
    : activePage === "about"
    ? aboutData
    : awardsRecordsData;
      try {
    const res = await fetch("/api/cms/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageSlug: activePage,
        content,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || "Failed to save");
      return;
    }

    alert("CMS data saved successfully");
    console.log(result.data);
  } catch (error) {
    alert("Something went wrong while saving");
  }
};
const handleLogout = async () => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const result = await res.json();

    if (!res.ok) {
      alert(result.message || "Logout failed");
      return;
    }

    // redirect after logout
    window.location.href = "/";

  } catch (error) {
    alert("Something went wrong");
  }
};
  return (
    <main className="cmsv1-page">
      <div className="cmsv1-topbar">
        <div>
          <p className="cmsv1-brand">DR. YETHINDRA VITYALA</p>
          <h1 className="cmsv1-title">CMS</h1>
        </div>

        <button className="cmsv1-logout-btn" onClick={handleLogout}>Log Out</button>
      </div>

      <div className="cmsv1-toolbar">
<select
  className="cmsv1-select"
  value={activePage}
  onChange={(e) =>
    setActivePage(e.target.value as "home" | "about" | "awards-records")
  }
>
  <option value="home">Home</option>
  <option value="about">About</option>
  <option value="awards-records">Awards & Records</option>
</select>

        <input className="cmsv1-search" placeholder="Search" />
      </div>

      <div className="cmsv1-layout">
       <aside className="cmsv1-sidebar">
  <button
    className={`cmsv1-side-item ${activePage === "home" ? "cmsv1-side-item-active" : ""}`}
    onClick={() => setActivePage("home")}
  >
    Home
  </button>

  <button
    className={`cmsv1-side-item ${activePage === "about" ? "cmsv1-side-item-active" : ""}`}
    onClick={() => setActivePage("about")}
  >
    About
  </button>

  <button
    className={`cmsv1-side-item ${
      activePage === "awards-records" ? "cmsv1-side-item-active" : ""
    }`}
    onClick={() => setActivePage("awards-records")}
  >
    Awards & Records
  </button>
</aside>

        <section className="cmsv1-content">
          {activePage === "home" && (
            <>
              <CmsSection title="Main Component">
                <div className="cmsv1-grid-2">
                  <CmsInput
                    label="Heading"
                    value={homeData.mainComponent.heading}
                    onChange={(v) => handleHomeChange("mainComponent", "heading", v)}
                  />
                  <CmsInput
                    label="Sub Heading"
                    value={homeData.mainComponent.subHeading}
                    onChange={(v) => handleHomeChange("mainComponent", "subHeading", v)}
                  />
                </div>

                {/* <div className="cmsv1-grid-3">
                  <CmsFile
                    label="Image 1"
                    fileName={homeData.mainComponent.image1?.name || ""}
                    onChange={(e) => handleFileChange(e, "mainComponent", "image1")}
                  />
                  <CmsFile
                    label="Image 2"
                    fileName={homeData.mainComponent.image2?.name || ""}
                    onChange={(e) => handleFileChange(e, "mainComponent", "image2")}
                  />
                  <CmsFile
                    label="Image 3"
                    fileName={homeData.mainComponent.image3?.name || ""}
                    onChange={(e) => handleFileChange(e, "mainComponent", "image3")}
                  />
                </div> */}
              </CmsSection>

              <CmsSection title="Current Work">
                <CmsTextArea
                  label="Currently Working Details"
                  value={homeData.currentWork.details}
                  onChange={(v) => handleHomeChange("currentWork", "details", v)}
                />
              </CmsSection>

              <CmsSection title="Research Metrics">
                <div className="cmsv1-grid-4">
                  <CmsInput
                    label="H-Index"
                    value={homeData.researchMetrics.hIndex}
                    onChange={(v) => handleHomeChange("researchMetrics", "hIndex", v)}
                  />
                  <CmsInput
                    label="Citations"
                    value={homeData.researchMetrics.citations}
                    onChange={(v) => handleHomeChange("researchMetrics", "citations", v)}
                  />
                  <CmsInput
                    label="Publications"
                    value={homeData.researchMetrics.publications}
                    onChange={(v) => handleHomeChange("researchMetrics", "publications", v)}
                  />
                  <CmsInput
                    label="Last Updated On"
                    type="date"
                    value={homeData.researchMetrics.lastUpdatedOn}
                    onChange={(v) => handleHomeChange("researchMetrics", "lastUpdatedOn", v)}
                  />
                </div>
              </CmsSection>

   <CmsSection
  title="Achievements and Goals"
  action={
    <button className="cmsv1-add-btn" onClick={addAchievementRow}>
      + Add Row
    </button>
  }
>
  {homeData.achievementsGoals.map((item, index) => (
    <div key={index} className="cmsv1-repeat-card">
      <div className="cmsv1-repeat-head">
        <h4>Achievement Row {index + 1}</h4>
        {homeData.achievementsGoals.length > 1 && (
          <button
            className="cmsv1-delete-btn"
            onClick={() => deleteAchievementRow(index)}
          >
            Delete
          </button>
        )}
      </div>

      <div className="cmsv1-grid-2">
        <CmsInput
          label="Heading"
          value={item.heading}
          onChange={(v) => handleAchievementChange(index, "heading", v)}
        />
        <CmsInput
          label="Sub Heading"
          value={item.subHeading}
          onChange={(v) => handleAchievementChange(index, "subHeading", v)}
        />
      </div>
    </div>
  ))}
</CmsSection>

              <CmsSection title="Time Spent">
                <div className="cmsv1-grid-3">
                  <CmsInput
                    label="Start Year"
                    value={homeData.timeSpent.startYear}
                    onChange={(v) => handleHomeChange("timeSpent", "startYear", v)}
                  />
                  <CmsInput
                    label="End Year"
                    value={homeData.timeSpent.endYear}
                    onChange={(v) => handleHomeChange("timeSpent", "endYear", v)}
                  />
                  <CmsInput
                    label="Start Location"
                    value={homeData.timeSpent.startLocation}
                    onChange={(v) => handleHomeChange("timeSpent", "startLocation", v)}
                  />
                  <CmsInput
                    label="Start Coordinate"
                    value={homeData.timeSpent.startCoordinate}
                    onChange={(v) =>
                      handleHomeChange("timeSpent", "startCoordinate", v)
                    }
                  />
                  <CmsInput
                    label="End Location"
                    value={homeData.timeSpent.endLocation}
                    onChange={(v) => handleHomeChange("timeSpent", "endLocation", v)}
                  />
                  <CmsInput
                    label="End Coordinate"
                    value={homeData.timeSpent.endCoordinate}
                    onChange={(v) => handleHomeChange("timeSpent", "endCoordinate", v)}
                  />
                  <CmsInput
                    label="Low Time in Hr"
                    value={homeData.timeSpent.lowTimeHr}
                    onChange={(v) => handleHomeChange("timeSpent", "lowTimeHr", v)}
                  />
                  <CmsInput
                    label="High Time in Hr"
                    value={homeData.timeSpent.highTimeHr}
                    onChange={(v) => handleHomeChange("timeSpent", "highTimeHr", v)}
                  />
                  <CmsInput
                    label="Medium Time in Hr"
                    value={homeData.timeSpent.mediumTimeHr}
                    onChange={(v) => handleHomeChange("timeSpent", "mediumTimeHr", v)}
                  />
                </div>
              </CmsSection>
            </>
          )}

          {activePage === "about" && (
            <>
              <CmsSection title="Hero Component">
                <div className="cmsv1-grid-2">
                  <CmsInput
                    label="Heading"
                    value={aboutData.heroComponent.heading}
                    onChange={(v) => handleAboutSectionChange("heroComponent", "heading", v)}
                  />
                  <CmsInput
                    label="Sub Heading"
                    value={aboutData.heroComponent.subHeading}
                    onChange={(v) =>
                      handleAboutSectionChange("heroComponent", "subHeading", v)
                    }
                  />
                </div>
              </CmsSection>

              <CmsSection
                title="Information Component"
                action={<button className="cmsv1-add-btn" onClick={addInfoRow}>+ Add Row</button>}
              >
                {aboutData.informationComponent.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Information Row {index + 1}</h4>
                      {aboutData.informationComponent.length > 1 && (
                        <button className="cmsv1-delete-btn" onClick={() => deleteInfoRow(index)}>
                          Delete
                        </button>
                      )}
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleInfoChange(index, "description", v)}
                    />

                    <div className="cmsv1-grid-3">
                      <CmsInput
                        label="Tag 1"
                        value={item.tags[0]}
                        onChange={(v) => handleInfoTagChange(index, 0, v)}
                      />
                      <CmsInput
                        label="Tag 2"
                        value={item.tags[1]}
                        onChange={(v) => handleInfoTagChange(index, 1, v)}
                      />
                      <CmsInput
                        label="Tag 3"
                        value={item.tags[2]}
                        onChange={(v) => handleInfoTagChange(index, 2, v)}
                      />
                    </div>

                    <CmsInput
                      label="Footer"
                      value={item.footer}
                      onChange={(v) => handleInfoChange(index, "footer", v)}
                    />
                  </div>
                ))}
              </CmsSection>

              <CmsSection
                title="Academics"
                action={<button className="cmsv1-add-btn" onClick={addAcademicRow}>+ Add Row</button>}
              >
                <CmsTextArea
                  label="Description"
                  value={aboutData.academicsDescription}
                  onChange={(v) =>
                    setAboutData((prev) => ({ ...prev, academicsDescription: v }))
                  }
                />

                {aboutData.academics.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Academic Row {index + 1}</h4>
                      {aboutData.academics.length > 1 && (
                        <button className="cmsv1-delete-btn" onClick={() => deleteAcademicRow(index)}>
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput label="Education" value={item.education} onChange={(v) => handleAcademicChange(index, "education", v)} />
                      <CmsInput label="University" value={item.university} onChange={(v) => handleAcademicChange(index, "university", v)} />
                      <CmsInput label="Location" value={item.location} onChange={(v) => handleAcademicChange(index, "location", v)} />
                      <CmsInput label="Year" value={item.year} onChange={(v) => handleAcademicChange(index, "year", v)} />
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleAcademicChange(index, "description", v)}
                    />
                  </div>
                ))}
              </CmsSection>

              <CmsSection title="100vh Section">
                <CmsTextArea
                  label="Description"
                  value={aboutData.section100vh.description}
                  onChange={(v) => handleAboutSectionChange("section100vh", "description", v)}
                />
              </CmsSection>

              <CmsSection
                title="Work & Experience"
                action={<button className="cmsv1-add-btn" onClick={addWorkRow}>+ Add Row</button>}
              >
                <CmsTextArea
                  label="Description"
                  value={aboutData.workExperience.description}
                  onChange={(v) =>
                    setAboutData((prev) => ({
                      ...prev,
                      workExperience: { ...prev.workExperience, description: v },
                    }))
                  }
                />

                {aboutData.workExperience.items.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Work Row {index + 1}</h4>
                      {aboutData.workExperience.items.length > 1 && (
                        <button className="cmsv1-delete-btn" onClick={() => deleteWorkRow(index)}>
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput label="Designation" value={item.designation} onChange={(v) => handleWorkChange(index, "designation", v)} />
                      <CmsInput label="Company / Institution" value={item.company} onChange={(v) => handleWorkChange(index, "company", v)} />
                      <CmsInput label="Location" value={item.location} onChange={(v) => handleWorkChange(index, "location", v)} />
                      <CmsInput label="Year" value={item.year} onChange={(v) => handleWorkChange(index, "year", v)} />
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleWorkChange(index, "description", v)}
                    />
                  </div>
                ))}
              </CmsSection>

              <CmsSection
                title="Memberships"
                action={<button className="cmsv1-add-btn" onClick={addMembershipRow}>+ Add Row</button>}
              >
                <CmsTextArea
                  label="Description"
                  value={aboutData.memberships.description}
                  onChange={(v) =>
                    setAboutData((prev) => ({
                      ...prev,
                      memberships: { ...prev.memberships, description: v },
                    }))
                  }
                />

                {aboutData.memberships.items.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Membership Row {index + 1}</h4>
                      {aboutData.memberships.items.length > 1 && (
                        <button
                          className="cmsv1-delete-btn"
                          onClick={() => deleteMembershipRow(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput
                        label="Membership Title"
                        value={item.membershipTitle}
                        onChange={(v) => handleMembershipChange(index, "membershipTitle", v)}
                      />
                      <CmsInput
                        label="ID"
                        value={item.id}
                        onChange={(v) => handleMembershipChange(index, "id", v)}
                      />
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleMembershipChange(index, "description", v)}
                    />
                  </div>
                ))}
              </CmsSection>

              {/* <CmsSection
                title="World Records"
                action={<button className="cmsv1-add-btn" onClick={addWorldRecordRow}>+ Add Row</button>}
              >
                {aboutData.worldRecords.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Record Row {index + 1}</h4>
                      {aboutData.worldRecords.length > 1 && (
                        <button
                          className="cmsv1-delete-btn"
                          onClick={() => deleteWorldRecordRow(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput
                        label="Record Title"
                        value={item.recordTitle}
                        onChange={(v) => handleWorldRecordChange(index, "recordTitle", v)}
                      />
                      <CmsInput
                        label="Date"
                        type="date"
                        value={item.date}
                        onChange={(v) => handleWorldRecordChange(index, "date", v)}
                      />
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleWorldRecordChange(index, "description", v)}
                    />
                  </div>
                ))}
              </CmsSection> */}
            </>
          )}
          {activePage === "awards-records" && (
  <>
    <CmsSection
      title="World Records"
      action={
        <button className="cmsv1-add-btn" onClick={addWorldRecordRow}>
          + Add Row
        </button>
      }
    >
      {awardsRecordsData.worldRecords.map((item, index) => (
        <div key={index} className="cmsv1-repeat-card">
          <div className="cmsv1-repeat-head">
            <h4>Record Row {index + 1}</h4>
            {awardsRecordsData.worldRecords.length > 1 && (
              <button
                className="cmsv1-delete-btn"
                onClick={() => deleteWorldRecordRow(index)}
              >
                Delete
              </button>
            )}
          </div>

          <div className="cmsv1-grid-2">
            <CmsInput
              label="Record Title"
              value={item.recordTitle}
              onChange={(v) => handleWorldRecordChange(index, "recordTitle", v)}
            />
            <CmsInput
              label="Date"
              type="date"
              value={item.date}
              onChange={(v) => handleWorldRecordChange(index, "date", v)}
            />
          </div>

          <CmsTextArea
            label="Description"
            value={item.description}
            onChange={(v) => handleWorldRecordChange(index, "description", v)}
          />
        </div>
      ))}
    </CmsSection>
  </>
)}

          <div className="cmsv1-save-wrap">
            <button className="cmsv1-save-btn" onClick={handleSave}>
              Save CMS Data
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

function CmsSection({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="cmsv1-section">
      <div className="cmsv1-section-head">
        <h3>{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function CmsInput({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div className="cmsv1-field">
      <label>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function CmsTextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="cmsv1-field">
      <label>{label}</label>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function CmsFile({
  label,
  fileName,
  onChange,
}: {
  label: string;
  fileName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="cmsv1-field">
      <label>{label}</label>
      <label className="cmsv1-upload-box">
        <input type="file" onChange={onChange} hidden />
        <span>{fileName || "Drop a file or click to browse"}</span>
      </label>
    </div>
  );
}