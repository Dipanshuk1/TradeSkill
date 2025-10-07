import { useEffect } from "react";

import axios from "axios";

import { useRefreshToken } from "./useRefreshToken.js";
import { useAuth } from "./useAuth.js";
import { useLogout } from "./useLogout.js";

const useAxiosInterceptor = () => {
    const { accessToken } = useAuth();
    const { refreshToken } = useRefreshToken();
    const { logout } = useLogout();

    useEffect(() => {
        const requestInterept = axios.interceptors.request.use(
            (config) => {
                if (!config.headers["Authorization"] && accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            (response) => {
                return response
            },
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    try{
                        const newAccessToken = await refreshToken();    
                        prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                        return axios(prevRequest);
                    }catch(refreshError){
                        console.error("Refresh token expired or invalid:", error);
                        logout(); 
                        navigate('/login', { replace: true });  
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );

        
        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        };
    }, [accessToken])
    return axios;
}

export default useAxiosInterceptor;