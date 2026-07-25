export const GITHUB_PROFILE_URL = "https://github.com/mohamedezerbouzouraa";
export const LINKEDIN_PROFILE_URL = "https://linkedin.com/in/mohamed-ezer-bouzouraa-663489379";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    value: "mrezeryt178@gmail.com",
    href: "mailto:mrezeryt178@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-ezer-bouzouraa",
    href: LINKEDIN_PROFILE_URL,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/mohamedezerbouzouraa",
    href: GITHUB_PROFILE_URL,
    external: true,
  },
];
