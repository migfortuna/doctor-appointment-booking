import { createContext } from "react";
import { doctors } from "./assets/assets.js";

// CREATING CONTEXT
// allows you to pass data between components without using props
// use the createContext() function to create the context
// using the useContext() hook to consume data

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = { doctors };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
