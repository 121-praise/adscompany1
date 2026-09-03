import { useState, useEffect, useCallback } from 'react';

type Route = { page: string; param?: string };

function parseHash(): Route {
  const hash = window.location.hash.slice(1) || '/';
  const [page, param] = hash.split('/').filter(Boolean);
  return { page: page || 'home', param };
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return { route, navigate };
}
