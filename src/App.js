import React, { Component } from 'react';
import './App.css';

import { Tabela } from './tabela';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removerAutorByIndex = (indexToRemove) => {
    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, index) => index !== indexToRemove)
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} removeOneAutor={this.removerAutorByIndex} />
      </div>
    );
  }
}

export default App;
