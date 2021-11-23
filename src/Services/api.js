import axios from "axios";

const api = 
axios.create({
    method: 'GET',
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    'x-rapidapi-key': 'd7f6c12f64msh94a335035113f20p1879f7jsn81f38943d30f'
    }

});

export default api;




