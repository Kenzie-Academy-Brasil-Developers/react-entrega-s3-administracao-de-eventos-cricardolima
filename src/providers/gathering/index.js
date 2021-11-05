import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const GatheringContext = createContext([]);

export const GatheringProvider = ({ children }) => {
  const [gatheringList, setGatheringList] = useState([]);

  const addDrinksToGathering = (drink) => {
    setGatheringList([...gatheringList, drink]);
    return toast.success("Item adicionado com sucesso!");
  };

  const removeFromGathering = (drink) => {
    const output = gatheringList.filter((item) => item.id !== drink);
    setGatheringList(output);
    return toast.error("Item removido!");
  };

  return (
    <GatheringContext.Provider
      value={{
        gatheringList,
        addDrinksToGathering,
        removeFromGathering,
      }}
    >
      {children}
    </GatheringContext.Provider>
  );
};

export const useGathering = () => useContext(GatheringContext);
