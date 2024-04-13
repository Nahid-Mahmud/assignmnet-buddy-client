export const themeDataFromLocalStorage = () => {
  return localStorage.getItem("theme") || "light";
};
