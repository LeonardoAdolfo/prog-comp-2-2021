let sistemaVendas = ()=>{
    let opcao
    let vetVendedores = []
    let vetVendas = []
   do{
     opcao = Number(prompt((`Informe:\n1. Cadastrar Vendedor \n 2. Cadastrar Vendas \n 3. Sair`))) 
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
        case 3: alert(`O Programa sera encerrado !!!`)
            break
        default: alert(`Opção Invalida !!`)
    }
   }
   while(opcao!=3)
}