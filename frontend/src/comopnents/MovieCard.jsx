import React from 'react'

function MovieCard({ movie }) {
  return (
    <div className='inline-flex'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
        {/* <div className=""> */}
          <img src={movie.url} alt={movie.title} className='w-full object-cover transition duration-200 ease-in hover:brightness-30' />
          <button onClick={() => { alert("yes it's clicked ") }} className='right-0 top-0'> &hearts; </button>
        {/* </div> */}
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{movie.title}</div>
    <p class="text-white-700 text-base">
      Release in {movie.release}
    </p>
  </div>
      </div>
    </div>
  )
}

export default MovieCard
