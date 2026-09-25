import { usePath } from './lib/router';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import Links from './pages/Links';

export default function App() {
  const path = usePath();

  if (path === '/about' || path === '/about/') return <AboutPage />;
  if (path === '/projects' || path === '/projects/') return <ProjectsPage />;
  if (path === '/links' || path === '/links/') return <Links />;
  return <Home />;
}
