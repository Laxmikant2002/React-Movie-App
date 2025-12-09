import { useState } from 'react';
import { movies, genres } from './data/movies';
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter';
import './App.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredMovies = selectedGenre ? movies.filter(m => m.genre === selectedGenre) : movies;

  const allGenres = ['All', ...genres];

  const handleSelectGenre = (genre: string) => {
    setSelectedGenre(genre === 'All' ? null : genre);
  };

  return (
    <div className="app-container">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter 
        genres={allGenres} 
        onSelectGenre={handleSelectGenre} 
        selectedGenre={selectedGenre}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;