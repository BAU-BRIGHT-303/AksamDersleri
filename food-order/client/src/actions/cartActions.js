export const addToCartAction = (menu, miktar, ozellik) => (dispatch) => {
  var cartItem = {
    ad: menu.ad,
    _id: menu._id,
    img: menu.img,
    ozellik: menu.ozellik,
    miktar: miktar,
    fiyat: menu.fiyat,
    fiyatlar: menu.fiyat[0][ozellik] * miktar,
    desc: menu.desc,
    kategori: menu.kategori,
  };
  if (miktar > 0) {
    dispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });
  }
};

export const deleteToCartAction = (id) => (dispatch) => {
  dispatch({ type: "DELETE_TO_CART", payload: id });
};
