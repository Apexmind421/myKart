import axios from "axios";
import { api } from "./URLConfig";

const axiosInstance =axios.create({
    baseURL: api,
    //headers: {
    //   'Authorization':""
    //} 
});

export default axiosInstance;
