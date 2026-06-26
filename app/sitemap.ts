import type { MetadataRoute } from "next";

const BASE = "https://thebrotherhoodacademy.org";

const pages = [
  { path: "",                        priority: 1.0, freq: "monthly"  },
  { path: "/our-mission",            priority: 0.9, freq: "yearly"   },
  { path: "/what-we-do",             priority: 0.9, freq: "monthly"  },
  { path: "/our-team",               priority: 0.8, freq: "yearly"   },
  { path: "/our-home",               priority: 0.7, freq: "yearly"   },
  { path: "/impact-2025",            priority: 0.8, freq: "yearly"   },
  { path: "/our-process",            priority: 0.8, freq: "yearly"   },
  { path: "/children-we-serve",      priority: 0.8, freq: "yearly"   },
  { path: "/residential-living",     priority: 0.7, freq: "yearly"   },
  { path: "/tbri-sama",              priority: 0.7, freq: "yearly"   },
  { path: "/thrive-asd",             priority: 0.7, freq: "yearly"   },
  { path: "/idd-support",            priority: 0.7, freq: "yearly"   },
  { path: "/emotional-behavioral",   priority: 0.7, freq: "yearly"   },
  { path: "/ways-to-give",           priority: 0.9, freq: "monthly"  },
  { path: "/refer-a-child",          priority: 0.9, freq: "monthly"  },
  { path: "/contact",                priority: 0.8, freq: "yearly"   },
  { path: "/careers",                priority: 0.7, freq: "monthly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, freq }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority,
  }));
}
