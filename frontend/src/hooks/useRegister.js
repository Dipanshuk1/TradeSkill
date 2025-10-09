import { axiosInstance } from "../utils/axios.js";
export const useRegister = () => {
    const register = async (data) => {
        const res =  axiosInstance.post("/auth/register", data);
        return res.data;
    }
    return { register };
}

