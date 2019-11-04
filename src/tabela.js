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
  const tbody = props.autores.map((autor, index) => {
    return (
      <tr key={index}>
        <td>{autor.nome}</td>
        <td>{autor.livro}</td>
        <td>{autor.preco}</td>
        <td><button onClick={() => props.removerAutor(index)}>Remove</button></td>
      </tr>
    )
  });

  return (
    <tbody>
      {tbody}
    </tbody>
  );
}

export class Tabela extends Component {

  render() {
    const { autores, removeOneAutor } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody autores={autores} removerAutor={removeOneAutor} />
      </table>
    );
  }
}
