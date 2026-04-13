import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import { MovieContext } from '../context/MovieContext'

function Fav() {
  const { favorites } = useContext(MovieContext);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h3 className="text-2xl font-bold mb-2">No Favorite Movies yet</h3>
        <p className="text-gray-400">Start adding favorite movies by clicking the heart icon!</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Fav