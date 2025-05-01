//Local storage functions
export const fetchData = (key) => {
  // localStorage.setItem("userName", JSON.stringify("Yudhajit"));
  return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
