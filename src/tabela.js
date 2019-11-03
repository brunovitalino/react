import React, { Component } from 'react';

export class Tabela extends Component {

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Livro</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bruno</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <td>Diego</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remove</button></td>
          </tr>
          <tr>
            <td>João</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remove</button></td>
          </tr>
        </tbody>
      </table>
    );
  }

}
