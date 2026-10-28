export interface Enquiry {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  timeline: string;
  budget: string;
  method: string;
}

export const EMPTY_ENQUIRY: Enquiry = {
  name: "",
  email: "",
  company: "",
  service: "",
  description: "",
  timeline: "",
  budget: "",
  method: "Email",
};

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

/**
 * Sends an enquiry through EmailJS. Keys come from VITE_EMAILJS_* in .env.
 * The template receives the same field names the old site used, plus preferred_contact.
 */
export async function sendEnquiry(data: Enquiry): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Email sending is not configured.");
  }

  const emailjs = (await import("@emailjs/browser")).default;
  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name.trim(),
      from_email: data.email.trim(),
      company: data.company.trim() || "Not provided",
      service: data.service || "Not specified",
      description: data.description.trim(),
      timeline: data.timeline || "Not specified",
      budget: data.budget || "Not specified",
      preferred_contact: data.method || "Email",
    },
    { publicKey },
  );
}
