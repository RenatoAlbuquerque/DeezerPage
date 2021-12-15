import React, { useContext } from 'react';
import { ItensContext } from '../../providers/itens';
import * as S from '../style';
import { VscSearch } from 'react-icons/vsc';

const Search = () => {
  const { setUseSearch, getItensBySearch, pages } = useContext(ItensContext)

  const handleChange = (e) => {
    setUseSearch(e.target.value)
  }


  return (
    <S.BackSearch>
      <S.GlobalSearch>
        {pages === false ?
          <>
            <S.Search
              placeholder="Pesquise por Artista, Álbum ou música..."
              onChange={handleChange}
            />
            <S.ButtonSearch>
              <VscSearch onClick={getItensBySearch} />
            </S.ButtonSearch>
          </>
          : null}
      </S.GlobalSearch>
    </S.BackSearch>
  )
}

export default Search