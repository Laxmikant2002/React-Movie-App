import React from 'react';

interface Movie {
    title: string;
    genre: string;
    year: number;
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <table className="movie-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, index) => (
                    <tr key={index}>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.year}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MovieList;