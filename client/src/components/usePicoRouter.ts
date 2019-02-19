import { useState, useEffect } from 'react';

export type PicoRouterHook = [string, (route: string) => void];

export interface Routes {
  [route: string]: JSX.Element;
}

export interface RouterConfig {
  default: string;
}

const usePicoRouter = (config: RouterConfig): PicoRouterHook => {
  const [route, setRoute] = useState<string>(config.default);

  const handleBack = (event: PopStateEvent) => {
    if (event.state) setRoute(event.state.route);
  };

  useEffect(() => {
    window.addEventListener('popstate', handleBack);
    return function cleanup() {
      window.removeEventListener('popstate', handleBack);
    };
  });

  const withHistory = (fn: Function) => (route: string) => {
    history.pushState({ route }, `${route} page`, `#/${route}`);
    fn(route);
  };

  return [route, withHistory(setRoute)];
};

export default usePicoRouter;
