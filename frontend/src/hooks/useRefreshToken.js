import { axiosInstance } from "../utils/axios.js"; 

const useRefreshToken = () => {
    const refreshToken = async () => {
        const response = await axiosInstance.get('/auth/refresh-token');
        return response.data;
    }
  return { refreshToken }
}

export default useRefreshToken;