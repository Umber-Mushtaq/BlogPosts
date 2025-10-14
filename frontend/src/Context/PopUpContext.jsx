import { createContext, useContext, useState } from "react";

const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePop = () => setIsPopupOpen((prev) => !prev);
  const closePop = () => setIsPopupOpen(false);

  return (
    <PopUpContext.Provider value={{ isPopupOpen, handlePop, closePop }}>
      {children}
    </PopUpContext.Provider>
  );
};

export const usePopUp = () => useContext(PopUpContext);
