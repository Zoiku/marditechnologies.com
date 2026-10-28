import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { BUDGETS, CONTACT, METHODS, TIMELINES } from "../data/content";
import { useEnquiry } from "./enquiry-context";
import { Arrow, Logo } from "./icons";
import { ChoiceChips, ServicePicker } from "./service-picker";
import { EMPTY_ENQUIRY, isEmail, sendEnquiry, type Enquiry } from "./send-enquiry";

const STEPS = ["Service", "Project details", "Your details", "Review and send"];
const HINTS = [
  "Choose one to continue",
  "Add a short description to continue",
  "Add your name and a valid email to continue",
  "We reply within 24 hours",
];

export function ProjectModal() {
  const { isOpen, close } = useEnquiry();
  if (!isOpen) return null;
  return <ModalBody onClose={close} />;
}

function ModalBody({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Enquiry>(EMPTY_ENQUIRY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const set = <K extends keyof Enquiry>(key: K, value: Enquiry[K]) => setData((d) => ({ ...d, [key]: value }));

  // Lock scroll, remember focus, restore on close
  useEffect(() => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    document.body.classList.add("is-locked");
    return () => {
      document.body.classList.remove("is-locked");
      returnFocus.current?.focus?.();
    };
  }, []);

  // Move focus to the heading of each new step
  useEffect(() => {
    headingRef.current?.focus();
  }, [step, status]);

  const sent = status === "sent";
  const ok = [
    data.service !== "",
    data.description.trim().length > 0,
    data.name.trim().length > 0 && isEmail(data.email),
    status !== "sending",
  ][step];

  const next = async () => {
    if (!ok) return;
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    setStatus("sending");
    try {
      await sendEnquiry(data);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const at = sent ? 4 : step;
  const firstName = data.name.trim().split(/\s+/)[0] || "there";
  const method = { Email: "email", Call: "phone call", WhatsApp: "WhatsApp" }[data.method] ?? "email";

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sp-title"
        onKeyDown={onKeyDown}
      >
        <aside className="modal__rail" aria-hidden="true">
          <Logo className="modal__rail-logo" square="#ffffff" />
          <p className="modal__rail-title t-card">Start a project</p>
          <p className="modal__rail-intro t-small">Four short steps. A real person replies within 24 hours.</p>
          <div className="rail-steps">
            <svg width="12" height="210">
              <line x1="6" y1="12" x2="6" y2="204" stroke="#2a2b36" strokeWidth="1.5" />
              <line
                className="flow"
                x1="6"
                y1="12"
                x2="6"
                y2={12 + Math.min(at, 3) * 64}
                stroke="#ff3300"
                strokeWidth="1.75"
              />
            </svg>
            <ol>
              {STEPS.map((label, i) => (
                <li key={label}>
                  <span className={`rail-square${i < at ? " is-done" : ""}${i === at ? " is-current" : ""}`} />
                  <span>
                    <span className="t-label">0{i + 1}</span>
                    <span className={`rail-step-label${i <= at ? " is-reached" : ""}`}>{label}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="modal__rail-foot t-small">
            <p>Rather talk it through?</p>
            <p>{CONTACT.phoneDisplay}</p>
          </div>
        </aside>

        <div className="modal__main">
          <div className="modal__progress">
            <span style={{ width: `${sent ? 100 : (step + 1) * 25}%` }} />
          </div>
          <div className="modal__grab" aria-hidden="true">
            <span />
          </div>
          <div className="modal__top">
            <span className="t-label">{sent ? "Sent" : `Step ${step + 1} of 4`}</span>
            <button type="button" className="icon-button" onClick={onClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="#0b0b15" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
          <div className="modal__segments" aria-hidden="true">
            {STEPS.map((s, i) => (
              <span key={s} className={i < at ? "is-done" : i === at ? "is-current" : ""} />
            ))}
          </div>

          <div className="modal__body">
            {!sent && step === 0 && (
              <div className="enter" key="s0">
                <h2 id="sp-title" ref={headingRef} tabIndex={-1} className="t-feature">
                  What do you need help with?
                </h2>
                <p>Pick the closest fit. You can explain the details next.</p>
                <ServicePicker
                  value={data.service}
                  onChange={(v) => set("service", v)}
                  onWhite
                  legend="Service"
                  legendClassName="visually-hidden"
                />
              </div>
            )}

            {!sent && step === 1 && (
              <div className="enter" key="s1">
                <h2 id="sp-title" ref={headingRef} tabIndex={-1} className="t-feature">
                  Tell us about the work.
                </h2>
                <p>A few sentences is plenty. What do you want to build or fix?</p>
                <div className="field modal__group">
                  <label htmlFor="sp-desc">Project description</label>
                  <textarea
                    id="sp-desc"
                    className="input"
                    rows={4}
                    value={data.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="For example: we need ERPNext for our two shops, with stock and mobile money payments."
                  />
                </div>
                <div className="modal__group">
                  <span className="field-label">
                    Timeline <span className="optional muted">(optional)</span>
                  </span>
                  <ChoiceChips label="Timeline" options={TIMELINES} value={data.timeline} onChange={(v) => set("timeline", v)} />
                </div>
                <div className="modal__group">
                  <span className="field-label">
                    Budget <span className="optional muted">(optional)</span>
                  </span>
                  <ChoiceChips label="Budget" options={BUDGETS} value={data.budget} onChange={(v) => set("budget", v)} />
                </div>
              </div>
            )}

            {!sent && step === 2 && (
              <div className="enter" key="s2">
                <h2 id="sp-title" ref={headingRef} tabIndex={-1} className="t-feature">
                  How do we reach you?
                </h2>
                <p>We only use these details to reply to you.</p>
                <div className="field-grid modal__group">
                  <div className="field">
                    <label htmlFor="sp-name">Full name</label>
                    <input id="sp-name" className="input" autoComplete="name" value={data.name} onChange={(e) => set("name", e.target.value)} />
                  </div>
                  <div className="field">
                    <label htmlFor="sp-email">Email address</label>
                    <input
                      id="sp-email"
                      className="input"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </div>
                  <div className="field field--full">
                    <label htmlFor="sp-company">
                      Company <span className="optional">(optional)</span>
                    </label>
                    <input
                      id="sp-company"
                      className="input"
                      autoComplete="organization"
                      value={data.company}
                      onChange={(e) => set("company", e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal__group">
                  <span className="field-label">Best way to reach you</span>
                  <ChoiceChips
                    label="Best way to reach you"
                    options={METHODS}
                    value={data.method}
                    onChange={(v) => set("method", v || "Email")}
                  />
                </div>
              </div>
            )}

            {!sent && step === 3 && (
              <div className="enter" key="s3">
                <h2 id="sp-title" ref={headingRef} tabIndex={-1} className="t-feature">
                  Check and send.
                </h2>
                <p>Make sure everything looks right.</p>
                <div className="review">
                  <ReviewItem label="Service" onChange={() => setStep(0)}>
                    <p className="review__value review__value--strong">
                      {data.service}
                    </p>
                  </ReviewItem>
                  <ReviewItem label="Project" onChange={() => setStep(1)}>
                    <p className="review__value">{data.description}</p>
                    <p className="review__meta t-small">
                      {data.timeline || "Timeline not given"} · {data.budget || "Budget not given"}
                    </p>
                  </ReviewItem>
                  <ReviewItem label="You" onChange={() => setStep(2)}>
                    <p className="review__value review__value--strong">
                      {data.name}
                    </p>
                    <p className="review__meta t-small">
                      {data.email}
                      {data.company ? ` · ${data.company}` : ""} · Prefers {method}
                    </p>
                  </ReviewItem>
                </div>
                {status === "error" && (
                  <p className="form-status form-status--error t-small" role="alert">
                    We could not send your message. Please try again, or email us at{" "}
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
                  </p>
                )}
              </div>
            )}

            {sent && (
              <div className="sent enter" key="sent">
                <span className="sent__mark pop">
                  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                    <path className="draw" d="M7 16.5l6 6L25 10" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="square" />
                  </svg>
                </span>
                <h2 id="sp-title" ref={headingRef} tabIndex={-1} className="t-feature">
                  We got your message.
                </h2>
                <p role="status">
                  Thanks, {firstName}. We will reply within 24 hours by {method}.
                </p>
                <button type="button" className="btn btn--primary" onClick={onClose}>
                  Back to the site <Arrow />
                </button>
              </div>
            )}
          </div>

          {!sent && (
            <div className="modal__foot">
              {step > 0 && (
                <button type="button" className="btn btn--ghost" onClick={() => setStep(step - 1)}>
                  <span className="arrow-back" aria-hidden="true">
                    ←
                  </span>{" "}
                  Back
                </button>
              )}
              <span className="modal__hint t-small" aria-live="polite">
                {HINTS[step]}
              </span>
              <button type="button" className="btn btn--primary" aria-disabled={!ok} onClick={next}>
                {step === 3 ? (status === "sending" ? "Sending…" : "Send message") : "Continue"} <Arrow />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ label, onChange, children }: { label: string; onChange: () => void; children: ReactNode }) {
  return (
    <div className="review__item">
      <div>
        <p className="t-label">{label}</p>
        {children}
      </div>
      <button type="button" className="btn btn--ghost review__change" onClick={onChange}>
        Change<span className="visually-hidden"> {label.toLowerCase()}</span>
      </button>
    </div>
  );
}
