import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { EnquiryProvider } from "./components/enquiry-context";
import { Layout } from "./components/layout";
import { ProjectModal } from "./components/project-modal";
import { metaFor, SITE_URL } from "./data/meta";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Services from "./pages/services";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/motion.css";
import "./styles/components.css";
import "./styles/pages.css";

/** Keeps the title, description and canonical in step with client-side navigation. */
function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const meta = metaFor(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `${SITE_URL}${meta.path === "/404" ? "/" : meta.path}`);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <EnquiryProvider>
      <RouteEffects />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Navigate to="/contact" replace />} />
          <Route path="/blog/*" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ProjectModal />
    </EnquiryProvider>
  );
}
