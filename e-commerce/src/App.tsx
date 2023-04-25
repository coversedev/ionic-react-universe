import { Suspense, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { StatusBar, Style } from "@capacitor/status-bar";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { ErrorBoundary } from "react-error-boundary";
import { Home } from "@pages";
import { toggleTheme, usePreferences } from "@helpers";
import { LoaderFallback, ErrorFallback } from "@components";

setupIonicReact({});

const App: React.FC = () => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useDarkMode();
  const { selectedDir, selectedLang } = usePreferences();

  /** Triggered once the app is on the client side for the first time */
  useEffect(() => {
    if (!isMounted()) return;

    /** Add the default toggled theme */
    toggleTheme(isDarkMode);
  }, [isMounted, isDarkMode]);

  /** Triggered once media query tag changes for dynamic theming */
  useEffect(() => {
    if (!isMounted()) return;
    const matchMediaTag = window.matchMedia("(prefers-color-scheme: dark)");

    const matchMediaFunc = async (status: MediaQueryListEvent) => {
      try {
        await StatusBar.setStyle({
          style: status.matches ? Style.Dark : Style.Light,
        });
      } catch {
        console.log("Matched theme: " + status?.matches);
      }
    };

    matchMediaTag.addEventListener("change", matchMediaFunc);

    return () => {
      matchMediaTag.removeEventListener("change", matchMediaFunc);
    };
  }, [isMounted]);

  return (
    <IonApp>
      <IonReactRouter>
        <Suspense fallback={<LoaderFallback />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <IonRouterOutlet dir={selectedDir} lang={selectedLang}>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
          </ErrorBoundary>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
