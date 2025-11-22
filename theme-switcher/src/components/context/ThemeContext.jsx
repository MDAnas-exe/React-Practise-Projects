import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};
