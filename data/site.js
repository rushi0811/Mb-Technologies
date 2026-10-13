// Site-wide content: navigation, contact details, partners, stats, module previews.

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Success", href: "/success" },
  { label: "Progress", href: "/progress" },
  { label: "Achievements", href: "/achievements" },
  { label: "Future", href: "/future" },
  { label: "Learn", href: "/learn" },
  { label: "Earn", href: "/earn" },
  { label: "Careers", href: "/careers" },
];

export const contact = {
  addressLines: ["Office 402, Kumar Business Centre", "Bund Garden Road, Pune 411001", "Maharashtra, India"],
  phone: "+91 20 4860 2215",
  phoneHref: "tel:+912048602215",
  email: "hello@mbtechnologies.in",
  hours: "Mon–Sat, 9:30 am – 6:30 pm IST",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
];

// Grey text placeholders shown in the hero trust strip
export const partners = ["Persistent", "Zensar", "KPIT", "Synechron", "Bajaj Finserv", "Druva"];

export const stats = [
  { value: "1,200+", label: "Students trained since 2019" },
  { value: "860", label: "Placements across 31 cities" },
  { value: "48", label: "Active hiring partners" },
  { value: "7", label: "Years in Pune" },
];

// Preview cards on the home page linking to each module
export const modulePreviews = [
  {
    title: "Success",
    href: "/success",
    text: "Case studies from students who switched careers and clients who shipped on time.",
  },
  {
    title: "Progress",
    href: "/progress",
    text: "How we grew from a 2-room lab in Shivajinagar to a 60-person team.",
  },
  {
    title: "Achievements",
    href: "/achievements",
    text: "Awards, ISO and AWS partner certifications, and press mentions.",
  },
  {
    title: "Future",
    href: "/future",
    text: "Our 2026–2030 roadmap: new campuses, a product studio and rural outreach.",
  },
  {
    title: "Learn",
    href: "/learn",
    text: "22 job-focused courses in full-stack, data, cloud and testing. Online or in Pune.",
  },
  {
    title: "Earn",
    href: "/earn",
    text: "Paid internships, freelance projects and a referral programme for alumni.",
  },
  {
    title: "Career Platform",
    href: "/careers",
    text: "Open roles at MB Technologies and our partner companies, updated weekly.",
  },
];
