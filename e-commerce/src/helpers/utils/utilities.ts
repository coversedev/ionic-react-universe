/**
 * It toggles the class "dark" on the body element, based on the value of the shouldCheck parameter
 *
 * @param {boolean} shouldCheck - boolean - This is the value that will be used to determine whether
 * the class should be added or removed.
 */
export const toggleTheme = (shouldCheck: boolean) => {
  document.body.classList.toggle("dark", shouldCheck);
};
