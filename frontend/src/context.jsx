import { createContext, useState } from "react";
import { doctors, specialityData } from "./assets/assets.js";

// CREATING CONTEXT
// allows you to pass data between components without using props
// use the createContext() function to create the context
// using the useContext() hook to consume data

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { doctors, specialityData, currentUser, setCurrentUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
