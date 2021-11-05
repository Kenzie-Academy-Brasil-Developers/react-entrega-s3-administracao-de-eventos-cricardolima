import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const PromContext = createContext([]);

export const PromProvider = ({ children }) => {
  const [promList, setPromList] = useState([]);

  const addDrinksToProm = (drink) => {
    setPromList([...promList, drink]);
    return toast.success("Item adicionado com sucesso!");
  };

  const removeFromProm = (drink) => {
    const output = promList.filter((item) => item.id !== drink)
    setPromList(output)
    return toast.error("Item removido!")
  }

  return (
    <PromContext.Provider value={{ promList, addDrinksToProm, removeFromProm }}>
      {children}
    </PromContext.Provider>
  );
};

export const useProm = () => useContext(PromContext);