import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

// Fonts are self-hosted by Next.js and exposed as CSS variables,
// which styles/theme/typography.css maps to --font-body and --font-heading.
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata = {
  title: {
    default: "MB Technologies — IT Training, Services & Careers in Pune",
    template: "%s | MB Technologies",
  },
  description:
    "Pune-based IT training and software services company. Job-focused courses in full-stack, data, cloud and testing, with 48 hiring partners.",
};

export const viewport = {
  themeColor: "#0b2545",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skipLink">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
