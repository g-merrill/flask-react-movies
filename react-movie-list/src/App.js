import React, { useEffect, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { MovieForm } from './components/MovieForm';
import { Container } from 'semantic-ui-react';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies').then(res => 
      res.json().then(data => {
        setMovies(data.movies)
      })
    );
  }, [])
  return (
    <Container 
      style={{ marginTop: 40 }}
    >
      <MovieForm 
        onNewMovie={movie => setMovies(currentMovies => [movie, ...currentMovies])} />
      <Movies 
        movies={ movies }
      />
    </Container>
  );
}

export default App;
