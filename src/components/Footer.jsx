import { NavLink } from '../lib/router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© 2026 Andrei Roman</span>
        <NavLink to="/links" className="footer__links">
          Links
        </NavLink>
        <span>Austin, TX</span>
      </div>
    </footer>
  );
}
