import type { IconName } from "../components/icons";

export const CONTACT = {
  email: "info@marditechnologies.com",
  phoneDisplay: "+233 555 777 803",
  phoneHref: "tel:+233555777803",
  whatsapp: "https://wa.me/233555777803",
  hours: "Monday to Friday, 9 AM to 5 PM GMT.",
  city: "Accra, Ghana",
};

export type ServiceId = "cloud" | "network" | "cybersecurity" | "data" | "software" | "training";

export interface Service {
  id: ServiceId;
  icon: IconName;
  title: string;
  short: string;
  chip: string;
  lead: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    id: "cloud",
    icon: "cloud",
    title: "Cloud solutions",
    chip: "Cloud",
    short: "Migration, hosting and infrastructure that scales with your business.",
    lead: "Infrastructure that scales with you.",
    points: [
      "Cloud migration and architecture",
      "Managed hosting on AWS, GCP and Azure",
      "Performance monitoring and optimisation",
      "Disaster recovery and backup",
    ],
  },
  {
    id: "network",
    icon: "network",
    title: "Network",
    chip: "Network",
    short: "Reliable connectivity and infrastructure that keeps your business running.",
    lead: "Connected, secure and always on.",
    points: [
      "Network design and deployment",
      "SD-WAN and enterprise connectivity",
      "Monitoring and incident response",
      "Wireless and LAN infrastructure",
    ],
  },
  {
    id: "cybersecurity",
    icon: "security",
    title: "Cybersecurity",
    chip: "Cybersecurity",
    short: "Keep your systems and data safe with security built in from the start.",
    lead: "Keep your systems and data safe.",
    points: [
      "Security audits and penetration testing",
      "Compliance and risk assessment",
      "Identity and access management",
      "Incident response and recovery",
    ],
  },
  {
    id: "data",
    icon: "data",
    title: "Data analytics",
    chip: "Data",
    short: "See what your data is telling you with clear reports and dashboards.",
    lead: "Turn data into decisions.",
    points: [
      "BI dashboards and reporting",
      "Data pipeline engineering",
      "Predictive analytics and machine learning",
      "Data warehouse design",
    ],
  },
  {
    id: "software",
    icon: "software",
    title: "Custom software",
    chip: "Software",
    short: "Apps, websites and systems designed around how your business works.",
    lead: "Built for how you actually work.",
    points: [
      "Web and mobile applications",
      "API design and integration",
      "Legacy system modernisation",
      "Payment and mobile money integration",
    ],
  },
  {
    id: "training",
    icon: "training",
    title: "Training and support",
    chip: "Training",
    short: "Hands-on training, clear documentation and ongoing technical support.",
    lead: "Your team, fully equipped.",
    points: [
      "Technical training and workshops",
      "Documentation and knowledge transfer",
      "Ongoing maintenance and support",
      "Help desk and incident response",
    ],
  },
];

export const ERP_MODULES = [
  { title: "Sales and purchasing", line: "Quotations, orders, invoices and suppliers." },
  { title: "Accounting", line: "Ledgers, payments, taxes and reports." },
  { title: "Inventory", line: "Stock, warehouses, transfers and valuation." },
  { title: "HR", line: "Employee records, leave, attendance and payroll." },
  { title: "CRM", line: "Leads, opportunities and customer history." },
  { title: "Projects", line: "Tasks, timesheets and project costing." },
];

export const ERP_INCLUDED = "Hosting and setup · Custom workflows · Data migration · Training · Ongoing support";

export const COMMITMENTS: { icon: IconName; title: string; line: string }[] = [
  {
    icon: "support",
    title: "We don't disappear",
    line: "Support after launch is part of every project. A system is only as good as the team maintaining it.",
  },
  {
    icon: "talk",
    title: "We communicate clearly",
    line: "Weekly updates, honest timelines and plain language. You always know where things stand.",
  },
  {
    icon: "mobile",
    title: "We build for your users",
    line: "Mobile-first, fast and designed for real network conditions, not just office Wi-Fi.",
  },
  {
    icon: "target",
    title: "We own the outcome",
    line: "If something breaks, we fix it. If the scope changes, we talk about it first.",
  },
];

export const PROCESS = [
  { title: "We listen first", line: "Before any code, we learn your business, your customers and what you actually need." },
  { title: "We plan together", line: "A clear proposal with scope, timeline and cost, explained in plain language." },
  { title: "We show progress weekly", line: "You see working software regularly, so feedback comes early while changes are easy." },
  { title: "We stay after launch", line: "We monitor the system, fix issues and help you grow. When you need changes, we already know it." },
];

export const FAQS = [
  {
    q: "Will it be delivered on time?",
    a: "We set realistic timelines with clear milestones and update you every week. If anything changes, you hear about it straight away, not at the deadline.",
  },
  {
    q: "What happens after you deliver?",
    a: "We offer ongoing support and maintenance, and we write clean code and good documentation so you are never stuck depending on us.",
  },
  {
    q: "Will it work on mobile?",
    a: "Everything we build is mobile-first. If your customers use mid-range Android phones on patchy connections, that is what we design and test for.",
  },
  {
    q: "Can you integrate mobile money?",
    a: "Yes. We build mobile money and card payments into apps and websites through the payment platforms businesses in Ghana already use, and we test the whole flow before launch.",
  },
  {
    q: "Is my data safe?",
    a: "Security is part of how we build from the start, with sound practice for sign-in, encryption and access control on every project.",
  },
  {
    q: "How much will it cost?",
    a: "We offer fixed-price, time-based and monthly retainer pricing. We recommend what fits your project and never hide fees in the fine print.",
  },
];

/** Choices offered in both the Contact form and the modal. */
export const ENQUIRY_SERVICES: { label: string; icon: IconName }[] = [
  { label: "Managed ERPNext", icon: "erp" },
  { label: "Cloud solutions", icon: "cloud" },
  { label: "Network", icon: "network" },
  { label: "Cybersecurity", icon: "security" },
  { label: "Data analytics", icon: "data" },
  { label: "Custom software", icon: "software" },
  { label: "Training and support", icon: "training" },
  { label: "Not sure yet", icon: "unsure" },
];

export const TIMELINES = ["Not sure yet", "Under 1 month", "1 to 3 months", "3 to 6 months", "6 months or more"];
export const BUDGETS = ["Not sure yet", "Under $5,000", "$5,000 to $15,000", "$15,000 to $50,000", "$50,000 or more"];
export const METHODS = ["Email", "Call", "WhatsApp"];
