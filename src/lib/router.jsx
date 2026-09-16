import { useSyncExternalStore } from 'react';

function subscribe(onStoreChange) {
  window.addEventListener('popstate', onStoreChange);
  return () => window.removeEventListener('popstate', onStoreChange);
}

function getPath() {
  return window.location.pathname;
}

function getServerPath() {
  return '/';
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, getServerPath);
}

export function navigate(to) {
  if (window.location.pathname === to) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', to);
  window.scrollTo(0, 0);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function NavLink({ to, children, className, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
