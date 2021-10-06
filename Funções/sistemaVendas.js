let sistemaVendas = () => {
  let opcao
  let vetVendedores = []
  let vetVendas = []
  let codigo
  let mes
  
  do {
    opcao = Number(
      prompt(
        `Informe:\n1. Cadastrar Vendedor \n 2. Cadastrar Vendas \n 3. Ver valor de venda \n 4. Sair`
      )
    );
    switch (opcao) {
      case 1:
        cadastrarVendedor(vetVendedores)
        
        break;
        case 2:
          cadastraVendas(vetVendas)
        
          break
      case 3:
        codigo = Number(prompt(`Informe o código do vendedor`))
                    mes = Number(prompt(`Informe o mês da venda`))
                    consultaVendasCodigoMes(vetVendas, codigo, mes)
        break;
      case 4:
        let codigo = Number(prompt(`Informe o codigo do vendedor`));
       consultaVendasCodigos(vetVendas, codigo)
       break
       case 5:
      let mes = Number(prompt(`Informe o mes de interesse `));
      consultaVendedor(vetVendas, mes)
        break;
      case 6:
        consultaVendaMeses(vetVendas)
        
        break;
      case 7:
        alert(`O programa será encerrado`);
        break;
      default:
        alert(`Opção Invalida !!`);
    }
  } while (opcao != 7);
  let cadastrarVendedor = (vetVendedores)=>{
    let objeto = {
      codigo: Number(prompt(`Cod. vendedor`)),
      nome: prompt(`Nome do usuario: `),
      rg: prompt(`RG`),
    };
    let achou = false;
    for (let i = 0; i < vetVendedores.length; i++) {
      if (vetVendedores[i].codigo == objeto.codigo) {
        achou = true;
      }
      if (!achou) {
        vetVendedores.push(objeto);
      }
    }
    console.log(vetVendedores);
    break;
 
  }
  let cadastraVendas = (vetVendas) => {
    let objeto1 = {
      codigo: Number(prompt(`Informe codigo do vendedor!!`)),
      mes: Number(prompt(`Informe o mes da venda !!`)),
      valor: Number(prompt(`Informe o valor da venda!!!`)),
    };
    let achou1 = false;
    for (let i = 0; i < vetVendas.length; i++) {
      if (
        vetVendas[i].mes == objeto1.codigo &&
        vetVendas[i].mes == objeto1.mes
      ) {
        achou = true;
      }
      if (!achou1) {
        vetVendas.push(objeto1);
      } else {
        alert(`Funcionario ja foi registrado`);
      }
    }
    console.log(vetVendas);
  }
  let consultaVendasCodigoMes = (vetVendas, codigo, mes)=>{
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
            console.log(`O valor da venda do funcionário ${codigo} no mês ${mes} foi ${vetVendas[i].valor}`)
            achou = true
        }
    }
    if (!achou){
        console.log(`Venda não encontrada para este funcionário neste mês`)
    }
  }
  let  consultaVendasCodigos= (vetVendas, codigo)=>{
    let soma = 0;
    let achou4 = false;
    for (let i = 0; i < vetVendas.length; i++) {
      if (vetVendas[i].codigo == codigo) {
        soma += vetVendas[i].valor;
        achou4 = true;
      }
    }
    if (!achou4) {
      console.log(`Venda não encontrada para este funcionario`);
    } else {
      console.log(`O total de vendas do vendedor ${codigo} foi ${soma}`);
    }
  }
  let consultaVendedor = (vetVendas, mes) =>{
    let maiorValor = 0;
    let vendedorMaisVendeu = 0;
    for (let i = 0; i < vetVendas.length; i++) {
      if (vetVendas[i].mes == mes) {
        if (vetVendas[i].valor > maiorValor) {
          maiorValor = vetVendas[i].valor;
          vendedorMaisVendeu = vetVendas[i].codigo;
        }
      }
    }
    console.log(
      `O ${vendedorMaisVendeu} foi o que mais vendeu, e ele vendeu ${maiorValor}`
    );
  }
  let consultaVendaMeses = (vetVendas) => {
    let vetMeses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // percorre o vetor de vendas
        for (let i = 0; i < vetVendas.length; i++) {
          let aux = vetVendas[i].mes; // mês da venda
          vetMeses[aux - 1] = vetMeses[aux - 1] + vetVendas[i].valor;
        }
        console.log(vetMeses);
      
  }
};
