import { createContext, useEffect, useRef, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const timeOutTokenRef = useRef(null);

    const [user, setUser] = useState({
        firstname : 'Méduse',
        lastname : null,
        email : null,
        id : null,
        token : null,
        tokenExpiration : null,
        isLogged : false,
        isAdmin : false

    })

    const logout = () => {

        setUser({
            firstname : null,
            lastname : null,
            email : null,
            id : null,
            token : null,
            tokenExpiration : null,
            isLogged : false,
            isAdmin : false
        })

        localStorage.removeItem('user');

    }

    useEffect(() => {

        if (user.tokenExpiration){
          const expiration = user.tokenExpiration ? new Date(user.tokenExpiration).getTime() - new Date().getTime() : 0;
          
          timeOutTokenRef.current = setTimeout(() => {
            
            logout();
            alert('Votre session a expiré, veuillez vous reconnecter')
            
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