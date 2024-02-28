export const saveLocalStorage = (key, item) => {
  localStorage.setItem(key, item);
  return true;
};

export const getLocalStorage = (key) => {
  const result = localStorage.getItem(key);

  return result;
};

export const deleteLocalStorage = (key) => {
  localStorage.removeItem(key);

  return true;
};
