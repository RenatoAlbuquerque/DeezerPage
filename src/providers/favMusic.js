import React, { createContext , useState, useEffect } from "react";

export const FavContext = createContext({});

const FavProvider = (props) => {
  const [favList, setFavList] = useState({});
  useEffect(() =>{
    const cartLocal = window.localStorage.getItem('cart')
    if(cartLocal) {
      setFavList(JSON.parse(cartLocal))
    }
  },[])
  const addToCart = (product) => {
    setFavList((old) => {
      let quantity = 1
      if(old[product.id]){
        quantity = old[product.id].quantity
      }
      const newCart = {
        ...old,
        [product.id]: {
          quantity: quantity,
          product,
        },
      }
      window.localStorage.setItem('cart', JSON.stringify(newCart))
      return newCart
    })
  }
  
  return (
    <FavContext.Provider
      value={{
        favList,
        setFavList,
        addToCart
      }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;