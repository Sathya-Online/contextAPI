import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import { useState } from 'react';
import Child1 from './components/child1';
import { Context } from './Context';

function App() {

  const [movieList, setMovieList] = useState([
    {
      title: "Kalki",
      description: "Sci-Fic movie which takes you to different world."
    },
    {
      title: "Devara",
      description: "Jr.NTR latest movie"
    },
    {
      title: "RRR",
      description: "Oscar winning movie."
    },
    {
      title: "KGF",
      description: "Yash's latest movie."
    },
    {
      title: "BadCop",
      description: "Action thriller web series."
    }
  ]);

  const [message, setMessage] = useState("I'm from App")

  return (
    <div className="App">
      
    <Context.Provider value={{message, setMessage, movieList}}>

      <Header />
      <hr></hr>
      <div className="movie-list row">
        {movieList.map(
          (movie, index) => <Movie key={index} title={movie.title} description={movie.description}/>
        )}
      </div>
      <hr></hr>
        <Child1/>
      <hr></hr>
      <Footer />

      </Context.Provider>

    </div>
  );
}

export default App;
