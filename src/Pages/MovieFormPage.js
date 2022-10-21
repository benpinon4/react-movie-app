import { useState } from "react"

const MovieFormPage = (props) => {

    const [title, setTitle] = useState()

    return (
        <div className="movie-form-page">
            <h1>Movie Form Page</h1>
            <label>Title:</label>
            <input type="text" onChange={(event)=>{
                setTitle(event.target.value)
            }}></input>
            <br></br>
            <button onClick={()=>{
                props.handleAddMovie(title)
            }}>Add Movie</button>
        </div>
    )

}

export default MovieFormPage