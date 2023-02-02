import './Choose.css';
import React from 'react';

const Choose = ({changePage, playJokenpo}) => {
  return (
    <div className="choose-container">
      <figure 
        onClick={() => {
          changePage('game')
          playJokenpo('rock')
        }}
        className="choose-image-container">
        <img 
          src="./rock.png"
          alt="Pedra"
          className="choose-image"/>
      </figure>

      <figure
        onClick={() => {
          changePage('game')
          playJokenpo('scissor')
        }}
        className="choose-image-container">
        <img 
          src="./scissor.png" 
          alt="Tesoura"
          className="choose-image"/>
      </figure>

      <figure
       onClick={() => {
          changePage('game')
          playJokenpo('paper')
        }}
       className="choose-image-container">
        <img 
          src="./paper.png" 
          alt="Paper"
          className="choose-image"/>
      </figure>
    </div>
  );
};

export default Choose;