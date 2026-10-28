import { Closing, StartButton } from "../components/layout";
import { Icon } from "../components/icons";
import { ServiceScene } from "../components/illustrations";
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="t-label kicker kicker--page">Services</p>
          <h1 className="t-page">Six services, delivered end to end.</h1>
          <p className="t-lead">
            The same team takes each one from the first conversation to support after launch, so nothing gets lost
            between handovers.
          </p>
          <nav className="chip-row" aria-label="Jump to a service">
            {SERVICES.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="chip chip--soft">
                <Icon name={s.icon} size={20} />
                {s.chip}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section--top-0" aria-label="Our services">
        <div className="container svc-grid">
          {SERVICES.map((s, i) => (
            <article key={s.id} id={s.id} className="svc-card">
              <div className="svc-card__art">
                <ServiceScene id={s.id} />
              </div>
              <p className="t-label">0{i + 1}</p>
              <h2 className="t-feature">{s.title}</h2>
              <p className="muted">{s.lead}</p>
              <ul className="checks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <StartButton className="text-link">Discuss {s.title.toLowerCase()}</StartButton>
            </article>
          ))}
        </div>
      </section>

      <section className="band on-ink" aria-labelledby="svc-erp">
        <div className="container band-split">
          <div>
            <p className="t-label kicker">Our product</p>
            <h2 id="svc-erp" className="t-section">
              Managed ERPNext
            </h2>
            <p className="t-lead">
              Sales, accounting, inventory, HR, CRM and projects on one platform. We host it, shape it around your
              workflows, migrate your data, train your team and keep it running.
            </p>
          </div>
          <StartButton className="btn btn--inverse">Ask about ERPNext</StartButton>
        </div>
      </section>

      <Closing
        flushTop={false}
        title="Not sure which service you need?"
        line="Tell us the problem. We will point you in the right direction."
        action="Talk to us"
      />
    </>
  );
}

