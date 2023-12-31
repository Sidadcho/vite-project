/* eslint-disable no-unused-vars */
import MovieList from './components/movieList'
import Timer from './components/Timers'
import Counter from './components/Counters'
import MappedMovies from './components/Mapped'
import StarWars from './components/StarWars'
import Calculator from './components/Calculator'


const movies = [
  {
    title: 'The matrix',
    description: 'Matrixxxxxx'
  },
  {
    title: 'Superman',
    description: 'Man of steel'
  },
  {
    title: 'The dark knight rises',
    description: 'BATMANNNN'
  }
]



function App() {
  return (
    <div>
      <p>Hello</p>
      <Timer/>
      <Counter/>
      <MovieList movies={movies} headingText="Movie List!!!"/>
      <MappedMovies items={movies}/>
      <StarWars/>
      <Calculator/>
    </div>
  )
}

export default App
