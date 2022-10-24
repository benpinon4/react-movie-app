import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link className="navLink" to="./">Home Page</Link>
            <Link className="navLink" to="./movies">Movie List</Link>
            <Link className="navLink" to="./movies/form">Movie Form</Link>
        </div>
    )
}

export default NavBar