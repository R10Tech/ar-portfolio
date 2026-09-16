import { usePath } from './lib/router';
import Home from './pages/Home';
import Links from './pages/Links';

export default function App() {
  const path = usePath();

  if (path === '/links' || path === '/links/') {
    return <Links />;
  }

  return <Home />;
}
