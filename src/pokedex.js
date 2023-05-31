// import React from 'react';
import Pokecard from "./pokecard";
import './Pokedex.css';
const Pokedex= (props)=>{
    let title;
    if(props.isWinner){
        title=<h1 className="Pokedex-winner"> 
        You Won !</h1>}
    else{
        title=<h1 className="Pokedex-loser">You Lose </h1>   }

    return (
        <div className="Pokedex">
            <div className="Pokedex-score">
           {title}
            <p className="Pokedex-experience">Total Experience: {props.exp}</p>
          </div>
            <div className="Pokedex-cards">{props.pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            
            ))}</div>


        </div>
    );
          

};

export default Pokedex;