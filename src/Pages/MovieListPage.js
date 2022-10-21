import MovieCard from "../Components/MovieCard"

const MovieListPage = (props) => {
    return (
        <div className="movie-list">
            <h1>Movie List Page</h1>
            
                {props.movieList.map((movie, index)=>{
                    return (
                        <MovieCard movie={movie} index={index}  />
                    )
                })}
            
        </div>
    )
}

export default MovieListPage