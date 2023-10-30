import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()


const ThemeProvider = ({ children }) => {

    const actualTheme = window.localStorage.getItem('theme')

    const [theme, setTheme] = useState(actualTheme || 'light')


    useEffect(() => {
        if (theme === 'dark') {
            
            document.body?.classList.add('dark');
            document.body?.classList.add('bg-dark-tremor-background');
        } else {
            document.body?.classList.remove('dark');
            document.body?.classList.remove('bg-dark-tremor-background');
        }

        window.localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider