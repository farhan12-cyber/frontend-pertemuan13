import axios from "axios";
import { useEffect, useState } from "react";
import AddMoviesApp from "../../components/addmoviesapp/AddMoviesApp";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";
import ENDPOINTS from "../../utils/constans/endpoints";

function TopRated() {   
    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        getTopRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    async function getTopRated(){
        const response = await axios(ENDPOINTS.TOP_RATED);
        setMovies(response.data.results);
    }
    return (
    <div>

    <Hero />
    <Movies movies={movies} title='Top Rated Movies' />
    <AddMoviesApp />
    </div>
    );
}

export default TopRated;