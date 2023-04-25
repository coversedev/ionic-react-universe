import { createContext, ReactNode, useState } from "react";
import { IonicStorageManager } from "@helpers";

/* Create the context */
export const StorageContext = createContext({
  storageManager: null as unknown as IonicStorageManager,
});

type StorageContextProviderProps = {
  children: ReactNode | ReactNode[];
};

/**
 * Create the context provider, we are using use state to ensure that
 * We get reactive values from the context...
 *
 * * This Context Provider is added to create one instance of the ionic storage manager,
 * * so that the ionic storage is initialized and can be used across the app
 */
export const StorageContextProvider = ({
  children,
}: StorageContextProviderProps) => {
  /* The reactive values */
  const [storageManager] = useState<IonicStorageManager>(
    new IonicStorageManager()
  );

  /* The store object */
  const context = {
    storageManager: storageManager,
  };

  /* Wrap the application in the provider with the initialized context */
  return (
    <StorageContext.Provider value={context}>
      {children}
    </StorageContext.Provider>
  );
};
