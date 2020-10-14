import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { MovieArea } from '@/styles/components/MovieRow';

interface Show {
  backdrop_path?: string;
  id?: number;
  budget?: number;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  imdbRating?: string;
  metascore?: string;
}

interface HomeProps {
  shows: Show[];
}

const MovieRow: React.FC<HomeProps> = ({ shows }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleListLeft = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleListRight = () => {
    const listWidth = shows.length * 250;
    let x = scrollX - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 64;
    }
    setScrollX(x);
  };
  return (
    <MovieArea>
      <button type="button" className="movie-left" onClick={handleListLeft}>
        <FiChevronLeft size={32} color="#e5e5e5" />
      </button>
      <button type="button" className="movie-right" onClick={handleListRight}>
        <FiChevronRight size={32} color="#e5e5e5" />
      </button>
      <div
        className="movie-row"
        style={{
          marginLeft: scrollX,
          width: shows.length * 250,
        }}
      >
        {shows.map((show) => (
          <div key={show.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
              alt={show.title}
            />
          </div>
        ))}
      </div>
    </MovieArea>
  );
};

export default MovieRow;
