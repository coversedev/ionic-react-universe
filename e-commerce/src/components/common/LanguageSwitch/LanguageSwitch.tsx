import React, { useContext, useEffect } from "react";
import { IonIcon, IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { useIsMounted, useWindowSize } from "usehooks-ts";
import { useTranslation } from "react-i18next";
import { chevronDownOutline } from "ionicons/icons";
import { usePreferences } from "@helpers";
import { StorageContext } from "@providers";

import "./LanguageSwitch.scss";

const languageMap: Record<
  string,
  { label: string; dir: "ltr" | "rtl"; active: boolean }
> = {
  en: { label: "English", dir: "ltr", active: true },
  ar: { label: "العربية", dir: "rtl", active: false },
  fr: { label: "Français", dir: "ltr", active: false },
};

const LanguageSwitch = () => {
  const windowSize = useWindowSize();
  const isMounted = useIsMounted();
  const { selectedLang } = usePreferences();
  const { t, i18n } = useTranslation();

  const { storageManager } = useContext(StorageContext);

  /** Triggered upon language change */
  useEffect(() => {
    if (!isMounted()) return;

    /**
     * It changes the document body direction and language attributes based on the selected language
     */
    const changeBodyDirLang = () => {
      if (document?.body) {
        /** change the document body direction */
        document.body.setAttribute("dir", languageMap[selectedLang].dir);
        /** change the document body language */
        document.body.setAttribute("lang", selectedLang);
      }
    };
    changeBodyDirLang();
  }, [selectedLang, isMounted]);

  /**
   * It updates the direction value in the local storage and then updates the language value using i18n
   *
   * @param {string} lang - The language code that is passed to the function.
   */
  const changeLanguageHandler = (lang: string) => {
    /** Update the direction value in the local storage */
    storageManager
      .updateStorageItem("selectedDir", languageMap[lang].dir)
      .then(() => {
        /** Update the language value using i18n */
        i18n.changeLanguage(lang).then(async () => {
          await storageManager.updateStorageItem("i18nextLng", lang);
        });

        window.location.reload();
      });
  };

  return (
    <IonItem
      lines="none"
      className="ion-no-padding ion-item-select-wrapper language-switch-wrapper"
    >
      <IonSelect
        interface={windowSize.width > 600 ? "popover" : "action-sheet"}
        placeholder={
          languageMap[selectedLang]
            ? languageMap[selectedLang].label
            : (t("common.selectLang") as string)
        }
        onIonChange={(e) => {
          e.stopPropagation();
          changeLanguageHandler(e.target.value);
        }}
      >
        {Object.keys(i18n.services.resourceStore.data)?.length > 0 ? (
          <React.Fragment>
            {Object.keys(i18n.services.resourceStore.data)
              ?.filter((lang) => lang !== i18n.language)
              ?.map((notActiveLang, index) => (
                <IonSelectOption key={index} value={notActiveLang}>
                  <p>{languageMap[notActiveLang].label}</p>
                </IonSelectOption>
              ))}
          </React.Fragment>
        ) : null}
      </IonSelect>

      <IonIcon slot="end" icon={chevronDownOutline} />
    </IonItem>
  );
};

export default LanguageSwitch;
