import { useState, type FormEvent } from "react";
import { Arrow, IconBox } from "../components/icons";
import { ServicePicker } from "../components/service-picker";
import { EMPTY_ENQUIRY, isEmail, sendEnquiry, type Enquiry } from "../components/send-enquiry";
import { BUDGETS, CONTACT, TIMELINES } from "../data/content";

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="t-label kicker kicker--live kicker--page">
            <span className="live" aria-hidden="true" />
            Based in {CONTACT.city}
          </p>
          <h1 className="t-page">How can we help?</h1>
          <p className="t-lead">
            Ask a question, start a project or talk through an idea. You will hear back from a real person, usually the
            same day.
          </p>
        </div>
      </section>

      <section className="section section--top-0" aria-label="Ways to reach us">
        <div className="container contact-layout">
          <div className="contact-methods">
            <div className="method">
              <IconBox name="mail" />
              <p className="t-label">Email</p>
              <h2 className="t-card">{CONTACT.email}</h2>
              <p className="t-small muted">We reply within one business day.</p>
              <div className="method__actions">
                <a className="text-link" href={`mailto:${CONTACT.email}`}>
                  Send an email <Arrow />
                </a>
              </div>
            </div>
            <div className="method">
              <IconBox name="chat" />
              <p className="t-label">Call or WhatsApp</p>
              <h2 className="t-card">{CONTACT.phoneDisplay}</h2>
              <p className="t-small muted">{CONTACT.hours}</p>
              <div className="method__actions">
                <a className="text-link" href={CONTACT.phoneHref}>
                  Call <Arrow />
                </a>
                <a className="text-link" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp <Arrow />
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

function EnquiryForm() {
  const [data, setData] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "invalid">("idle");
  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => setData((d) => ({ ...d, [key]: value }));

  const missing = [
    !data.service && "what you need",
    !data.name.trim() && "your name",
    !isEmail(data.email) && "a valid email",
    !data.description.trim() && "a short description",
  ].filter(Boolean) as string[];

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (missing.length) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      await sendEnquiry(data);
      setStatus("sent");
      setData(EMPTY_ENQUIRY);
    } catch {
      setStatus("error");
    }
  };

  const message =
    status === "sent"
      ? "Thanks. We got your message and will reply within 24 hours."
      : status === "error"
        ? `We could not send your message. Please try again, or email ${CONTACT.email}.`
        : status === "invalid"
          ? `Please add ${missing.length > 1 ? `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}` : missing[0]}.`
          : "Your details are only used to reply to you.";

  return (
    <form id="start" className="enquiry" aria-labelledby="form-title" onSubmit={submit} noValidate>
      <p className="t-label kicker">Start a project</p>
      <h2 id="form-title" className="t-feature">
        Tell us about the work.
      </h2>
      <p>We reply within 24 hours with a clear next step.</p>

      <ServicePicker value={data.service} onChange={(v) => set("service", v)} legend="What do you need?" />

      <div className="field-grid">
        <div className="field">
          <label htmlFor="f-name">Full name</label>
          <input id="f-name" className="input" autoComplete="name" required value={data.name} onChange={(e) => set("name", e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email address</label>
          <input
            id="f-email"
            className="input"
            type="email"
            autoComplete="email"
            required
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>
        <div className="field field--full">
          <label htmlFor="f-company">
            Company <span className="optional">(optional)</span>
          </label>
          <input
            id="f-company"
            className="input"
            autoComplete="organization"
            value={data.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </div>
        <div className="field field--full">
          <label htmlFor="f-desc">What are you looking to build or solve?</label>
          <textarea
            id="f-desc"
            className="input"
            rows={5}
            required
            value={data.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="f-timeline">
            Timeline <span className="optional">(optional)</span>
          </label>
          <select id="f-timeline" className="input" value={data.timeline} onChange={(e) => set("timeline", e.target.value)}>
            <option value="">Choose one</option>
            {TIMELINES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-budget">
            Budget <span className="optional">(optional)</span>
          </label>
          <select id="f-budget" className="input" value={data.budget} onChange={(e) => set("budget", e.target.value)}>
            <option value="">Choose one</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="enquiry__foot">
        <button type="submit" className="btn btn--primary" aria-disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <Arrow />
        </button>
        <p
          role="status"
          className={`form-status t-small${status === "error" || status === "invalid" ? " form-status--error" : ""}`}
        >
          {message}
        </p>
      </div>
    </form>
  );
}
