export const addToCartAction = (menu, miktar, ozellik) => (dispatch) => {
  var cartItem = {
    ad: menu.ad,
    _id: menu._id,
    img: menu.img,
    ozellik: menu.ozellik,
    miktar: miktar,
    fiyat: menu.fiyat,
    desc: menu.desc,
    kategori: menu.kategori,
    fiyatlar: menu.fiyat[0][ozellik] * miktar,
  };
  if (miktar > 0) {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  }
};
export const removeFromCartAction = (id) => (dispatch) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });
};
export const updateCartItemAction =
  (id, newQuantity) => (dispatch, getState) => {
    const cartItems = getState().cartReducer.cartItems;
    const itemToUpdate = cartItems.find((item) => item._id === id);
    const updatedItem = {
      ...itemToUpdate,
      miktar: newQuantity,
      fiyatlar:
        parseFloat(itemToUpdate.fiyatlar / itemToUpdate.miktar) * newQuantity,
    };
    if (newQuantity > 0)
      dispatch({ type: "UPDATE_CART_ITEM", payload: updatedItem });
    else if (newQuantity === 0)
      dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };
