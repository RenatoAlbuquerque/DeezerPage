import React, { createContext , useState } from "react";

export const PausePlayContext = createContext({});

const PausePlayProvider = (props) => {
  const [pausePlayMusic, setPausePlayMusic] = useState({});
  
  return (
    <PausePlayContext.Provider
      value={{
        pausePlayMusic,
        setPausePlayMusic,
      }}
    >
      {props.children}
    </PausePlayContext.Provider>
  );
};

export default PausePlayProvider;
