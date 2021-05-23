const API_KEY = '83f523886380f22b53699972d48935e6';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/moview/top_rated/week?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=35`,
    fetchHororMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/week?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/week?api_key=${API_KEY}&with_genres=99`,
}
export default requests;