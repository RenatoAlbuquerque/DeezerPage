import { ItensContext } from '../../providers/itens';
import React, { useContext, useState, useEffect } from 'react';
import * as Style from '../style';
import { VscSearch } from "react-icons/vsc";
import api from '../../Services/api';
import { getInitialItems } from '../requestfunctions';

function Search() {
  const { setItens } = useContext(ItensContext)
  const [SearchMusic, setSearchMusic] = useState()

  useEffect(() => {
    getInitialItems().then((data) => setItens({ ...data }))
  }, [setItens]);

  const getItensBySearch = (e) => {
    api
      .get(`/search?q=${e}`)
      .then((response) => setItens(response.data.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  const handleKeyPress = () => {
    getItensBySearch(SearchMusic)
  }


  return (
    <>
      <Style.SearchGlobal >
        <Style.SearchBar>
          <Style.SearchInput
            placeholder="Pesquise por... Artista, Album ou Gênero"
            onChange={(e) =>
              setSearchMusic(e.target.value)}
          />
          <Style.SearchIcon>
            <VscSearch onClick={() => handleKeyPress()} />
          </Style.SearchIcon>
        </Style.SearchBar>
      </Style.SearchGlobal>
    </>
  )
}
export default Search;


