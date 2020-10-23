import axios from "../../Helpers/axios";


export const listProducts = (category = '', searchKeyword = '', sortOrder = '') => {
  return async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
      const { data } = await axios.get("/product/fetch?category=" + category +
        '&searchKeyword=' + searchKeyword +
        '&sortOrder=' + sortOrder);
      console.log(JSON.stringify(data));
      dispatch({ type: "PRODUCT_LIST_REQUEST_SUCCESS", payload: data.products });
    }
    catch (error) {
      dispatch({ type: "PRODUCT_LIST_REQUEST_FAILED", payload: error.message });
    }
  }
};


export const detailsProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAILS_REQUEST", payload: id });
    const { data } = await axios.get('/product?id=' + id);
    console.log(JSON.stringify(data));
    dispatch({ type: "PRODUCT_DETAILS_SUCCESS", payload: data.product });
  } catch (error) {
    dispatch({ type: "PRODUCT_DETAILS_FAIL", payload: error.message });
  }
};






export const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: "PRODUCT_SAVE_REQUEST", payload: product });
    const {
      auth: { userInfo },
    } = getState();
    if (!product._id) {
      const { data } = await axios.post('/api/products', product, {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      });
      dispatch({ type: "PRODUCT_SAVE_SUCCESS", payload: data });
    } else {
      const { data } = await axios.put(
        '/api/products/' + product._id,
        product,
        {
          headers: {
            Authorization: 'Bearer ' + userInfo.token,
          },
        }
      );
      dispatch({ type: "PRODUCT_SAVE_SUCCESS", payload: data });
    }
  } catch (error) {
    dispatch({ type: "PRODUCT_SAVE_FAIL", payload: error.message });
  }
};

export const deleteProdcut = (productId) => async (dispatch, getState) => {
  try {
    const {
      auth: { userInfo },
    } = getState();
    dispatch({ type: "PRODUCT_DELETE_REQUEST", payload: productId });
    const { data } = await axios.delete('/api/products/' + productId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({ type: "PRODUCT_DELETE_SUCCESS", payload: data, success: true });
  } catch (error) {
    dispatch({ type: "PRODUCT_DELETE_FAIL", payload: error.message });
  }
};

export const saveProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    const {
      auth: {
        userInfo: { token },
      },
    } = getState();
    dispatch({ type: "PRODUCT_REVIEW_SAVE_REQUEST", payload: review });
    const { data } = await axios.post(
      `/api/products/${productId}/reviews`,
      review,
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );
    dispatch({ type: "PRODUCT_REVIEW_SAVE_SUCCESS", payload: data });
  } catch (error) {
    // report error
    dispatch({ type: "PRODUCT_REVIEW_SAVE_FAIL", payload: error.message });
  }
};


