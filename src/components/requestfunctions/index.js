import api from '../../Services/api';

export const getItensByArtist = async (id) => {
  const { data } = await api.get(`/artist/${id}/top`)
  return data
}

export const getInitialItems = async () =>{
  const { data }  = await api.get("/editorial/0/charts")
  return data
} 