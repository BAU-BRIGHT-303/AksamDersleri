export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (urun) => urun._id !== action.payload
        ),
      };
    case "UPDATE_CART_ITEM":
      const updatedCartItems = state.cartItems.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, cartItems: updatedCartItems };

    default:
      return state;
  }
};
