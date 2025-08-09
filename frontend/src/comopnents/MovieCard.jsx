import React from 'react'

function MovieCard({movie}) {
  return (
    <div>
        <div className="moviecard">
            <div className="movieposter">
                <img src={movie.url} alt={movie.title} className='h-40 w-30' />
                <button onClick={()=>{ alert("yes it's clicked ")}}> &hearts; </button>
            </div>
            <div className="movieinfo">
                <h3>{movie.title}</h3>
                <p>{movie.release}</p>
            </div>
        </div>
    </div>
  )
}

export default MovieCard