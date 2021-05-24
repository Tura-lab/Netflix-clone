import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request.data.results;
        }
        fetchData()
    }, [fetchUrl]);

    const opts = {
        height: '300',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }

    const handleClick = movie =>{
       if(trailerUrl){
           setTrailerUrl('');
       }else{
           movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(err => console.log(err));
       }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => {
                    return(
                    <img
                        className={`row__poster ${isLargeRow ? "row__posterLarge" : ''}`}
                        key={movie.id} 
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}/>
                    )
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
