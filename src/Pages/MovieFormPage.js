import { useState } from "react";

const MovieFormPage = (props) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rated, setRated] = useState("");
  const [released, setReleased] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [writer, setWriter] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [awards, setAwards] = useState("");
  const [poster, setPoster] = useState("");
  const [imdbRating, setimdbRating] = useState("");
  const [imdbVotes, setimdbVotes] = useState("");
  const [imdbID, setimdbID] = useState("");
  const [type, setType] = useState("");
  const [response, setResponse] = useState("");
  const [images, setImages] = useState("");
  const [images2, setImages2] = useState("");
  const [images3, setImages3] = useState("");
  const [images4, setImages4] = useState("");
  const [images5, setImages5] = useState("");
  const [metaScore, setMetascore] = useState("");

  return (
    <div className="movie-form-page">
      <h1>Movie Form Page</h1>
      <label>Title:</label>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Year:</label>
      <input
        type="text"
        onChange={(event) => {
          setYear(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Rated:</label>
      <input
        type="text"
        onChange={(event) => {
          setRated(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Released:</label>
      <input
        type="text"
        onChange={(event) => {
          setReleased(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Runtime:</label>
      <input
        type="text"
        onChange={(event) => {
          setRuntime(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Genre:</label>
      <input
        type="text"
        onChange={(event) => {
          setGenre(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Director:</label>
      <input
        type="text"
        onChange={(event) => {
          setDirector(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Writer:</label>
      <input
        type="text"
        onChange={(event) => {
          setWriter(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Actors:</label>
      <input
        type="text"
        onChange={(event) => {
          setActors(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Plot:</label>
      <input
        type="text"
        onChange={(event) => {
          setPlot(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Language:</label>
      <input
        type="text"
        onChange={(event) => {
          setLanguage(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Country:</label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Awards:</label>
      <input
        type="text"
        onChange={(event) => {
          setAwards(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Poster:</label>
      <input
        type="text"
        onChange={(event) => {
          setPoster(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Metascore:</label>
      <input
        type="text"
        onChange={(event) => {
          setMetascore(event.target.value);
        }}
      ></input>
      <br></br>
      <label>imdbRating:</label>
      <input
        type="text"
        onChange={(event) => {
          setimdbRating(event.target.value);
        }}
      ></input>
      <br></br>
      <label>imdbVotes:</label>
      <input
        type="text"
        onChange={(event) => {
          setimdbVotes(event.target.value);
        }}
      ></input>
      <br></br>
      <label>imdbID:</label>
      <input
        type="text"
        onChange={(event) => {
          setimdbID(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Type:</label>
      <input
        type="text"
        onChange={(event) => {
          setType(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Response:</label>
      <input
        type="text"
        onChange={(event) => {
          setResponse(event.target.value);
        }}
      ></input>
      <br></br>
      <label>Images URL's:</label>
      <br></br>
      <input
        type="text"
        onChange={(event) => {
          setImages(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        onChange={(event) => {
          setImages2(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        onChange={(event) => {
          setImages3(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        onChange={(event) => {
          setImages4(event.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        onChange={(event) => {
          setImages5(event.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          const imagesArray = [images, images2, images3, images4, images5];
          props.handleAddMovie(
            title,
            year,
            rated,
            released,
            runtime,
            genre,
            director,
            writer,
            actors,
            plot,
            language,
            country,
            awards,
            poster,
            imdbRating,
            imdbVotes,
            imdbID,
            type,
            response,
            imagesArray,
            metaScore
          );
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default MovieFormPage;
