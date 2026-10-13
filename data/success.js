import { portraits } from "./images";

// Highlighted numbers at the top of the Success page
export const successHighlights = [
  { value: "72%", label: "of 2025 graduates placed within 90 days" },
  { value: "₹4.6 LPA", label: "median starting package (2025 batch)" },
  { value: "34", label: "client projects delivered on schedule" },
];

// Case-study cards with a before/after outcome
export const caseStudies = [
  {
    id: 1,
    type: "Student",
    title: "From billing clerk to software engineer",
    name: "Rohan Kulkarni",
    photo: portraits.p1,
    before: "BCom graduate earning ₹14,000/month at a retail billing counter.",
    after: "Associate Software Engineer at Synechron, ₹4.2 LPA.",
    detail: "Full-Stack Java batch, 6 months, weekday evenings.",
  },
  {
    id: 2,
    type: "Client",
    title: "Dealer portal rebuilt in 11 weeks",
    name: "Joshi Agro Equipments, Baramati",
    photo: portraits.p3,
    before: "Orders from 140 dealers taken over phone and Excel; 2-day delay on dispatch.",
    after: "Web portal with live stock; dispatch now same day, order errors down 63%.",
    detail: "Next.js + Node + PostgreSQL, hosted on AWS Mumbai region.",
  },
  {
    id: 3,
    type: "Student",
    title: "Career restart after a 3-year break",
    name: "Anjali Pawar",
    photo: portraits.p6,
    before: "Primary school teacher, last coded in college in 2019.",
    after: "Frontend Developer at KPIT, working on internal dashboards.",
    detail: "React weekend batch + 2-month paid internship with us.",
  },
  {
    id: 4,
    type: "Client",
    title: "Clinic booking app for a Kothrud hospital",
    name: "Sahyadri Care Clinic",
    photo: portraits.p5,
    before: "Patients queued from 7 am for token slips; no record of no-shows.",
    after: "1,900 bookings a month through the app; average wait under 25 minutes.",
    detail: "React Native app with SMS reminders, built in 14 weeks.",
  },
  {
    id: 5,
    type: "Student",
    title: "Mechanical engineer to data analyst",
    name: "Sakshi Patil",
    photo: portraits.p4,
    before: "Diploma + BE Mechanical, 8 months of unsuccessful core-job search.",
    after: "Data Analyst at Bajaj Finserv, building weekly Power BI reports.",
    detail: "Data Analytics with Python & SQL, 4 months.",
  },
  {
    id: 6,
    type: "Client",
    title: "Test automation for a fintech startup",
    name: "PaySetu Labs",
    photo: portraits.p2,
    before: "Every release needed 3 days of manual regression testing.",
    after: "Selenium + CI suite runs in 40 minutes; releases moved from monthly to weekly.",
    detail: "Two of our testing alumni now work on their QA team.",
  },
];
