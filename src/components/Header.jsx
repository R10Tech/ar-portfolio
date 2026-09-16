import { useTheme } from '../hooks/useTheme';
import { NavLink, usePath } from '../lib/router';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const path = usePath();
  const onLinks = path.startsWith('/links');

  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Andrei Roman
        </NavLink>

        <div className="header__actions">
          <NavLink
            to="/links"
            className={`header__links-btn${onLinks ? ' header__links-btn--active' : ''}`}
            aria-current={onLinks ? 'page' : undefined}
          >
            Links
          </NavLink>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
