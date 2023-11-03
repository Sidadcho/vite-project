/* eslint-disable no-unused-vars */
import './App.css'
import MovieList from './components/movieList'
import Timer from './components/timer'

const movies = [
  {
    title: 'The matrix',
    description: 'Desc here'
  },
  {
    title: 'Superman',
    description: 'Desc here'
  },
  {
    title: 'The dark knight rises',
    description: 'Desc here'
  }
]


function App() {
  return (
    <div>
      <p>Hello</p>
      <Timer/>
      <MovieList movies={movies} headingText="Movie List!!!"/>
    </div>
  )
}

export default App
