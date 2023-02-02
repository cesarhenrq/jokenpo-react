import React from 'react'
import './App.css';
import Choose from './Choose.jsx';
import Game from './Game.jsx';
  
class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      page: 'home',
      userChoice: '',
      machineChoice: '',
      result: ''
    };
    
    this.changePage = this.changePage.bind(this);
    
    this.playJokenpo = this.playJokenpo.bind(this);

    this.calculateResult = this.calculateResult.bind(this);

  };

  changePage(page) {
    this.setState({
      page: page
    });
  };

  playJokenpo(userChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    
    this.setState({
      userChoice: userChoice,
      machineChoice: choices[this.randomIndex()]
    }, this.calculateResult);
  };

  randomIndex() {
    return Math.floor(Math.random() * 3);
  }

  calculateResult() {
    const userWin = (this.state.userChoice === 'rock' && this.state.machineChoice === 'scissor') || (this.state.userChoice === 'scissor' && this.state.machineChoice === 'paper') || (this.state.userChoice === 'paper' && this.state.machineChoice === 'rock');
      
    if(this.state.userChoice === this.state.machineChoice) {  
      this.setState({    
        result: 'O jogo foi um empate!'
      })
    } else if (userWin) {
      this.setState({    
        result: 'Você venceu!'
      });
    } else {
      this.setState({    
        result: 'O computador venceu!'
      });
    }
  }

  render() {
    if(this.state.page === 'home') {
      return (
        <main>
          <div>
            <h1 className="main-page-title">
              Escolha uma opção
            </h1>
            <Choose
              changePage={this.changePage}
              playJokenpo={this.playJokenpo}
            />
          </div>
        </main>
      )};
    
    if(this.state.page === 'game') {
      return (
        <main>
          <Game
            result={this.state.result}
            userChoice={this.state.userChoice}
            machineChoice={this.state.machineChoice}
            changePage={this.changePage}
            />
        </main>
      )};
    
    return (
        <main className="main-end-page">
          <h1 className="end-page-title">Obrigado por jogar!</h1>
        </main>
      );
  };
};

export default App;