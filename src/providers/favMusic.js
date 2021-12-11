import React, { createContext , useState } from "react";

export const FavContext = createContext({});

const FavProvider = (props) => {
  const [favList, setFavList] = useState([]);
  const [toogleFav, setToogleFav] = useState(false)

  const addFavMusic = (music) => {
    if (toogleFav === false) {
      setFavList([...favList, music])
      setToogleFav(!toogleFav)
    } else {
      setFavList(favList.filter((musicRemove) => musicRemove !== music));
      setToogleFav(!toogleFav)
    }
  }

  const clearCart = () => {
    setFavList([]);
  }

  return (
    <FavContext.Provider
      value={{
        favList,
        setFavList,
        toogleFav,
        setToogleFav,
        clearCart,
        addFavMusic
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;