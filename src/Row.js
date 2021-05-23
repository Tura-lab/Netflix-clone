import React, {useState, useEffect} from 'react';
import axios from './axios';
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log('got data')
            setMovies(request.data.results);
            return request.data.results;
        }
        fetchData()
    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => {
                    return(
                    <img
                        className='row__poster'
                        key={movie.id} 
                        src={`${base_url}${movie.poster_path}`} 
                        alt={movie.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Row;
