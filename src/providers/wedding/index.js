import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addDrinksToWedding = (drink) => {
    setWeddingList([...weddingList, drink]);
    return toast.success("Item adicionado com sucesso!");
  };

  const removeFromWedding = (drink) => {
    const output = weddingList.filter((item) => item.id !== drink)
    setWeddingList(output)
    return toast.error("Item removido!")
  }

  return (
    <WeddingContext.Provider value={{ weddingList, addDrinksToWedding, removeFromWedding }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingContext);