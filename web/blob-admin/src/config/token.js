export const getToken = () => {
  return localStorage.getItem("token");
};
export const setToken = (token) => {
  return localStorage.setItem("token", token);
};
export const removeToken = () => {
  return localStorage.removeItem("token");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};

export const setRefreshToken = (token) => {
  return localStorage.setItem("refreshToken", token);
};
export const removeRefreshToken = () => {
  return localStorage.removeItem("refreshToken");
};
