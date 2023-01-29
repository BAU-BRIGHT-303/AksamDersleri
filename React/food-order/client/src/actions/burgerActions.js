import axios from "axios";
import Swal from "sweetalert2";

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/burgers/getBurgers"
    );
    console.log(response);

    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};

export const filteredBurgersAction =
  (searchValue, category) => async (dispatch) => {
    dispatch({ type: "GET_BURGERS_REQUEST" });

    try {
      const response = await axios.get(
        "http://localhost:4000/api/burgers/getBurgers"
      );
      var filteredBurgers = response.data.filter((burger) =>
        burger.ad.toLowerCase().includes(searchValue)
      );

      if (category !== "hepsi") {
        filteredBurgers = response.data.filter((filter) =>
          filter.kategori.toLowerCase().includes(category)
        );
      }

      dispatch({ type: "GET_BURGERS_SUCCESS", payload: filteredBurgers });
    } catch (error) {
      dispatch({ type: "GET_BURGERS_FAILED", payload: error });
    }
  };

export const deleteBurgerAction = (burgerid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/deleteBurger",
      { burgerid }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Silme İşlemi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
