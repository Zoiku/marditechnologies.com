export const SITE_URL = "https://marditechnologies.com";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
}

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Mardi Technologies | Software, networks and support in Accra",
    description:
      "Mardi Technologies builds software, sets up networks and runs managed ERPNext for businesses and institutions in Ghana. Based in Accra. Replies within 24 hours.",
  },
  {
    path: "/services",
    title: "Services | Mardi Technologies",
    description:
      "Cloud solutions, networks, cybersecurity, data analytics, custom software, and training and support, delivered end to end by one team in Accra.",
  },
  {
    path: "/about",
    title: "About | Mardi Technologies",
    description:
      "A small Accra team that builds reliable technology, communicates clearly and stays on after launch. See how we work and what clients ask us first.",
  },
  {
    path: "/contact",
    title: "Contact | Mardi Technologies",
    description:
      "Email, call or WhatsApp Mardi Technologies, or tell us about your project. A real person replies within 24 hours.",
  },
];

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Page not found | Mardi Technologies",
  description: "This page does not exist. Head back to the Mardi Technologies home page.",
};

export function metaFor(path: string): PageMeta {
  return PAGES.find((p) => p.path === path) ?? NOT_FOUND_META;
}
