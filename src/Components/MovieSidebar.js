import { Link } from "react-router-dom"

const MovieSidebar = (props) => {
    return (
        <>
        <div className="movie-sidebar">
            <h2>Movie Sidebar</h2>
            {props.movieList.map((movie, index)=>{
                
                return (
                    <Link key={index} to={`./${movie.Title}`}>{movie.Title}</Link>
                )
            })}
        </div>
        </>
    )
}

export default MovieSidebar