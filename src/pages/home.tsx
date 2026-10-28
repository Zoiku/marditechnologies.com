import { Link } from "react-router-dom";
import { Closing, StartButton } from "../components/layout";
import { Arrow, IconBox } from "../components/icons";
import { ErpWindow, ErpWindowCompact, HeroDiagram, HeroDiagramCompact } from "../components/illustrations";
import { CONTACT, ERP_INCLUDED, ERP_MODULES, SERVICES } from "../data/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <p className="t-label kicker kicker--live kicker--page">
              <span className="live" aria-hidden="true" />
              {CONTACT.city} · Replies within 24 hours
            </p>
            <h1 className="t-page">Technology that works for you.</h1>
            <p className="t-lead">
              We build software, set up networks and solve technical problems for businesses and institutions that need
              technology they can rely on.
            </p>
            <div className="btn-row">
              <StartButton />
              <Link to="/services" className="btn btn--secondary">
                See our services
              </Link>
            </div>
          </div>
          <figure className="hero__figure">
            <div className="dot-panel">
              <HeroDiagram />
              <HeroDiagramCompact />
            </div>
            <figcaption className="figure-caption t-small">One team across your software, systems and support.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--top-0" aria-labelledby="home-services">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="t-label kicker">Services</p>
              <h2 id="home-services" className="t-section">
                Six services. One accountable team.
              </h2>
            </div>
            <Link to="/services" className="text-link">
              All services <Arrow />
            </Link>
          </div>
          <div className="tile-grid">
            {SERVICES.map((s) => (
              <Link key={s.id} to={`/services#${s.id}`} className="tile">
                <IconBox name={s.icon} />
                <h3 className="t-card">{s.title}</h3>
                <p>{s.short}</p>
                <span className="tile__action">
                  Details <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band on-ink" aria-labelledby="home-erp">
        <div className="container">
          <div className="erp">
            <div className="erp__text">
              <p className="t-label kicker">Our product</p>
              <h2 id="home-erp" className="t-section">
                Managed ERPNext
              </h2>
              <p className="t-lead">
                Run your whole business from one platform. We set up ERPNext, shape it around how you work, move your data
                across and keep it running, so you can focus on the business.
              </p>
              <p className="erp__included t-small">{ERP_INCLUDED}</p>
              <StartButton className="btn btn--inverse">Ask about ERPNext</StartButton>
            </div>
            <figure className="erp__figure">
              <ErpWindow />
              <ErpWindowCompact />
            </figure>
          </div>
          <div className="ink-grid">
            {ERP_MODULES.map((m) => (
              <div key={m.title} className="ink-tile">
                <h3 className="t-card">{m.title}</h3>
                <p className="t-small">{m.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="statement">
            You talk to the people building your system.{" "}
            <span>
              We test on the phones and networks your customers actually use, show you progress every week and stay on
              after launch.
            </span>
          </p>
          <Link to="/about" className="text-link">
            How we work <Arrow />
          </Link>
        </div>
      </section>

      <Closing title="Tell us what you need." line="We reply within 24 hours with a clear, honest next step." />
    </>
  );
}
