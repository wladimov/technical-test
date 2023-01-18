import React, { useEffect, useState } from 'react';

export const App = () => {


  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    dataApi()
  }, [])

  const dataApi = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/')
    const personajes = await data.json()
    console.log(personajes);
    setPersonajes(personajes.results)
  }

  return (
    <div className='content'>
        {
          personajes.map(item => (
            <article className='container'>
              <h2 className='name'>{item.name}</h2>
              <img src={item.image} />
              <marquee className='episode'>Episodios:{item.episode}</marquee>
              <h3 id={item.status} className='status'>Estado: {item.status}</h3>
              <h3 className='species'>Especie: {item.species}</h3>
              <h3 className='gender'>Género{item.gender}</h3>
            </article>
          ))
        }
    </div>
);
}

export default App;