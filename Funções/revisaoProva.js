let sistemaImobiliaria = () => {
  let opcao;
  let vetImoveis = [];
  do {
    opcao = Number(
      prompt(
        "Informe \n 1. Cadastra  \n2. Consulta A  \n3. Consulta B \n 4. Consulta C \n5. Sair"
      )
    );
    switch (opcao) {
      case 1:
        cadastraImovel(vetImoveis);
        break;
      case 2:
        let tipo = prompt(
          'Qual tipo de imóvel "C" para casa e "A" para apartamento'
        ).toUpperCase();
        consultaImoveis(vetImoveis, tipo);
        break;
      case 3:
        consultaValorTotal(vetImoveis);
        break;
      case 4:
        consultaImoveisGrandes(vetImoveis);
        break;
      case 5:
        alert("Programa Finalizou !!!");
        break;
      default:
        alert("Numero errado, tente novamente");
        break;
    }
  } while (opcao != 5);
};
let cadastraImovel = (vetImoveis) => {
  let objeto = {
    codigo: Number(prompt("Qual o código do imóvel: ")),
    tamanho: Number(prompt("Qual o tamanho do imóvel: ")),
    tipo: prompt('Para casa digite "C" e para apartamento "A": ').toUpperCase(),
    valor: Number(prompt("Qual o valor do imóvel")),
  };
  let achou = false;
  for (let i = 0; i < vetImoveis.length; i++) {
    if (vetImoveis[i].codigo == objeto.codigo) {
      achou = true;
      alert("Codigo Existente");
    }
  }
  if (!achou) {
    vetImoveis.push(objeto);
    alert("Imovel registado com sucesso");
  }
};
let consultaImoveis = (vetImoveis, tipo) => {
  for (let i = 0; i < vetImoveis.length; i++) {
    if (vetImoveis[i].tipo == tipo) {
      console.log(vetImoveis[i]);
    }
  }
};
let soma = 0;
let consultaValorTotal = (vetImoveis) => {
  for (let i = 0; vetImoveis.length; i++) {
    soma += vetImoveis.valor;
  }
  console.log(soma);
};
let consultaImoveisGrandes = (vetImoveis) => {
  for (let i = 0; i < vetImoveis.length; i++) {
    if (vetImoveis[i].tamanho >= 100) {
      console.log(vetImoveis[i]);
    }
  }
};
