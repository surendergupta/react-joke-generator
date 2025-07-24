import React from 'react'

import './Jokes.css'

const Jokes = () => {
    const [joke, setJoke] = React.useState('');
    const fetchJoke = async () => {
        await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));   
    }
  return (
    <div className='jokes'>
      <button className='joke-button' onClick={fetchJoke}>Get a Joke</button>
      {joke && (
      <div className='joke-display'>
        <p className='joke-text'>{joke}</p>
      </div>
      )}
    </div>
  )
}

export default Jokes
