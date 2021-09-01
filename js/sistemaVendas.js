let sistemaVendas = ()=>{
    let opcao
    let vetVendedores = []
    let vetVendas = []
   do{
     opcao = Number(prompt((`Informe:\n1. Cadastrar Vendedor \n 2. Cadastrar Vendas \n 3. Ver valor de venda \n 4. Sair`))) 
    switch(opcao){
        case 1:
            let objeto= {
                codigo: Number(prompt(`Cod. vendedor`)),
                nome: prompt(`Nome do usuario: `),
                rg: prompt(`RG`),
            }
            let achou = false 
            for (let i = 0; i < vetVendedores.length; i++) {
                if (vetVendedores[i].codigo == objeto.codigo ) {
                    achou = true
                }
                if (!achou) {
                    vetVendedores.push(objeto)
                }
            }
            console.log(vetVendedores)
            break
        case 2:
            
            let objeto1 = {
                codigo: Number(prompt(`Informe codigo do vendedor!!`)),
                mes: Number(prompt(`Informe o mes da venda !!`)),
                valor: Number(prompt(`Informe o valor da venda!!!`))
            }
            let achou1 = false
            for (let i = 0; i < vetVendas.length; i++) {
                if ((vetVendas[i].mes==objeto1.codigo) && (vetVendas[i].mes==objeto1.mes)) {
                    achou = true 
                }
                if (!achou1) {
                    vetVendas.push(objeto1)
                } else {
                    alert(`Funcionario ja foi registrado`)
                }
            }
            console.log(vetVendas)
            break
        case 3: let codigo = Number(prompt(`Informe o codigo do vendedor !!`))
        case 3: let mes = Number(prompt(`Informe o mes da venda !!`))
        let achou3 = false 
                 for (let i = 0; i < vetVendas.length; i++) {
                     if ((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)) {
                         console.log(`O valor de vendas do funcionario ${codigo} do mes ${mes} foi ${vetVendas[i].valor}`)
                         achou3= true
                     }
                 }
                 if(!achou3){
                     console.log(`NÃO ACHOU A VENDA`)
                 }
            break
        case 4: alert(`Programa encerrado`)
            let codigo4 = Number(prompt(`Informe o codigo do vendedor`))
            let soma = 0
            let achou4 = false 
            for (let i = 0; i < vetVendas.length; i++) {
                if (vetVendas[i].codigo == codigo4) {
                    soma += vetVendas[i].valor
                    achou4 =  true 
                }
            }
            if (!achou4) {
                console.log(`Venda não encontrada para este funcionario`)
            }
            else{
                console.log(`O total de vendas do vendedor ${codigo4} foi ${soma}`)
            }

            break
            case 5: alert(`Programa encerrado`)
            break
        default: alert(`Opção Invalida !!`)
    }
   }
   while(opcao!=4)
}