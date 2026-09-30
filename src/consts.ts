import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Pedro Marin Sekine",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Pedro Marin Sekine — product, design, technology and communication. Based in Linz, Austria.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About Pedro Marin Sekine — background, work, and what drives me.",
};

export const WRITING: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "Articles and thinking on design, technology, and communication.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Academic and personal projects at the intersection of design, technology, and communication.",
};

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "What I'm currently focused on and building.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch with Pedro Marin Sekine.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/pedrosekine",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/pedrosekine",
  },
  {
    NAME: "hello@pedrosekine.com",
    HREF: "mailto:hello@pedrosekine.com",
  },
];
