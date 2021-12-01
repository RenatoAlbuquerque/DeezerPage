import React, { useState, useContext } from 'react';
import { ItensContext } from '../../providers/itens';
import * as S from '../style';
import { VscSearch } from 'react-icons/vsc';
import api from "../../Services/api";



const Search = () => {
  const [useSearch, setUseSearch] = useState('')
  const { setItens } = useContext(ItensContext)

  const handleChange = (e) => {
    setUseSearch(e.target.value)
  }

  const getItensBySearch = async () => {
    try {
      const data = await api.get(`search?q=${useSearch}`)
      setItens(data.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.BackSearch>
      <S.GlobalSearch>
        <S.Search
          placeholder="Pesquise por Artista, Álbum ou música..."
          onChange={handleChange}
        />
        <S.ButtonSearch>
          <VscSearch onClick={getItensBySearch} />
        </S.ButtonSearch>
      </S.GlobalSearch>
    </S.BackSearch>
  )
}

export default Search