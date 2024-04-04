import axios from "axios";
import { API_BASE_URL, API_KEY } from "./config";

export const authentication =async (endpoint, data, fn)=>{
    try {
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
          headers: {
            "X-Binarybox-Api-Key": API_KEY,
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          if (response.data) {
            localStorage.setItem("token", response?.data?.token);
            fn();
          }
        }
      } catch (err) {}
}