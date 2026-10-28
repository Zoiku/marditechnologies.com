import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CONTACT } from "../data/content";
import { useEnquiry } from "./enquiry-context";
import { Arrow, Logo } from "./icons";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

/** Opens the enquiry modal everywhere except Contact, where it jumps to the form on the page. */
export function StartButton({
  className = "btn btn--primary",
  children = "Start a project",
  onClick,
}: {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) {
  const { open } = useEnquiry();
  const { pathname } = useLocation();
  if (pathname === "/contact") {
    return (
      <a href="#start" className={className} onClick={onClick}>
        {children} <Arrow />
      </a>
    );
  }
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children} <Arrow />
    </button>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="Mardi Technologies, home">
          <Logo />
        </Link>
        <nav className="site-nav" aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <StartButton className="btn btn--primary btn--sm site-header__cta" />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "Close" : "Menu"}
          <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
            {menuOpen ? (
              <path d="M2 0l10 10M12 0L2 10" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M0 1h14M0 9h14" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>
    </header>
      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <StartButton onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__contact t-small">
          <p>{CONTACT.email}</p>
          <p>{CONTACT.phoneDisplay}</p>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo className="footer-logo" />
            <p className="t-small">Software, networks and technical support for businesses and institutions in Ghana.</p>
          </div>
          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className="t-label">
              Pages
            </h2>
            <ul className="t-small">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="t-label">Contact</h2>
            <ul className="t-small">
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom t-small">
          <span>© {new Date().getFullYear()} Mardi Technologies</span>
          <span>{CONTACT.city}</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

export function Closing({
  title,
  line,
  action = "Start a project",
  flushTop = true,
}: {
  title: string;
  line: string;
  action?: string;
  flushTop?: boolean;
}) {
  return (
    <section className={`section${flushTop ? " section--top-0" : ""}`} aria-label={title}>
      <div className="container">
        <div className="closing">
          <Logo className="closing__mark" primary="#0b0b15" />
          <div className="closing__text">
            <h2 className="t-section">{title}</h2>
            <p>{line}</p>
          </div>
          <div className="btn-row">
            <StartButton>{action}</StartButton>
            <a className="btn btn--secondary" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
