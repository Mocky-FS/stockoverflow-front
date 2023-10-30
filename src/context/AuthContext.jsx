import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const timeOutTokenRef = useRef(null);

  const storedUser = JSON.parse(localStorage.getItem('user'));

  // if (storedUser){
  //             axios.defaults.headers.common['Authorization'] = `Bearer ${storedUser.token}`
    
  // }
  

  const [user, setUser] = useState({
        id: storedUser?.id || null,
        firstname: storedUser?.firstname || null,
        lastname: storedUser?.lastname || null,
        email: storedUser?.email || null,
        token: storedUser?.token || null,
        tokenExpiration: storedUser?.tokenExpiration || null,
  })

  const logout = () => {

    setUser({
      firstname: null,
      lastname: null,
      email: null,
      id: null,
      token: null,
      tokenExpiration: null,
    })

    localStorage.removeItem('user');

  }

  useEffect(() => {

    if (user.tokenExpiration) {
      const expiration = user.tokenExpiration ? new Date(user.tokenExpiration).getTime() - new Date().getTime() : 0;

      timeOutTokenRef.current = setTimeout(() => {

        logout();
        toast.error('Votre session a expiré, veuillez vous reconnecter')

      }, expiration);

    }

    return () => {
      clearTimeout(timeOutTokenRef.current);
    }

  }, [user]);



  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )


}

export default AuthProvider