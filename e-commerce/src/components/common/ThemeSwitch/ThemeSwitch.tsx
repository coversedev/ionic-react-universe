import { useEffect, useRef } from "react";
import { ToggleChangeEventDetail } from "@ionic/core";
import { IonIcon, IonRow, IonToggle } from "@ionic/react";
import { moon, sunny } from "ionicons/icons";
import { useDarkMode, useIsMounted } from "usehooks-ts";
import { toggleTheme } from "@helpers";

const ThemeSwitch = (): JSX.Element => {
  const isMounted = useIsMounted();
  const { isDarkMode, toggle } = useDarkMode();

  const toggleRef = useRef<HTMLIonToggleElement | any>(null);

  /* Triggered for changes to the prefers-color-scheme media query */
  useEffect(() => {
    if (!isMounted()) return;
    /**
     * Called by the media query to check/uncheck the toggle
     *
     * @param {boolean} shouldCheck - update toggle check status
     */
    const checkToggle = (shouldCheck: boolean) => {
      if (shouldCheck !== null) {
        if (toggleRef.current) {
          toggleRef.current.checked = shouldCheck;
        }
      }
    };

    checkToggle(isDarkMode);

    return () => {
      toggleRef.current = null;
    };
  }, [isDarkMode, isMounted]);

  /**
   * "When the toggle changes, toggle the theme."
   *
   * The `handleToggleChange` function is passed to the `onIonChange` prop of the `IonToggle` component
   * @param ev - CustomEvent<ToggleChangeEventDetail>
   */
  const handleToggleChange = (ev: CustomEvent<ToggleChangeEventDetail>) => {
    toggleTheme(ev.detail.checked);
  };

  return (
    <IonRow style={{ alignItems: "center" }}>
      <IonIcon icon={isDarkMode ? moon : sunny} />
      <IonToggle
        color="secondary"
        ref={toggleRef}
        onIonChange={handleToggleChange}
        onClick={toggle}
      ></IonToggle>
    </IonRow>
  );
};

export default ThemeSwitch;
