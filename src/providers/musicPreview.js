import React, { createContext , useState } from "react";

export const MusicContext = createContext({});

const MusicProvider = (props) => {
  const [musicPreview, setMusicPreview] = useState({});
  
  return (
    <MusicContext.Provider
      value={{
        musicPreview,
        setMusicPreview,
      }}
    >
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
