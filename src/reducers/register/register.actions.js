import { registerActionTypes } from "./register.types";

export const addRegisterDetails = (data) => ({
  type: registerActionTypes.ADD_REGISTER_DATA,
  payload: data,
});
