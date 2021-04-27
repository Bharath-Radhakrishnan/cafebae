import { registerActionTypes } from "./register/register.types";
import { userActionTypes } from "./user/user.types";

export const initialState = {
  user: { currentUser: null },
  register: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case registerActionTypes.ADD_REGISTER_DATA:
      return {
        ...state,
        register: { ...state.register, ...action.payload },
      };
  }
};

export default reducer;
