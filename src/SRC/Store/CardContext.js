import { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [visibleCards, setVisibleCards] = useState({
    recharge: true,
    datacard: true,
    giftcard: true,
    package: true,
   
  });

  const setCardVisibility = (cardType, isVisible) => {
    setVisibleCards((prevVisibleCards) => ({
      ...prevVisibleCards,
      [cardType]: isVisible,
    }));
  };

  return (
    <CardContext.Provider value={{ visibleCards, setCardVisibility }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardContext);
};
