"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
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
    title: string;
    tag: string;
    description: string;
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
  affiliatedSource: string;
  description: string;
};
type AwardsRecordsState = {
  pageTag: string;
  informativeComponent: {
    tag: string;
    description: string;
    keywordsText: string;
  };
  worldRecords: WorldRecordItem[];
  awards: AwardItem[];
};
type AwardItem = {
  title: string;
  year: string;
  source: string;
  description: string;
  imageUrl?: string;
  imageObjectPath?: string;
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
type ResearchPublicationItem = {
  title: string;
  description: string;
  type: string;
  year: string;
  link: string;
  imageUrl: string;
  imageObjectPath: string;
};

type ResearchPublicationsState = {
  items: ResearchPublicationItem[];
};

type SpeakingMediaItem = {
  title: string;
  description: string;
  type: string;
  imageUrl: string;
  imageObjectPath: string;
};

type SpeakingMediaState = {
  items: SpeakingMediaItem[];
};

const DEFAULT_AWARDS_RECORDS_STATE: AwardsRecordsState = {
  pageTag: "Global Prodigy Honors",
  informativeComponent: {
    tag: "Achievement Mastery",
    description:
      "In a decade, Dr. Yethindra Vityala achieved 12 international world records and received over 25 awards. These achievements come from his relentless commitment to advancing medical science and education.",
    keywordsText:
      "World Records, Medical Research, Awards & Honours, Academic Excellence, Global Recognition, Physician-Scientist",
  },
  worldRecords: [
    {
      recordTitle: "Longest title of a book",
      affiliatedSource: "Guinness World Records, 2020",
      description:
        "In 2020, the Guinness World Records acknowledged the longest title of a book, with over 3,777 words and 26,021 characters. Starting with The Historical Development of the Heart..., it lists every known species with a heart, marking an unparalleled achievement.",
    },
    {
      recordTitle: "World's Youngest Scientist in Medicine",
      affiliatedSource:
        "High Range Book of World Records, Assam Book of Records, World Record Certification Agency, and Assist World Records, 2019",
      description:
        "At 22, Dr. Yethindra Vityala achieved what many scientists strive for, publishing path-breaking peer-reviewed medical research papers and earning the title of the world's Youngest Scientist in Medicine.",
    },
  ],
  awards: [
    {
      title: "International Distinguished Young Researcher",
      year: "2020",
      source: "Green Thinkerz",
      description:
        "Acknowledged for his remarkable contributions to medical research at a young age.",
      imageUrl: "",
      imageObjectPath: "",
    },
    {
      title: "Mahatma Gandhi National Award",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum",
      description:
        "Recognizes his impact on science and society through academic and medical advancements.",
      imageUrl: "",
      imageObjectPath: "",
    },
  ],
};

const DEFAULT_SPEAKING_MEDIA_STATE: SpeakingMediaState = {
  items: [
    {
      title: "Philanthropy Highlight",
      description:
        "Add a philanthropic initiative, community impact story, or service feature here.",
      type: "Philanthropy",
      imageUrl: "",
      imageObjectPath: "",
    },
    {
      title: "Campaign Spotlight",
      description:
        "Add a campaign image and a short summary for the frontend media grid.",
      type: "Campaigns",
      imageUrl: "",
      imageObjectPath: "",
    },
    {
      title: "Community Outreach Event",
      description:
        "Add outreach work, public engagement, or neighborhood health activities.",
      type: "Community Outreach",
      imageUrl: "",
      imageObjectPath: "",
    },
    {
      title: "Guest Lecture",
      description:
        "Use this row for lecture programs, talks, or academic speaking engagements.",
      type: "Lectures",
      imageUrl: "",
      imageObjectPath: "",
    },
    {
      title: "Conference Appearance",
      description:
        "Use this row for conference talks, panel sessions, or keynote appearances.",
      type: "Conferences",
      imageUrl: "",
      imageObjectPath: "",
    },
  ],
};

const normalizeKeywords = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const createEmptyInfoItem = (): InfoItem => ({
  description: "",
  tags: [""],
  footer: "",
});

const normalizeAboutContent = (content: unknown): AboutState => {
  const source = (content ?? {}) as {
    heroComponent?: { heading?: unknown; subHeading?: unknown };
    informationComponent?: unknown;
    academicsDescription?: unknown;
    academics?: unknown;
    section100vh?: { description?: unknown };
    workExperience?: { description?: unknown; items?: unknown };
    memberships?: { description?: unknown; items?: unknown };
  };

  return {
    heroComponent: {
      heading: String(source.heroComponent?.heading || ""),
      subHeading: String(source.heroComponent?.subHeading || ""),
    },
    informationComponent: Array.isArray(source.informationComponent)
      ? source.informationComponent.map((item: Partial<InfoItem>) => ({
          description: String(item.description || ""),
          tags: Array.isArray(item.tags)
            ? item.tags.map((tag) => String(tag || ""))
            : typeof item.tags === "string"
              ? item.tags
                  .split(",")
                  .map((tag) => tag.trim())
                  .filter(Boolean)
              : [""],
          footer: String(item.footer || ""),
        }))
      : [createEmptyInfoItem()],
    academicsDescription: String(source.academicsDescription || ""),
    academics: Array.isArray(source.academics)
      ? source.academics.map((item: Partial<AcademicItem>) => ({
          education: String(item.education || ""),
          university: String(item.university || ""),
          location: String(item.location || ""),
          year: String(item.year || ""),
          description: String(item.description || ""),
        }))
      : [],
    section100vh: {
      description: String(source.section100vh?.description || ""),
    },
    workExperience: {
      description: String(source.workExperience?.description || ""),
      items: Array.isArray(source.workExperience?.items)
        ? source.workExperience.items.map((item: Partial<WorkItem>) => ({
            designation: String(item.designation || ""),
            company: String(item.company || ""),
            location: String(item.location || ""),
            year: String(item.year || ""),
            description: String(item.description || ""),
          }))
        : [],
    },
    memberships: {
      description: String(source.memberships?.description || ""),
      items: Array.isArray(source.memberships?.items)
        ? source.memberships.items.map((item: Partial<MembershipItem>) => ({
            membershipTitle: String(item.membershipTitle || ""),
            id: String(item.id || ""),
            description: String(item.description || ""),
          }))
        : [],
    },
  };
};

const normalizeAwardsRecordsContent = (content: unknown): AwardsRecordsState => {
  const source = (content ?? {}) as {
    pageTag?: unknown;
    informativeComponent?: {
      tag?: unknown;
      title?: unknown;
      description?: unknown;
      keywords?: unknown;
    };
    worldRecords?: unknown;
    awards?: unknown;
  };
  const informativeComponent = source.informativeComponent ?? {};

  return {
    pageTag: String(source.pageTag || DEFAULT_AWARDS_RECORDS_STATE.pageTag),
    informativeComponent: {
      tag:
        String(informativeComponent.tag || informativeComponent.title || DEFAULT_AWARDS_RECORDS_STATE.informativeComponent.tag),
      description: String(
        informativeComponent.description ||
          DEFAULT_AWARDS_RECORDS_STATE.informativeComponent.description
      ),
      keywordsText: Array.isArray(informativeComponent.keywords)
        ? informativeComponent.keywords.join(", ")
        : String(
            informativeComponent.keywords ||
              DEFAULT_AWARDS_RECORDS_STATE.informativeComponent.keywordsText
          ),
    },
    worldRecords: Array.isArray(source.worldRecords)
      ? source.worldRecords.map((item: Partial<WorldRecordItem>) => ({
          recordTitle: item.recordTitle || "",
          affiliatedSource: item.affiliatedSource || "",
          description: item.description || "",
        }))
      : DEFAULT_AWARDS_RECORDS_STATE.worldRecords,
    awards: Array.isArray(source.awards)
      ? source.awards.map((item: Partial<AwardItem>) => ({
          title: item.title || "",
          year: item.year || "",
          source: item.source || "",
          description: item.description || "",
          imageUrl: item.imageUrl || "",
          imageObjectPath: item.imageObjectPath || "",
        }))
      : DEFAULT_AWARDS_RECORDS_STATE.awards,
  };
};

const normalizeSpeakingMediaContent = (content: unknown): SpeakingMediaState => {
  const source = (content ?? {}) as {
    items?: unknown;
  };

  return {
    items: Array.isArray(source.items)
      ? source.items.map((item: Partial<SpeakingMediaItem>) => ({
          title: String(item.title || ""),
          description: String(item.description || ""),
          type: String(item.type || ""),
          imageUrl: String(item.imageUrl || ""),
          imageObjectPath: String(item.imageObjectPath || ""),
        }))
      : DEFAULT_SPEAKING_MEDIA_STATE.items.map((item) => ({ ...item })),
  };
};
export default function DashboardPage() {
  const [activePage, setActivePage] = useState<
    "home" | "about" | "awards-records" | "research-publications" | "speaking-media"
  >("home");
  useEffect(() => {
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

          if (typeof data?.currentWork === "string") {
            data.currentWork = {
              title: "",
              tag: "",
              description: data.currentWork,
            };
          } else if (data?.currentWork) {
            data.currentWork = {
              title: data.currentWork.title || "",
              tag: data.currentWork.tag || "",
              description: data.currentWork.description || "",
            };
          }

          setHomeData(data);
        } else if (activePage === "about") {
          setAboutData(normalizeAboutContent(result.data.content));
        } else if (activePage === "awards-records") {
          setAwardsRecordsData(normalizeAwardsRecordsContent(result.data.content));
        } else if (activePage === "research-publications") {
          const data = result.data.content;
          data.items = Array.isArray(data.items)
            ? data.items.map((item: Partial<ResearchPublicationItem>) => ({
                title: item.title || "",
                description: item.description || "",
                type: item.type || "",
                year: item.year || "",
                link: item.link || "",
                imageUrl: item.imageUrl || "",
                imageObjectPath: item.imageObjectPath || "",
              }))
            : [];
          setResearchPublicationsData(data);
        } else if (activePage === "speaking-media") {
          setSpeakingMediaData(normalizeSpeakingMediaContent(result.data.content));
        }
      } catch {
        console.error("Failed to load CMS data");
      }
    };

    loadCmsData();
  }, [activePage]);
  const handleResearchPublicationChange = (
    index: number,
    field: keyof ResearchPublicationItem,
    value: string
  ) => {
    setResearchPublicationsData((prev) => {
      const updated = [...prev.items];
      updated[index] = { ...updated[index], [field]: value };
      return {
        ...prev,
        items: updated,
      };
    });
  };

  const handleResearchPublicationImageChange = async (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/cms/upload-research-image", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result?.data?.imageUrl) {
        alert(result?.message || "Image upload failed");
        return;
      }

      setResearchPublicationsData((prev) => {
        const updated = [...prev.items];
        updated[index] = {
          ...updated[index],
          imageUrl: result.data.imageUrl,
          imageObjectPath: result.data.objectPath || "",
        };
        return {
          ...prev,
          items: updated,
        };
      });
    } catch {
      alert("Image upload failed");
    } finally {
      e.target.value = "";
    }
  };

  const handleResearchPublicationImageDelete = async (index: number) => {
    const item = researchPublicationsData.items[index];

    try {
      const res = await fetch("/api/cms/delete-research-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objectPath: item.imageObjectPath,
          imageUrl: item.imageUrl,
        }),
      });

      const result = await res.json();

      if (!res.ok && res.status !== 404) {
        alert(result?.message || "Image delete failed");
        return;
      }

      setResearchPublicationsData((prev) => {
        const updated = [...prev.items];
        updated[index] = {
          ...updated[index],
          imageUrl: "",
          imageObjectPath: "",
        };
        return {
          ...prev,
          items: updated,
        };
      });
    } catch {
      alert("Image delete failed");
    }
  };

  const handleAwardsImageChange = async (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/cms/upload-media-image", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result?.data?.imageUrl) {
        alert(result?.message || "Image upload failed");
        return;
      }

      setAwardsRecordsData((prev) => {
        const updated = [...prev.awards];
        updated[index] = {
          ...updated[index],
          imageUrl: result.data.imageUrl,
          imageObjectPath: result.data.objectPath || "",
        };
        return {
          ...prev,
          awards: updated,
        };
      });
    } catch {
      alert("Image upload failed");
    } finally {
      e.target.value = "";
    }
  };

  const handleAwardsImageDelete = async (index: number) => {
    const item = awardsRecordsData.awards[index];

    if (!item) {
      return;
    }

    try {
      const res = await fetch("/api/cms/delete-media-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objectPath: item.imageObjectPath,
          imageUrl: item.imageUrl,
        }),
      });

      const result = await res.json();

      if (!res.ok && res.status !== 404) {
        alert(result?.message || "Image delete failed");
        return;
      }

      setAwardsRecordsData((prev) => {
        const updated = [...prev.awards];
        updated[index] = {
          ...updated[index],
          imageUrl: "",
          imageObjectPath: "",
        };
        return {
          ...prev,
          awards: updated,
        };
      });
    } catch {
      alert("Image delete failed");
    }
  };

  const handleSpeakingMediaChange = (
    index: number,
    field: keyof SpeakingMediaItem,
    value: string
  ) => {
    setSpeakingMediaData((prev) => {
      const updated = [...prev.items];
      updated[index] = { ...updated[index], [field]: value };
      return {
        ...prev,
        items: updated,
      };
    });
  };

  const handleSpeakingMediaImageChange = async (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/cms/upload-media-image", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok || !result?.data?.imageUrl) {
        alert(result?.message || "Image upload failed");
        return;
      }

      setSpeakingMediaData((prev) => {
        const updated = [...prev.items];
        updated[index] = {
          ...updated[index],
          imageUrl: result.data.imageUrl,
          imageObjectPath: result.data.objectPath || "",
        };
        return {
          ...prev,
          items: updated,
        };
      });
    } catch {
      alert("Image upload failed");
    } finally {
      e.target.value = "";
    }
  };

  const handleSpeakingMediaImageDelete = async (index: number) => {
    const item = speakingMediaData.items[index];

    if (!item) {
      return;
    }

    try {
      const res = await fetch("/api/cms/delete-media-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objectPath: item.imageObjectPath,
          imageUrl: item.imageUrl,
        }),
      });

      const result = await res.json();

      if (!res.ok && res.status !== 404) {
        alert(result?.message || "Image delete failed");
        return;
      }

      setSpeakingMediaData((prev) => {
        const updated = [...prev.items];
        updated[index] = {
          ...updated[index],
          imageUrl: "",
          imageObjectPath: "",
        };
        return {
          ...prev,
          items: updated,
        };
      });
    } catch {
      alert("Image delete failed");
    }
  };

  const addResearchPublicationRow = () => {
    setResearchPublicationsData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          title: "",
          description: "",
          type: "",
          year: "",
          link: "",
          imageUrl: "",
          imageObjectPath: "",
        },
      ],
    }));
  };

  const deleteResearchPublicationRow = (index: number) => {
    setResearchPublicationsData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const addSpeakingMediaRow = () => {
    setSpeakingMediaData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          title: "",
          description: "",
          type: "",
          imageUrl: "",
          imageObjectPath: "",
        },
      ],
    }));
  };

  const deleteSpeakingMediaRow = (index: number) => {
    setSpeakingMediaData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };
  const [researchPublicationsData, setResearchPublicationsData] =
    useState<ResearchPublicationsState>({
      items: [
        {
          title: "",
          description: "",
          type: "",
          year: "",
          link: "",
          imageUrl: "",
          imageObjectPath: "",
        },
      ],
    });
  const [speakingMediaData, setSpeakingMediaData] = useState<SpeakingMediaState>(
    DEFAULT_SPEAKING_MEDIA_STATE
  );
  const [awardsRecordsData, setAwardsRecordsData] = useState<AwardsRecordsState>({
    ...DEFAULT_AWARDS_RECORDS_STATE,
    informativeComponent: {
      ...DEFAULT_AWARDS_RECORDS_STATE.informativeComponent,
    },
    worldRecords: DEFAULT_AWARDS_RECORDS_STATE.worldRecords,
    awards: DEFAULT_AWARDS_RECORDS_STATE.awards,
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
      title: "",
      tag: "",
      description: "",
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
      createEmptyInfoItem(),
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

  const addInfoTag = (index: number) => {
    setAboutData((prev) => {
      const updated = [...prev.informationComponent];
      updated[index] = {
        ...updated[index],
        tags: [...updated[index].tags, ""],
      };
      return { ...prev, informationComponent: updated };
    });
  };

  const deleteInfoTag = (index: number, tagIndex: number) => {
    setAboutData((prev) => {
      const updated = [...prev.informationComponent];
      const nextTags = updated[index].tags.filter((_, i) => i !== tagIndex);
      updated[index] = {
        ...updated[index],
        tags: nextTags.length ? nextTags : [""],
      };
      return { ...prev, informationComponent: updated };
    });
  };

  const addInfoRow = () => {
    setAboutData((prev) => ({
      ...prev,
      informationComponent: [
        ...prev.informationComponent,
        createEmptyInfoItem(),
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
        { recordTitle: "", affiliatedSource: "", description: "" },
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

  const handleSave = async () => {
    const content =
      activePage === "home"
        ? homeData
        : activePage === "about"
          ? aboutData
          : activePage === "awards-records"
            ? {
                pageTag: awardsRecordsData.pageTag,
                informativeComponent: {
                  tag: awardsRecordsData.informativeComponent.tag,
                  description: awardsRecordsData.informativeComponent.description,
                  keywords: normalizeKeywords(awardsRecordsData.informativeComponent.keywordsText),
                },
                worldRecords: awardsRecordsData.worldRecords.map((item) => ({
                  recordTitle: item.recordTitle,
                  affiliatedSource: item.affiliatedSource,
                  description: item.description,
                })),
                awards: awardsRecordsData.awards.map((item) => ({
                  title: item.title,
                  year: item.year,
                  source: item.source,
                  description: item.description,
                  imageUrl: item.imageUrl || "",
                  imageObjectPath: item.imageObjectPath || "",
                })),
              }
            : activePage === "research-publications"
              ? {
                  items: researchPublicationsData.items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    type: item.type,
                    year: item.year,
                    link: item.link,
                    imageUrl: item.imageUrl,
                    imageObjectPath: item.imageObjectPath,
                  })),
                }
              : {
                  items: speakingMediaData.items.map((item) => ({
                    title: item.title,
                    description: item.description,
                    type: item.type,
                    imageUrl: item.imageUrl,
                    imageObjectPath: item.imageObjectPath,
                  })),
                };
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
    } catch {
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

    } catch {
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
            setActivePage(
              e.target.value as
                | "home"
                | "about"
                | "awards-records"
                | "research-publications"
                | "speaking-media"
            )
          }
        >
          <option value="home">Home</option>
          <option value="about">About</option>
          <option value="awards-records">Awards & Records</option>
          <option value="research-publications">Research & Publications</option>
          <option value="speaking-media">Speaking & Media</option>
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
            className={`cmsv1-side-item ${activePage === "awards-records" ? "cmsv1-side-item-active" : ""
              }`}
            onClick={() => setActivePage("awards-records")}
          >
            Awards & Records
          </button>
          <button
            className={`cmsv1-side-item ${activePage === "research-publications" ? "cmsv1-side-item-active" : ""
              }`}
            onClick={() => setActivePage("research-publications")}
          >
            Research & Publications
          </button>
          <button
            className={`cmsv1-side-item ${activePage === "speaking-media" ? "cmsv1-side-item-active" : ""}`}
            onClick={() => setActivePage("speaking-media")}
          >
            Speaking & Media
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
                <div className="cmsv1-grid-2">
                  <CmsInput
                    label="Title"
                    value={homeData.currentWork.title}
                    onChange={(v) => handleHomeChange("currentWork", "title", v)}
                  />
                  <CmsInput
                    label="Tag"
                    value={homeData.currentWork.tag}
                    onChange={(v) => handleHomeChange("currentWork", "tag", v)}
                  />
                </div>
                <CmsTextArea
                  label="Description"
                  value={homeData.currentWork.description}
                  onChange={(v) => handleHomeChange("currentWork", "description", v)}
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

                    <div className="cmsv1-repeat-tags">
                      <div className="cmsv1-repeat-tags-head">
                        <h5>Tags</h5>
                        <button
                          type="button"
                          className="cmsv1-add-btn"
                          onClick={() => addInfoTag(index)}
                        >
                          + Add Tag
                        </button>
                      </div>

                      <div className="cmsv1-grid-3">
                        {item.tags.map((tag, tagIndex) => (
                          <div key={tagIndex} className="cmsv1-tag-row">
                            <CmsInput
                              label={`Tag ${tagIndex + 1}`}
                              value={tag}
                              onChange={(v) => handleInfoTagChange(index, tagIndex, v)}
                            />
                            {item.tags.length > 1 && (
                              <button
                                type="button"
                                className="cmsv1-delete-btn cmsv1-tag-delete-btn"
                                onClick={() => deleteInfoTag(index, tagIndex)}
                              >
                                Remove Tag
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
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
              <CmsSection title="Page Tag">
                <CmsInput
                  label="Page Tag"
                  value={awardsRecordsData.pageTag}
                  onChange={(v) =>
                    setAwardsRecordsData((prev) => ({
                      ...prev,
                      pageTag: v,
                    }))
                  }
                />
              </CmsSection>

              <CmsSection title="Informative Component">
                <div className="cmsv1-grid-2">
                  <CmsInput
                    label="Tag"
                    value={awardsRecordsData.informativeComponent.tag}
                    onChange={(v) =>
                      setAwardsRecordsData((prev) => ({
                        ...prev,
                        informativeComponent: {
                          ...prev.informativeComponent,
                          tag: v,
                        },
                      }))
                    }
                  />
                </div>

                <CmsTextArea
                  label="Description"
                  value={awardsRecordsData.informativeComponent.description}
                  onChange={(v) =>
                    setAwardsRecordsData((prev) => ({
                      ...prev,
                      informativeComponent: {
                        ...prev.informativeComponent,
                        description: v,
                      },
                    }))
                  }
                />

                <CmsTextArea
                  label="Keywords"
                  value={awardsRecordsData.informativeComponent.keywordsText}
                  onChange={(v) =>
                    setAwardsRecordsData((prev) => ({
                      ...prev,
                      informativeComponent: {
                        ...prev.informativeComponent,
                        keywordsText: v,
                      },
                    }))
                  }
                />
              </CmsSection>

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
                        label="Affiliated Source"
                        value={item.affiliatedSource}
                        onChange={(v) =>
                          handleWorldRecordChange(index, "affiliatedSource", v)
                        }
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

              <CmsSection
                title="Honour & Certifications"
                action={
                  <button
                    className="cmsv1-add-btn"
                    onClick={() =>
                      setAwardsRecordsData((prev) => ({
                        ...prev,
                awards: [
                  ...prev.awards,
                          {
                            title: "",
                            year: "",
                            source: "",
                            description: "",
                            imageUrl: "",
                            imageObjectPath: "",
                          },
                        ],
                      }))
                    }
                  >
                    + Add Row
                  </button>
                }
              >
                {awardsRecordsData.awards.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Award Row {index + 1}</h4>
                      {awardsRecordsData.awards.length > 1 && (
                        <button
                          className="cmsv1-delete-btn"
                          onClick={() =>
                            setAwardsRecordsData((prev) => ({
                              ...prev,
                              awards: prev.awards.filter((_, i) => i !== index),
                            }))
                          }
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput
                        label="Title"
                        value={item.title}
                        onChange={(v) =>
                          setAwardsRecordsData((prev) => {
                            const updated = [...prev.awards];
                            updated[index] = { ...updated[index], title: v };
                            return { ...prev, awards: updated };
                          })
                        }
                      />
                      <CmsInput
                        label="Year"
                        value={item.year}
                        onChange={(v) =>
                          setAwardsRecordsData((prev) => {
                            const updated = [...prev.awards];
                            updated[index] = { ...updated[index], year: v };
                            return { ...prev, awards: updated };
                          })
                        }
                      />
                      <CmsInput
                        label="Source"
                        value={item.source}
                        onChange={(v) =>
                          setAwardsRecordsData((prev) => {
                            const updated = [...prev.awards];
                            updated[index] = { ...updated[index], source: v };
                            return { ...prev, awards: updated };
                          })
                        }
                      />
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) =>
                        setAwardsRecordsData((prev) => {
                          const updated = [...prev.awards];
                          updated[index] = { ...updated[index], description: v };
                          return { ...prev, awards: updated };
                        })
                      }
                    />

                    <div className="cmsv1-research-cover">
                      <div className="cmsv1-research-cover-head">
                        <div>
                          <label>Certificate Image</label>
                          <p>
                            Upload an image for this honour or certification. If empty,
                            the frontend will show the default certificate image.
                          </p>
                        </div>
                        <span className={`cmsv1-research-cover-badge ${item.imageUrl ? "is-ready" : ""}`}>
                          {item.imageUrl ? "Uploaded" : "Default only"}
                        </span>
                      </div>

                      <div className="cmsv1-research-cover-body">
                        <div className="cmsv1-research-cover-preview">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.title || "Certificate"}
                              fill
                              className="cmsv1-research-cover-image"
                              sizes="240px"
                            />
                          ) : (
                            <div className="cmsv1-research-cover-placeholder">
                              <span className="cmsv1-research-cover-placeholder-icon">+</span>
                              <strong>No image yet</strong>
                              <span>Upload a certificate from Supabase Storage</span>
                            </div>
                          )}
                        </div>

                        <div className="cmsv1-research-cover-actions">
                          <label className="cmsv1-research-cover-upload-btn">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAwardsImageChange(index, e)}
                              hidden
                            />
                            {item.imageUrl ? "Replace image" : "Upload image"}
                          </label>
                          <button
                            type="button"
                            className="cmsv1-research-cover-delete-btn"
                            disabled={!item.imageUrl}
                            onClick={() => handleAwardsImageDelete(index)}
                          >
                            Delete image
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CmsSection>
            </>
          )}
          {activePage === "research-publications" && (
            <>
              <CmsSection
                title="Research & Publications"
                action={
                  <button className="cmsv1-add-btn" onClick={addResearchPublicationRow}>
                    + Add Row
                  </button>
                }
              >
                {researchPublicationsData.items.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Research / Publication Row {index + 1}</h4>
                      {researchPublicationsData.items.length > 1 && (
                        <button
                          className="cmsv1-delete-btn"
                          onClick={() => deleteResearchPublicationRow(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput
                        label="Title"
                        value={item.title}
                        onChange={(v) =>
                          handleResearchPublicationChange(index, "title", v)
                        }
                      />
                      <CmsInput
                        label="Year"
                        value={item.year}
                        onChange={(v) =>
                          handleResearchPublicationChange(index, "year", v)
                        }
                      />
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsSelect
                        label="Type"
                        value={item.type}
                        onChange={(v) => handleResearchPublicationChange(index, "type", v)}
                        options={["Publication", "Book"]}
                      />
                      <CmsInput
                        label="Link"
                        value={item.link || ""}
                        onChange={(v) =>
                          handleResearchPublicationChange(index, "link", v)
                        }
                      />
                    </div>

                    <div className="cmsv1-research-cover">
                      <div className="cmsv1-research-cover-head">
                        <div>
                          <label>Cover Image</label>
                          <p>
                            Upload a cover image for this research item. If empty,
                            the frontend will show the default book image.
                          </p>
                        </div>
                        <span className={`cmsv1-research-cover-badge ${item.imageUrl ? "is-ready" : ""}`}>
                          {item.imageUrl ? "Uploaded" : "Default only"}
                        </span>
                      </div>

                      <div className="cmsv1-research-cover-body">
                        <div className="cmsv1-research-cover-preview">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.title || "Research cover"}
                              fill
                              className="cmsv1-research-cover-image"
                              sizes="240px"
                            />
                          ) : (
                            <div className="cmsv1-research-cover-placeholder">
                              <span className="cmsv1-research-cover-placeholder-icon">+</span>
                              <strong>No image yet</strong>
                              <span>Upload a cover from Supabase Storage</span>
                            </div>
                          )}
                        </div>

                        <div className="cmsv1-research-cover-actions">
                          <label className="cmsv1-research-cover-upload-btn">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleResearchPublicationImageChange(index, e)}
                              hidden
                            />
                            {item.imageUrl ? "Replace image" : "Upload image"}
                          </label>
                          <button
                            type="button"
                            className="cmsv1-research-cover-delete-btn"
                            disabled={!item.imageUrl}
                            onClick={() => handleResearchPublicationImageDelete(index)}
                          >
                            Delete image
                          </button>
                        </div>
                      </div>
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) =>
                        handleResearchPublicationChange(index, "description", v)
                      }
                    />
                  </div>
                ))}
              </CmsSection>
            </>
          )}
          {activePage === "speaking-media" && (
            <>
              <CmsSection
                title="Speaking & Media"
                action={
                  <button className="cmsv1-add-btn" onClick={addSpeakingMediaRow}>
                    + Add Row
                  </button>
                }
              >
                {speakingMediaData.items.map((item, index) => (
                  <div key={index} className="cmsv1-repeat-card">
                    <div className="cmsv1-repeat-head">
                      <h4>Media Row {index + 1}</h4>
                      {speakingMediaData.items.length > 1 && (
                        <button
                          className="cmsv1-delete-btn"
                          onClick={() => deleteSpeakingMediaRow(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <div className="cmsv1-grid-2">
                      <CmsInput
                        label="Title"
                        value={item.title}
                        onChange={(v) => handleSpeakingMediaChange(index, "title", v)}
                      />
                      <CmsSelect
                        label="Type"
                        value={item.type}
                        onChange={(v) => handleSpeakingMediaChange(index, "type", v)}
                        options={[
                          "Philanthropy",
                          "Campaigns",
                          "Community Outreach",
                          "Lectures",
                          "Conferences",
                        ]}
                      />
                    </div>

                    <div className="cmsv1-research-cover">
                      <div className="cmsv1-research-cover-head">
                        <div>
                          <label>Image</label>
                          <p>
                            Upload a speaking/media image. If empty, the card will use the default certificate image.
                          </p>
                        </div>
                        <span className={`cmsv1-research-cover-badge ${item.imageUrl ? "is-ready" : ""}`}>
                          {item.imageUrl ? "Uploaded" : "Default only"}
                        </span>
                      </div>

                      <div className="cmsv1-research-cover-body">
                        <div className="cmsv1-research-cover-preview">
                          {item.imageUrl ? (
                            <Image
                              src={item.imageUrl}
                              alt={item.title || "Speaking media image"}
                              fill
                              className="cmsv1-research-cover-image"
                              sizes="240px"
                            />
                          ) : (
                            <div className="cmsv1-research-cover-placeholder">
                              <span className="cmsv1-research-cover-placeholder-icon">+</span>
                              <strong>No image yet</strong>
                              <span>Upload a media cover from Supabase Storage</span>
                            </div>
                          )}
                        </div>

                        <div className="cmsv1-research-cover-actions">
                          <label className="cmsv1-research-cover-upload-btn">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleSpeakingMediaImageChange(index, e)}
                              hidden
                            />
                            {item.imageUrl ? "Replace image" : "Upload image"}
                          </label>
                          <button
                            type="button"
                            className="cmsv1-research-cover-delete-btn"
                            disabled={!item.imageUrl}
                            onClick={() => handleSpeakingMediaImageDelete(index)}
                          >
                            Delete image
                          </button>
                        </div>
                      </div>
                    </div>

                    <CmsTextArea
                      label="Description"
                      value={item.description}
                      onChange={(v) => handleSpeakingMediaChange(index, "description", v)}
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

function CmsSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="cmsv1-field">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="cmsv1-select">
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
