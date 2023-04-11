
import { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/Movie';
import Filter from './components/Filter';
import { motion, AnimatePresence } from 'framer-motion'


function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0) //api gives back number ids for genres - action: 28, comedy: 35, all - give it a 0

  useEffect(() => {
    fetchPopular()
  }, [])


  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=56cf9e98ddf867b745710b3b9972c90d&language=en-US&page=1')
    const movies = await data.json()
    console.log(movies)
    setPopular(movies.results)
    setFiltered(movies.results) //copy
  }

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="container">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div Layout
        className="popular-movies">
          <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie 
            key={movie.id} 
            title={movie.title} 
            img={movie.backdrop_path}
            release={movie.release_date}
            overview={movie.overview}
            vote={movie.vote_average} />
          })}
          </AnimatePresence>
      </motion.div>
      </div>
    </div>
  );
}

export default App;
