import { useParams } from "react-router-dom"
import { useState } from "react"


const MoviePage = (props) => {

    const params = useParams()

    const [count, setCount] = useState(0)


    const foundMovie = props.movieList.find((movie)=>{
  
     return movie.Title === params.title
    
    })


    if(foundMovie === undefined){
        return (
            <div>No Movie</div>
        )
    }
    if(foundMovie.Title === params.title){
    return (
        <div className="movie-page">

            <img  src={foundMovie.Images[count]} alt="sorry didn't load"></img>
            <div className="image-button-container">
            <button className="image-scroll-button" onClick={()=>{
                
                if(count > 0){
                setCount(count-1)
                } else {
                setCount(0)    
                }
                console.log(count)

            }}>Previous</button>{((count)+1) + " of " + foundMovie.Images.length}
            <button className="image-scroll-button"
            onClick={()=>{         

            if(count >= 0 && count < foundMovie.Images.length-1){
               setCount(count+1)}
               }}> Next </button>
               </div>
            <h2>Title: {foundMovie.Title}</h2>
            <p>Year: {foundMovie.Year}</p>
            <p>Runtime: {foundMovie.Runtime}</p>
            <p>Writer: {foundMovie.Writer}</p>
            <p>MetaScore: {foundMovie.Metascore}</p>
            <p>imdbRating: {foundMovie.imdbRating}</p>
            <p>Rated: {foundMovie.Rated}</p>
            <p>Director: {foundMovie.Director}</p>
            <p>Actors: {foundMovie.Actors}</p>
            <p>Plot: {foundMovie.Plot}</p>
                
        </div>
    )
    } 


}

export default MoviePage