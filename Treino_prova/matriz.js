teste_prova = () => {
  let mat = [];
  let carro = [];
  for (let i = 0; i < 4; i++) {
    mat[i] = [];
  }
  do {
    let opcao = Number(prompt("1.Cadastra Carro \n2.Cadastra Vendas 3. Sair"));
    switch (opcao) {
      case 1:
        cadastra_marca(carro);
        break;
      case 2:
        cadatra_venda(carro, mat);
        break;
      case 3:
        break;
      default:
        alert("Numero Invalido");
        break;
    }
  } while (opcao != 3);
};

let cadastra_marca = (carro) => {
  let objeto = {
    marca: prompt("Qual a marca do carro"),
    modelo: prompt("Qual a modelo do carro"),
  };
  carro.push(objeto);
};

let cadatra_venda = (carro, mat) => {};
