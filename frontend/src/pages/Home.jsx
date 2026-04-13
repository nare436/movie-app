import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'

function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("avengers"); // Default query

    useEffect(() => {
        const fetchMovies = async () => {
            if (query.trim() === '') return;
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=c910a6c7`);
                const data = await response.json();
                if (data.Search) {
                    const fetchedMovies = data.Search.map(m => ({
                        id: m.imdbID,
                        title: m.Title,
                        release: m.Year,
                        url: m.Poster !== "N/A" ? m.Poster : 'https://via.placeholder.com/300x450?text=No+Poster',
                        go: `https://www.imdb.com/title/${m.imdbID}/`
                    }));
                    setMovies(fetchedMovies);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error("Failed to fetch movies:", error);
                setMovies([]);
            }
        };
        fetchMovies();
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="flex flex-col items-center min-h-screen pt-10 px-4 pb-20">
            <div className='w-full max-w-2xl mb-12 flex justify-center sticky top-20 z-10'>
                <form onSubmit={handleSearch} className="w-full flex shadow-lg rounded-full">
                    <input 
                        type="text" 
                        placeholder='Search for a movie...' 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)} 
                        className='w-full border border-r-0 border-gray-600 bg-gray-800 text-white rounded-l-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg' 
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-r-full font-bold transition-all focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Search
                    </button>
                </form>
            </div>
            {movies.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl">
                    {movies.map(movie =>
                        <MovieCard movie={movie} key={movie.id} />
                    )}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
                    <p className="text-xl">No movies found matching "{query}"</p>
                </div>
            )}
        </div>
    )
}

export default Home;