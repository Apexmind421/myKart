
export const addToCart1 = () => {
    return async(dispatch,getState) => {
      
      dispatch({
          type: "ADD_TO_CART",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            discount: discount,
          },
        });
        const {cart : {cartItens}}
      }
  };