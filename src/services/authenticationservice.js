export const saveCredentials = (userData) => {
  console.log({ userData });
  const val = JSON.stringify(userData);
  localStorage.setItem("userData", val);
  return true;
};
export const getUserCredentials = () => {
  var userData = localStorage.getItem("userData");
  return JSON.parse(userData);
};
export const logout = () => {
  localStorage.setItem("userCredentials", "");
  localStorage.clear();
};
const AuthenticationService = {
  saveCredentials,
  getUserCredentials,
  logout,
};
export default AuthenticationService;
