

const MovieCard = (props) => {
    
    console.log(props.index)
    return (
        
        <div key={props.index} className="movie-list-card">
            <h2>{props.movie.Title}</h2>
            <p>{props.movie.Director}</p>
        </div>
    )
}

export default MovieCard