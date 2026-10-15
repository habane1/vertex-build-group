export const COMPANY = {
  name: "Vertex Build Group",
  tagline: "Building Tomorrow's Landmarks Today",
  phone: "613-555-0174",
  fax: "613-555-0175",
  email: "hello@vertexbuild.ca",
  address: {
    street: "275 Slater Street",
    city: "Ottawa",
    state: "ON",
    zip: "K1P 5H9",
  },
} as const;

export const NAV_LINKS = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
] as const;
