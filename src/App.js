//import searchIcon from './search.svg';
import {useEffect, useState} from 'react';

import "./App.css";
import MovieCard from './MovieCard';

// this is our api url
const API_URL = "http://www.omdbapi.com?apikey=7e7d6296"


function App() {

  // we use this recieve the fetched movies and set it anywhere in our function
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // we fetch our movies from the api here
  const searchMovies = async (title) => {

    // this line calls our API
    const response = await fetch(`${API_URL}&s=${title}`);

    // this is how we get the data we just recieved from the api call
    const data = await response.json();

    // we set the data fetched from the api to our class level property created above
    setMovies(data.Search);

  }

  // we use this to fetch all the movies from our API
  useEffect(() => {

    // we call our constant where we fetch movies here, using it like an initialiser.
    searchMovies("Spiderman")

  }, []);

  return (

    <div className="app">
      
      <h1>MovieLandsss</h1>

      <div className='search'>

        <input 

        // placeholder for the search bar
        placeholder='search for movies'

        // value of the text entered inside the search bar
        value= {searchTerm}

        //
        onChange={ (event) => setSearchTerm(event.target.value)}
        />
        <img 

        // this is how we add an image 
        src=""
        alt="search"

        // on click is similar to on tap getsure in swftui
        onClick={ () => searchMovies(searchTerm)}

        />
      </div>

      {
        movies?.length > 0 ? (

          <div className= "container">

            {movies.map((movie) => (

              <MovieCard movie ={movie} />
            ))}

        </div>

        ) : (

          <div className="empty">

            <h2>No movies found</h2>
          </div>

        )

      }

      </div>
  );
}

export default App;
