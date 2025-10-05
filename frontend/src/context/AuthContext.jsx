import axios from "axios";
import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [accessToken,setAccessToken] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const restoreSession = async () => {
            try {
                const response = await axios.get('/refresh');
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                    setAccessToken(data.accessToken);
                }
            } catch (error) {
                console.error(error);
            }finally{
                setLoading(false);
            }
        }
        restoreSession();
    }, []);

    return (
        <AuthContext.Provider value={{user,setUser,accessToken,setAccessToken}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}