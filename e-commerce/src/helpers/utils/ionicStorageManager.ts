import { Storage, Drivers } from "@ionic/storage";

export default class IonicStorageManager {
  private storageInstance: Storage | null = null;

  constructor() {
    console.info("🚀 initialize Ionic Storage in progress...");
    /**
     * Checking if the storageInstance is null, if it is null,
     * it will create a new instance of the storage class
     * and create a new database with the name __AirCargoDB.
     */
    if (!this.storageInstance) {
      console.info("✔ IonicStorage initialization start");
      this.storageInstance = this.generateIonicStorage("__AirCargoDB");

      if (this.storageInstance instanceof Storage) {
        this.storageInstance?.create();
      }

      console.info("✔ IonicStorage initialization is over");
    }
  }

  /**
   * This function returns the value of the storage item with the given key
   *
   * @param {string} key - The key of the item you want to get from storage.
   *
   * @returns The value of the key in the storage.
   */
  public async getStorageItem(key: string): Promise<any> {
    return await this.getStorageKeyValue(key);
  }

  /**
   * Get Storage item Wrapper function with an additional wait (wrap it inside another promise)
   *
   * @param key - the key of the storage being retrieved
   * @returns - return of type any since its a promise
   */
  public getStorageItemWait(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getStorageKeyValue(key).then((data: any) => {
        resolve(data);
        return;
      });
    });
  }

  /**
   * Update Storage item Wrapper function
   *
   * @param key - the key of the storage being updated
   * @param value - the updated value to be set
   * @returns - return of type any since its a promise
   */
  public async updateStorageItem(key: string, value: any): Promise<boolean> {
    return await this.updateStorageKeyValue(key, value);
  }

  /**
   * Update Storage item Wrapper function with an additional wait (wrap it inside another promise)
   *
   * @param key - the key of the storage being updated
   * @param value - the updated value to be set
   * @returns - return of type any since its a promise
   */
  public updateStorageItemWait(key: string, value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.updateStorageKeyValue(key, value).then((data: any) => {
        resolve(data);
        return;
      });
    });
  }

  /**
   * Delete Storage item Wrapper function
   *
   * @param key - the key of the storage being deleted
   * @returns - return of type any since its a promise
   */
  public async deleteStorageItem(key: string): Promise<boolean> {
    return await this.deleteStorageKeyValue(key);
  }

  /**
   * It clears the storage
   */
  public async clearStorage(): Promise<void> {
    await this.storageInstance?.clear();
  }

  /**
   * Get Storage item main function
   *
   * @param key - the key of the storage being retrieved
   * @returns - return of type any since its a promise
   */
  private async getStorageKeyValue(key: string): Promise<any> {
    if (await this.getStorageCondition()) {
      return await this.storageInstance?.get(key);
    }
  }

  /**
   * Update Storage item main function
   *
   * @param key - the key of the storage being updated
   * @param value - the updated value to be set
   * @returns - return of type any since its a promise
   */
  private async updateStorageKeyValue(
    key: string,
    value: any
  ): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (await this.getStorageCondition()) {
        const getVal = await this.storageInstance?.get(key);
        if (getVal === null || getVal === undefined) {
          const updated = await this.storageInstance?.set(key, value);

          updated ? resolve(true) : resolve(false);
        } else {
          /* if the item is found do: */
          /* remove the currently saved value */
          await this.storageInstance?.remove(key);
          const updated = await this.storageInstance?.set(key, value);

          updated ? resolve(true) : resolve(false);
        }
      }

      reject(undefined);
    });
  }

  /**
   * Delete Storage item main function
   *
   * @param key - the key of the storage being deleted
   * @returns - return of type any since its a promise
   */
  private async deleteStorageKeyValue(key: string): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (await this.getStorageCondition()) {
        const getVal = await this.storageInstance?.get(key);
        if (getVal === null || getVal === undefined) {
          resolve(true);
        } else {
          const removeVal = await this.storageInstance?.remove(key);

          removeVal ? resolve(true) : resolve(false);
        }
      }

      reject(undefined);
    });
  }

  /**
   * It returns a boolean value that is true if the storage instance is
   * not null and the length of the storage instance is not null
   *
   * @returns A boolean value.
   */
  private async getStorageCondition(): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      if (
        this.storageInstance &&
        (await this.storageInstance?.length()) !== null
      ) {
        resolve(true);
      }
      reject(undefined);
    });
  }

  /**
   * "This function returns a new instance of the Ionic Storage class, which is a wrapper for the
   * browser's local storage, with the name of the database being passed in as a parameter."
   *
   * The Ionic Storage class is a wrapper for the browser's local storage. It's a wrapper because it
   * provides a consistent API for accessing the browser's local storage, regardless of which browser is
   * being used
   *
   * @param [name=___mydb] - The name of the database.
   * @returns A new instance of the Storage class.
   */
  private generateIonicStorage(name = "___mydb"): Storage {
    return new Storage({
      name,
      driverOrder: [
        Drivers.SecureStorage,
        Drivers.IndexedDB,
        Drivers.LocalStorage,
      ],
    });
  }
}
