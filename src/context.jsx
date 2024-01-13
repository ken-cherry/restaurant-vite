import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isChefsTasting, setIsChefsTasting] = useState(true);

  const toggleChefsTasting = () => {
    const newChefsTasting = !isChefsTasting;
    setIsChefsTasting(newChefsTasting);
  };

  return (
    <AppContext.Provider value={{ isChefsTasting, toggleChefsTasting }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
