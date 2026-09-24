import { useEffect, useState } from 'react';
import { NavLink, usePath } from '../lib/router';

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/links', label: 'Links' },
];

function isActive(path, to) {
  if (to === '/') return path === '/';
  return path === to || path.startsWith(`${to}/`);
}

export default function Header() {
  const path = usePath();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className={`header${open ? ' header--open' : ''}`}>
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          andrei.
        </NavLink>

        <nav className="header__tabs" aria-label="Page">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={isActive(path, tab.to) ? 'is-active' : undefined}
              aria-current={isActive(path, tab.to) ? 'page' : undefined}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="header__overlay" hidden={!open}>
        <nav className="header__overlay-nav" aria-label="Mobile">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={isActive(path, tab.to) ? 'is-active' : undefined}
              aria-current={isActive(path, tab.to) ? 'page' : undefined}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
