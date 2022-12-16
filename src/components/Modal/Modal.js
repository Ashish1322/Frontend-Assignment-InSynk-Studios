import React from 'react'
import "./modal.css"
export default function Modal({movie, visible}) {

    // Returns the Date in required format ( May 25, 2024 )
    function getDateFormat  (date)  {
        const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
        const month = months[ parseInt(date.substr(5,2))-1 ]
        const day = date.substr(8,2)
        const year = date.substr(0,4)
        return month+" "+day+", "+year;
    }

    return (
    <div id="myModal" class="modal">
        <div class="modal-content">
        
            <div style={{display: "flex", justifyContent:"space-between", alignItems:"center", height:"27px"}}>
                <h3 style={{fontSize:"18px", padding: "0px" }}>{movie ? movie.title : ""}</h3>
                <i style={{cursor:"pointer"}} onClick={ () => visible(false)} class="fa-solid fa-xmark"></i>
            </div>
     
        <div className='row
        '>
    
            <img className='movie_poster_modal' src={movie ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : ""} />
   
            <div className='modal_right_container'>
                <p> <b>Release Date : </b> { movie ? getDateFormat(movie.release_date) : ""} </p>
                <p>{movie ? movie.overview : ""}</p>
                <p> <b>{movie ? movie.vote_average : ""}</b> / 10 ({movie ? movie.vote_count : "" } total votes) </p>
            </div>
       
        </div>
    
    </div>

  </div>
  )
}
