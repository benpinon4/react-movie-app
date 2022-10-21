import { Outlet } from "react-router-dom"
import MovieSidebar from "../Components/MovieSidebar"

const MovieLayout = (props) => {
    return (
        <div className="movie-layout">
            <MovieSidebar movieList={props.movieList} />
            <div className="movie-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MovieLayout