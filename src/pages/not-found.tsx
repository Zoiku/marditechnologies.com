import { Link } from "react-router-dom";
import { Arrow } from "../components/icons";

export default function NotFound() {
  return (
    <section className="page-head not-found">
      <div className="container">
        <p className="t-label kicker kicker--page">Error 404</p>
        <h1 className="t-page">This page does not exist.</h1>
        <p className="t-lead">It may have moved, or the link may be wrong. Everything we do is one click away.</p>
        <div className="btn-row">
          <Link to="/" className="btn btn--primary">
            Go to the home page <Arrow />
          </Link>
          <Link to="/contact" className="btn btn--secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
