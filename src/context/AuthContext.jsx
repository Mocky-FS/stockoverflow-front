import { createContext, useEffect, useRef, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const timeOutTokenRef = useRef(null);

    const [user, setUser] = useState({
        firstname : null,
        lastname : null,
        email : null,
        id : null,
        token : null,
        tokenExpiration : null,      
    })

    useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    console.log(storedUser)

    if (storedUser ) {
       setUser({
         id : storedUser.id,
        firstname : storedUser.firstname,
        lastname : storedUser.lastname,
        email : storedUser.email,
        token : storedUser.token,
        tokenExpiration : storedUser.tokenExpiration,
       })
    }

    
    }, [])

    const logout = () => {

        setUser({
            firstname : null,
            lastname : null,
            email : null,
            id : null,
            token : null,
            tokenExpiration : null,
        })

        localStorage.removeItem('user');

    }

    useEffect(() => {

        if (user.tokenExpiration){
          const expiration = user.tokenExpiration ? new Date(user.tokenExpiration).getTime() - new Date().getTime() : 0;
          
          timeOutTokenRef.current = setTimeout(() => {
            
            logout();
            // alert('Votre session a expiré, veuillez vous reconnecter')
            
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