export const getDataFromLocalStorage = localStorageKey => {
  return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
};

export const setDataToLocalStorage = (localStorageKey, data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};
