import { axiosInstance } from "../utils/axios.js";

export const useLogin = () => {
    const { user,setUser,accessToken,setAccessToken } = useAuth();
    const login = async (data) => {
        try{
            const res = await axiosInstance.post("/auth/login", data);

            const user = res.data.user;
            const accessToken = res.data.accessToken;

            return res.data;
        }catch(error){
            console.log(error.response.data.message);
            return ;
        }
    }
    return { login }
}