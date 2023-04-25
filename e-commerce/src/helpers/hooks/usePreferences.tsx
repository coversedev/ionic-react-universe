import { useContext, useEffect, useMemo, useState } from "react";
import { useIsMounted } from "usehooks-ts";
import { StorageContext } from "@providers";

const initialValues = {
  selectedDir: "ltr",
  selectedLang: "en",
};

type UserPreferenceDTO = {
  selectedDir: string;
  selectedLang: string;
};

/**
 * This hook is used to manage all the preferences states in one place
 * and return it to be used across the app
 *
 * * This is done to improve performance and prevent unnecessary redundancy of code
 *
 * @returns {UserPreferenceDTO}
 */
const usePreferences = (): UserPreferenceDTO => {
  const isMounted = useIsMounted();
  const { storageManager } = useContext(StorageContext);

  const [selectedDir, setSelectedDir] = useState<string>(
    initialValues.selectedDir
  );
  const [selectedLang, setSelectedLang] = useState<string>(
    initialValues.selectedLang
  );

  useEffect(() => {
    if (!isMounted()) return;

    const getPreferencesValues = async () => {
      setSelectedDir(
        (await storageManager.getStorageItem("selectedDir")) ||
          initialValues.selectedDir
      );
      const lang = await storageManager.getStorageItem("i18nextLng");
      if (!lang) {
        await storageManager.updateStorageItem(
          "i18nextLng",
          localStorage.getItem("i18nextLng")
        );
      }
      setSelectedLang(
        (await storageManager.getStorageItem("i18nextLng")) ||
          initialValues.selectedLang
      );
    };

    getPreferencesValues();
  }, [isMounted, storageManager]);

  /** useMemo hook is used to improve performance and prevent unnecessary calls / updates */
  return useMemo(() => {
    return {
      selectedDir,
      selectedLang,
    };
  }, [selectedDir, selectedLang]);
};

export default usePreferences;
