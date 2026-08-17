/*import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App; */

// Movie Watchlist

/*import{ useState }from"react";

function App() {
  const [movie, setMovie] =useState("");
  const [rating, setRating] =useState("");
  const [movies, setMovies] =useState([]);
  const addMovie= () => {
    if (movie.trim() ===""|| rating ==="") {
      alert("Please enter movie name and rating");
      return;
    }
    const newMovie= {
      id:Date.now(),
      name: movie,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setMovie("");
    setRating("");
  };
  const removeMovie= (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
  return (
    <div>
      <h1>Movie Watchlist</h1>
      <input
        type="text"
        placeholder="Enter movie name"
        value={movie}
        onChange={(e) =>setMovie(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={rating}
        onChange={(e) =>setRating(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
      <h2>Watchlist</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.name}</h3>
          <p>Rating: {movie.rating}/5</p>
          <button onClick={() =>removeMovie(movie.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default App; */

// react.memo

import{ useState }from"react";
import Student from"./Student";

function App() {
  const [count, setCount] =useState(0);
  console.log("App rendered");
  return (
    <div>
      <h1>React.memo Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() =>setCount(count+1)}>
        Increase
      </button>
      <Student name="Raj Mehta"/>
    </div>
  );
}
export default App;


