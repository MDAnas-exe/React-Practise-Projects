import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [usersData, setUsersData] = useState(() => {
    const saved = localStorage.getItem("usersData");
    return saved ? JSON.parse(saved) : [];
  });

  const login = (email, password) => {
    let user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      return true;
    }

    return false;
  };
  const logout = () => {
    setIsLoggedIn[!isLoggedIn];
  };

  const signup = (email, password) => {
    const updated = [...usersData, { email, password }];

    setUsersData(updated);
    localStorage.setItem("usersData", JSON.stringify(updated));

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
