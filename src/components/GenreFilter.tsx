import React from 'react';

interface GenreFilterProps {
    genres: string[];
    onSelectGenre: (genre: string) => void;
    selectedGenre: string | null;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, onSelectGenre, selectedGenre }) => {
    return (
        <div className="filter-container">
            <h3>Filter by Genre</h3>
            <div className="genre-buttons">
                {genres.map(genre => (
                    <button 
                        key={genre} 
                        className={`genre-button ${(genre === 'All' && selectedGenre === null) || (genre === selectedGenre) ? 'active' : ''}`}
                        onClick={() => { 
                            console.log('Selected genre:', genre); 
                            onSelectGenre(genre);
                        }}
                    >
                        {genre}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GenreFilter;