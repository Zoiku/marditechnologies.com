import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { Closing } from "../components/layout";
import { IconBox } from "../components/icons";
import { COMMITMENTS, FAQS, PROCESS } from "../data/content";

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="t-label kicker kicker--page">About Mardi</p>
          <h1 className="t-page">We build technology and stand behind it.</h1>
          <p className="t-lead">
            We don't disappear after launch and we don't deliver half-finished projects. We build reliable systems and
            keep them that way.
          </p>
        </div>
      </section>

      <section className="section section--top-0" aria-labelledby="about-who">
        <div className="container split">
          <div className="split__side">
            <p className="t-label kicker">Who we are</p>
            <h2 id="about-who" className="t-section">
              A small team that delivers.
            </h2>
          </div>
          <div className="split__main prose">
            <p className="t-lead t-lead--ink">
              Mardi Technologies is a technology company based in Accra. We design, build and maintain software and
              systems for businesses that need technology they can count on, not just today but years from now.
            </p>
            <p className="muted">
              We started because we kept seeing the same problems: businesses paying for software that breaks, vendors
              that disappear after payment, and systems built without understanding how people actually use them. We
              decided to do things differently.
            </p>
            <p className="muted">
              Every project gets our full attention. We take on work we can deliver well, and we stay until it is done
              right.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--top-0" aria-labelledby="about-commit">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="t-label kicker">Our commitments</p>
              <h2 id="about-commit" className="t-section">
                Four promises on every project.
              </h2>
            </div>
          </div>
          <div className="tile-grid tile-grid--four">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="tile tile--short">
                <IconBox name={c.icon} />
                <h3 className="t-card">{c.title}</h3>
                <p>{c.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band on-ink" aria-labelledby="about-process">
        <div className="container">
          <p className="t-label kicker">How we work</p>
          <h2 id="about-process" className="t-section measure-short">
            Four steps, with you at every one.
          </h2>
          <div className="steps-line" aria-hidden="true">
            <svg>
              <line x1="12.5%" y1="6" x2="87.5%" y2="6" stroke="#2a2b36" strokeWidth="1.5" />
              <line className="flow" x1="12.5%" y1="6" x2="87.5%" y2="6" stroke="#ff3300" strokeWidth="1.75" />
            </svg>
            <div className="steps-line__dots">
              <span className="is-accent" />
              <span />
              <span />
              <span className="is-accent blink" />
            </div>
          </div>
          <ol className="steps">
            {PROCESS.map((p, i) => (
              <li key={p.title}>
                <span className="t-label">Step 0{i + 1}</span>
                <h3 className="t-card">{p.title}</h3>
                <p>{p.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="about-faq">
        <div className="container split">
          <div className="split__side faq-side">
            <p className="t-label kicker">Questions we hear</p>
            <h2 id="about-faq" className="t-section">
              What businesses ask us first.
            </h2>
            <p className="muted">
              Something else on your mind? <Link to="/contact">Ask us directly.</Link>
            </p>
          </div>
          <div className="split__main split__main--wide faq-list">
            <Faqs />
          </div>
        </div>
      </section>

      <Closing
        title="Let's talk about your project."
        line="No commitment needed. Tell us what you are working on and we will tell you honestly how we can help."
        action="Get in touch"
      />
    </>
  );
}

function Faqs() {
  const [open, setOpen] = useState(0);
  const base = useId();
  return (
    <>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div key={f.q} className="faq">
            <h3>
              <button
                type="button"
                id={btnId}
                className="faq__button t-card"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq__plus" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path d="M7 1v12M1 7h12" stroke="#0b0b15" strokeWidth="1.5" />
                  </svg>
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="faq__panel" hidden={!isOpen}>
              <p>{f.a}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
