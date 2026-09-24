import { usePath } from './lib/router';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import Links from './pages/Links';
import SiteVideo from './components/SiteVideo';

export default function App() {
  const path = usePath();

  let page = <Home />;
  if (path === '/about' || path === '/about/') page = <AboutPage />;
  else if (path === '/projects' || path === '/projects/') page = <ProjectsPage />;
  else if (path === '/links' || path === '/links/') page = <Links />;

  return (
    <>
      <SiteVideo />
      {page}
    </>
  );
}
