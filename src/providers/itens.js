import { createContext , useState } from "react";

export const ItensContext = createContext({});

const ItensProvider = (props) => {
  const [itens, setItens] = useState({});
  
  return (
    <ItensContext.Provider
      value={{
        itens,
        setItens,
      }}
    >
      {props.children}
    </ItensContext.Provider>
  );
};

export default ItensProvider;
