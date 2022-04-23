import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

const baseUrl = process.env.baseUrl;

export const sendIP = async (payload) => {
    console.log('payload :>> ', payload);
   const resp = await axios.post(`${baseUrl}/api/renewIP`, payload);
   console.log(resp.data);
};
