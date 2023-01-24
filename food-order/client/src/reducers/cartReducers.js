export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DELETE_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (urun) => urun._id !== action.payload
        ),
      };

    default:
      return state;
  }
};
