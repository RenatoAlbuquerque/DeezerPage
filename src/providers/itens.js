import React, { createContext , useState } from "react";
import api from '../Services/api';

export const ItensContext = createContext({});

const ItensProvider = (props) => {
  const [itens, setItens] = useState([]);
  const [favList, setFavList] = useState([]);
  const [pages, setPages] = useState(false);
  const [currentPage, setCurrentPage] = useState(6)
  const [useSearch, setUseSearch] = useState('')

  const addFavMusic = (music) => {
    const index = itens.findIndex(iten => iten.id === music.id)

    const musicsFav = JSON.stringify(favList)
    localStorage.setItem('favorites', musicsFav)


    if(musicsFav.fav === true){
      if(index > -1) {
      if(itens[index].fav === false){
        itens[index].fav=true
        setItens([...itens])
        setFavList([...favList, itens[index]])
      }else{
        itens[index]={fav: true, ...music}
        setItens([...itens])
        setFavList([...favList, itens[index]])
      }
    }
    }

    
    if(index > -1) {
      if(itens[index].fav === false){
        itens[index].fav=true
        setItens([...itens])
        setFavList([...favList, itens[index]])
      }else{
        itens[index]={fav: true, ...music}
        setItens([...itens])
        setFavList([...favList, itens[index]])
      }
    }
  }

  const removeFavMusic = (music) => {
    const index = itens.findIndex(iten => iten.id === music.id)
    if(index > -1) {
      itens[index].fav=false
      setItens([...itens])
      setFavList(favList.filter(favMusic => favMusic.id !== music.id))
    }
  }

  const clearCart = (music) => {
    for(var i=0; i<music.length; i++){
      delete music[i].fav
    }
    setFavList([])
    setItens([...itens])
  }

  const handlePages = (state) => {
    setPages(state)
  }

  const loadMusicsInitial = async () => {
    try {
      const data = await api.get(`editorial/0/charts`)
      setItens(data.data.tracks.data)

    } catch (error) {
      console.log(error)
    }
  }

  const getItensBySearch = async () => {
    try {
      const data = await api.get(`search?q=${useSearch}&index=0&limit=50&output=json`)
      setItens(data.data.data)

    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <ItensContext.Provider
      value={{
        itens,
        setItens,
        addFavMusic,
        favList,
        setFavList,
        clearCart,
        removeFavMusic,
        pages,
        setPages,
        handlePages,
        loadMusicsInitial,
        currentPage,
        setCurrentPage,
        getItensBySearch,
        useSearch,
        setUseSearch
      }}
    >
      {props.children}
    </ItensContext.Provider>
  );
};

export default ItensProvider;
