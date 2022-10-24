

const MovieCard = (props) => {
    

    return (
        
        <div className="movie-list-card">
            {props.movie.Images && <img className="movie-card-image" src={props.movie.Images[0]} />}
            <div key={props.index} className="movie-list-card-text-container">
            <h2>{props.movie.Title}</h2>
            <p>{props.movie.Director}</p>
            </div>
        </div>
    )
}

export default MovieCard