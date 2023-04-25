import { IonSpinner } from "@ionic/react";
import { useEffect, useState } from "react";
import { useIsMounted } from "usehooks-ts";

import "./LoaderFallback.scss";

type LoaderFallbackProps = {
  delay?: number;
};

const LoaderFallback = ({ delay = 300 }: LoaderFallbackProps) => {
  const isMounted = useIsMounted();
  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    if (!isMounted()) return;

    let timeout: any = null;

    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isMounted, delay, ready]);

  if (!ready) {
    return null;
  }

  return (
    <div className="loader-fallback-wrapper">
      <IonSpinner name="bubbles" />
    </div>
  );
};

export default LoaderFallback;
