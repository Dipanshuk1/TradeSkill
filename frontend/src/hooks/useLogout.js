import { axiosInstance } from "../api/axios.js";
export const useLogout = () => {
    const logout = async () => {
        const res = await axiosInstance.post("/auth/logout");
        return res.data;
    }
    return { logout }
}