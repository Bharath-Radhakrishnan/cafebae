import { userActionTypes } from "./user/user.types";

export const initialState = {
  // basket: [],
  user: { currentUser: null },
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    // case "ADD_TO_BASKET":
    //   return { ...state, basket: [...state.basket, action.item] };
    // case "EMPTY_BASKET":
    //   return { ...state, basket: [] };
    // case "REMOVE_FROM_BASKET":
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id
    //   );
    //   let newBasket = [...state.basket];
    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn("Item not found in basket");
    //   }
    //   return { ...state, basket: newBasket };
    // default:
    //   return state;
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
  }
};

export default reducer;
