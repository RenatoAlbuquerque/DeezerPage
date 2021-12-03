import React, { createContext , useState } from "react";

export const ModalContext = createContext({});

const ModalProvider = (props) => {
  const [modal, setModal] = useState(false);
  
  return (
    <ModalContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
