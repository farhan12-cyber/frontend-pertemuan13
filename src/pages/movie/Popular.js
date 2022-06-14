import axios from "axios";
import { useEffect, useState } from "react";
import AddMoviesApp from "../../components/addmoviesapp/AddMoviesApp";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";

function Popular() {
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    // membuat state movies
    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
// =========================================================================
    async function getPopularMovies(){
        // fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        // simpan data movies dari axios ke state movies
        //update state menggunakan setmovies().
        setMovies(response.data.results);
    }
// =========================================================================
    console.log(movies); 
    return (
    <div>
        <Hero />
    <Movies movies={movies} title='Popular Movies' />
    <AddMoviesApp />
    </div>
    );
}

export default Popular;