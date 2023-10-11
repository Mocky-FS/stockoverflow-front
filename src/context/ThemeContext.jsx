import { createContext, useEffect, useRef, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({ children }) => {

    
    // create a theme context

    const [theme, setTheme] = useState('light')

    
    
    useEffect(() => {
        
        const themeLocal = window.localStorage.getItem('theme')

        if (themeLocal){
            setTheme(themeLocal)
            document.body.classList.add(themeLocal)
        } else {
            window.localStorage.setItem('theme', 'light')
        }
    }
    , [theme])




   



    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}

export default ThemeProvider