import React, {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'
import "./cardsGrid.css"

export default function CardsGrid() {

  // State Variables
  const [movies, setMovies] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [modalMovie, setModalMovie] = useState("")

  // Method to load the  latest movies
  const loadMovies = () => {
    // API call for fetching latest movies
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=3a57001b47402034b50011d8357f3c63")
    .then( data => {
      data.json().then( values => setMovies(values.results)).catch(err => console.log(err))
    })
    .catch(err => console.log(err))

  }

  // Loading the images when app is opened first time 
  useEffect(
    () => {
      loadMovies()
    }
  ,[])

  // Method to search the movie matching with user query
  const searchMovies = (name) => {
    // Handling some empty queries
    if(name[0] == " ")
    return
    if(name=="")
    return
    // Making API call withe name query
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3a57001b47402034b50011d8357f3c63&page=1&include_adult=false&query=${name}`)
    .then( data => {
      data.json().then( values => setMovies(values.results)).catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='movies_grid_container'>
      <Header search = {searchMovies} />
      <hr className='horizontal_line'></hr>
      <h3> Most Recent Movies</h3>
      {
        showModal  ? <Modal movie = {modalMovie} visible = {setShowModal}  /> : null
      }
      {
        movies.length == 0 ? <h2 style={{color:"grey"}}> No Results found...</h2> : null
      }
      <div className='cards_grid'>
        {
          movies.map( (movie) => <Card setMovieModal = {setModalMovie} movie={movie} showModal={setShowModal} />)
        }
      </div>
    </div>
  )
}
