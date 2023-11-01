/* eslint-disable no-unused-vars */
import './App.css'
import MovieList from './components/movieList'

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

      <MovieList movies={movies} headingText="Movie List!!!"/>
    </div>
  )
}

export default App
