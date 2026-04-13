import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem('favorites');
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => fav.id === movie.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some(fav => fav.id === movieId);
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </MovieContext.Provider>
  );
};
