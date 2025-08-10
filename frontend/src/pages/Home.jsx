import React from 'react'
import { useState } from 'react'
import MovieCard from '../comopnents/MovieCard'
function Home() {
    const movies =
        [
            { id: 1, title: 'Farzi', release: '2022', url: '3.jpg' },
            { id: 2, title: 'Dhoom', release: '2004', url: '3.jpg' },
            { id: 3, title: 'Baaz', release: '2003', url: '3.jpg' },
            { id: 4, title: 'Asur', release: '2020', url: '3.jpg' },
            { id: 5, title: 'Sholay', release: '1975', url: '3.jpg' },
            { id: 6, title: 'Lagaan', release: '2001', url: '3.jpg' },
            { id: 7, title: 'Pathaan', release: '2023', url: '3.jpg' },
            { id: 8, title: 'Krrish', release: '2006', url: '3.jpg' },
            { id: 9, title: 'Gadar 2', release: '2023', url: '3.jpg' },
            { id: 10, title: 'Dilwale Dulhania Le Jayenge', release: '1995', url: '3.jpg' },
            { id: 11, title: '3 Idiots', release: '2009', url: '3.jpg' },
            { id: 12, title: 'PK', release: '2014', url: '3.jpg' },
            { id: 13, title: 'War', release: '2019', url: '3.jpg' },
            { id: 14, title: 'Dangal', release: '2016', url: '3.jpg' },
            { id: 15, title: 'Chakde! India', release: '2007', url: '3.jpg' },
            { id: 16, title: 'Kabir Singh', release: '2019', url: '3.jpg' },
            { id: 17, title: 'Bajrangi Bhaijaan', release: '2015', url: '3.jpg' },
            { id: 18, title: 'Tiger Zinda Hai', release: '2017', url: '3.jpg' },
            { id: 19, title: 'Sultan', release: '2016', url: '3.jpg' },
            { id: 20, title: 'Kick', release: '2014', url: '3.jpg' },
            { id: 21, title: 'Barfi!', release: '2012', url: '3.jpg' },
            { id: 22, title: 'Sanju', release: '2018', url: '3.jpg' },
            { id: 23, title: 'Zindagi Na Milegi Dobara', release: '2011', url: '3.jpg' },
            { id: 24, title: 'Don 2', release: '2011', url: '3.jpg' },
            { id: 25, title: 'Ra.One', release: '2011', url: '3.jpg' },
            { id: 26, title: 'Brahmastra', release: '2022', url: '3.jpg' },
            { id: 27, title: 'Jawan', release: '2023', url: '3.jpg' },
            { id: 28, title: 'Kal Ho Naa Ho', release: '2003', url: '3.jpg' },
            { id: 29, title: 'Kabhi Khushi Kabhie Gham', release: '2001', url: '3.jpg' },
            { id: 30, title: 'Mohabbatein', release: '2000', url: '3.jpg' },
            { id: 31, title: 'Veer-Zaara', release: '2004', url: '3.jpg' },
            { id: 32, title: 'Om Shanti Om', release: '2007', url: '3.jpg' },
            { id: 33, title: 'Rab Ne Bana Di Jodi', release: '2008', url: '3.jpg' },
            { id: 34, title: 'Fan', release: '2016', url: '3.jpg' },
            { id: 35, title: 'Happy New Year', release: '2014', url: '3.jpg' },
            { id: 36, title: 'Don', release: '2006', url: '3.jpg' },
            { id: 37, title: 'Zero', release: '2018', url: '3.jpg' },
            { id: 38, title: 'Dil Chahta Hai', release: '2001', url: '3.jpg' },
            { id: 39, title: 'Rock On!!', release: '2008', url: '3.jpg' },
            { id: 40, title: 'Kai Po Che!', release: '2013', url: '3.jpg' },
            { id: 41, title: 'MS Dhoni: The Untold Story', release: '2016', url: '3.jpg' },
            { id: 42, title: 'Singham', release: '2011', url: '3.jpg' },
            { id: 43, title: 'Drishyam', release: '2015', url: '3.jpg' },
            { id: 44, title: 'Bhool Bhulaiyaa', release: '2007', url: '3.jpg' },
            { id: 45, title: 'Andhadhun', release: '2018', url: '3.jpg' },
            { id: 46, title: 'Article 15', release: '2019', url: '3.jpg' },
            { id: 47, title: 'Badhaai Ho', release: '2018', url: '3.jpg' },
            { id: 48, title: 'Stree', release: '2018', url: '3.jpg' },
            { id: 49, title: 'Bhediya', release: '2022', url: '3.jpg' },
            { id: 50, title: 'Ludo', release: '2020', url: '3.jpg' }
        ]


    const [search, setSearch] = useState("")

    const SearchFun = (e) => {
        e.preventDefault();
        alert(search)
    }
    return (
        <>
            <form onSubmit={SearchFun} className='w-70 h-10 mt-10 mb-10 flex justify-center items-center min-w-screen'>
                <input type="text" placeholder='Enter the movie name' value={search} onChange={(e) => { setSearch(e.target.value) }} className='border-2 rounded-xl p-2 border-black mr-1' />
                <button>Search</button>
            </form>
            <div>
                {movies.map(movie =>
                    movie.title.toLocaleLowerCase().startsWith(search) && (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </>
    )
}

export default Home