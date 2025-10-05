import axiosInstance from "../utils/axios.js";
export const useRegister = () => {
    const register = async (data) => {
        const res =  axiosInstance.post("/register", data);
        return res.data;
    }
    return { register };
}

