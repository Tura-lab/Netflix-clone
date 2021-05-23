import axios from 'axios';

// base url to make requeests to the moviedatabase
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;