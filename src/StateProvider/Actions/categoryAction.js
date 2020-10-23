import axios from "../../Helpers/axios";

export const getAllCategory = () => {
    
    return async (dispatch) => {
        try {
          dispatch({ type: "GET_ALL_CATEGORIES_REQUEST" });
          const { data } = await axios.get("category/fetchcategories");
          console.log("This is here"+JSON.stringify(data));
          dispatch({ type: "GET_ALL_CATEGORIES_SUCCESS", payload: data.categoryList });
        }
        catch (error) {
          dispatch({ type: "GET_ALL_CATEGORIES_FAILURE", payload: error.message });
          console.log("This is true"+JSON.stringify(error));
        }
      }
    
};