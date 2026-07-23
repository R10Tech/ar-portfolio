import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          Andrei Roman
        </a>

        <div className="header__actions">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
