import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/MovieContext'

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useContext(MovieContext);
  const favorite = isFavorite(movie.id);
  const [showModal, setShowModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering modal
    e.preventDefault();
    toggleFavorite(movie);
  };

  const handlePosterClick = async () => {
    setShowModal(true);
    if (!movieDetails) {
      setLoading(true);
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${movie.id}&apikey=c910a6c7`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Failed to fetch movie details", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
    <div className='flex justify-center'>
      <div className="rounded-xl overflow-hidden shadow-lg m-4 bg-gray-800 transition-transform hover:scale-105 duration-300 w-64 md:w-full cursor-pointer relative" onClick={handlePosterClick}>
        <div className="relative group">
          <img src={movie.url} alt={movie.title} className='w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-75' />
          <button onClick={handleFavoriteClick} className={`absolute top-2 right-2 text-4xl hover:scale-110 transition-transform z-10 ${favorite ? 'text-red-500' : 'text-white/50 hover:text-red-400'}`}>
            {favorite ? '♥' : '♡'}
          </button>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-400 text-base">
            Release in {movie.release}
          </p>
        </div>
      </div>
    </div>

    {showModal && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={() => setShowModal(false)}>
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col md:flex-row relative animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl z-10 bg-gray-800 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center" onClick={() => setShowModal(false)}>&times;</button>
          
          {loading ? (
            <div className="p-20 flex justify-center w-full text-white text-xl">Loading details...</div>
          ) : movieDetails ? (
            <>
              <div className="md:w-5/12 h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-gray-700">
                <img src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'} alt={movieDetails.Title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-7/12 text-white flex flex-col justify-center bg-gradient-to-br from-gray-800 to-gray-900 overflow-y-auto max-h-[80vh]">
                <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{movieDetails.Title}</h2>
                <div className="text-gray-300 mb-6 flex flex-wrap gap-2 text-sm">
                  <span className="bg-gray-700 px-3 py-1 rounded-full">{movieDetails.Year}</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full">{movieDetails.Runtime}</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full">{movieDetails.Genre}</span>
                  <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 px-3 py-1 rounded-full flex items-center gap-1">⭐ {movieDetails.imdbRating}</span>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                  "{movieDetails.Plot}"
                </p>
                <div className="text-gray-300 grid grid-cols-1 gap-3 space-y-2">
                  <div className="flex flex-col"><strong className="text-gray-400 text-xs uppercase tracking-wider">Director</strong> {movieDetails.Director}</div>
                  <div className="flex flex-col"><strong className="text-gray-400 text-xs uppercase tracking-wider">Actors</strong> {movieDetails.Actors}</div>
                  <div className="flex flex-col"><strong className="text-gray-400 text-xs uppercase tracking-wider">Writer</strong> {movieDetails.Writer}</div>
                  <div className="flex flex-col"><strong className="text-gray-400 text-xs uppercase tracking-wider">Language</strong> {movieDetails.Language}</div>
                  <div className="flex flex-col mt-4 pt-4 border-t border-gray-700">
                    <a href={`https://www.imdb.com/title/${movieDetails.imdbID}/`} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded w-max transition-colors">
                      View on IMDb
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="p-20 flex justify-center w-full text-white">Could not load details.</div>
          )}
        </div>
      </div>
    )}
    </>
  )
}

export default MovieCard
