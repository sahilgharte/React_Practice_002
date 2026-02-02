import { createContext, useState, useEffect, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
export const ThemeProvider = ({ children }) => {
    // Initialize state (Check LocalStorage first, default to "light")
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Toggle Function
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // Effect: Updates the HTML class & LocalStorage whenever 'theme' changes
    useEffect(() => {
        const root = window.document.documentElement;
        
        // Remove old class, add new class
        root.classList.remove("light", "dark");
        root.classList.add(theme);

        // Save persistence
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Custom Hook (Makes using it easier in components)
export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;