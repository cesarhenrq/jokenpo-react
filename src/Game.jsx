import React from 'react';
import Choose from './Choose.jsx';
import './Game.css';

const Game = ({result, userChoice, machineChoice, changePage}) => {
  return(
    <section className="game-container">
      <h1 className="game-result">
        {result}
      </h1>
      <div className="game-choices-container">
        <figure>
          <img 
            src={`${userChoice}.png`}
            alt={userChoice}
          />
        </figure>
        X
        <figure>
          <img
            src={`${machineChoice}.png`}
            alt={machineChoice}
          />
        </figure>   
      </div>
      <Choose/>
        <div className="play-again-container">
          <h1>Jogar novamente?</h1>
          <div className="buttons-container">
            <button
              onClick={() =>
                changePage('home')
              }>
              Sim
            </button>
            <button 
              onClick={() =>
                changePage('end')
              }>
              Não
            </button>
          </div>
        </div>
    </section>
  );
};

export default Game;
