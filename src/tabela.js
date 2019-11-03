import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autor</th>
        <th>Livro</th>
        <th>Preço</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const tbody = props.autores.map((autor) => {
    return (
      <tr>
        <td>{ autor.nome }</td>
        <td>{ autor.livro }</td>
        <td>{ autor.preco }</td>
        <td><button>Remove</button></td>
      </tr>
    )
  });

  return (
    <tbody>
      { tbody }
    </tbody>
  );
}

export class Tabela extends Component {
  
  render() {
    const { autores } = this.props;

    return(
      <table>
        <TableHead />
        <TableBody autores = { autores } />
      </table>
    );
  }
}
