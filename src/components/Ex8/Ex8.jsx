import React, { useEffect, useState } from 'react'
import './ex8.css'

const Ex8 = () => {
  const [pokemons, setPokemons] = useState();
  const url = "https://random-data-api.com/api/users/random_user?size=8";
  const fetchAPI = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setPokemons(responseJSON);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="ex8">
      <div className="lista">
        { !pokemons ? <div className="spinner"></div> : pokemons.map((pokemon) => {
              return (
                <div className="items" key={pokemon.id}>
                  <h1>{pokemon.first_name}</h1>
                  <img src={pokemon.avatar} alt="" />
                  <h4>Date of birth: {pokemon.date_of_birth}</h4>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Ex8