function quetao2(){

    let jogador = []
    let pontuacao = []
    for(let i=0; i<12;i++){
        jogador.push(prompt(`Nome do jogador`))
        pontuacao.push(Number(prompt(`Pontuação do jogador ${jogardor[i]} `)))
    }

    let soma = 0
    for(let i=0; i<12;i++){
        soma = soma + pontuacao[i]
    }

    alert(`A media de pontuação do time é ${soma/12}`)

    let maior = 0 
    let nome = ''
    for(let i=0; i<12;i++){
       if(pontuacao[i] > maior){
        maior = pontuacao[i]
        nome = jogador[i]
       }
    }

    console.log(`O cestinha é ${nome} com ${maior} pontos`)

    let par = []
    for (let i = 0; i < 12; i++) {
        if ((pontuacao[i]%2)==0) {
            par.push(jogador[i])
        }
    }
    alert(par)
    

    
}
let questao1 = () => {
    let wpp = 0
    let email = 0
    let papel = 0
    let tf = 0
    let ava = 0

    let opcao 
    do{
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao){
            case 1: ava++
                    break
            case 2: papel++
                    break
            case 3: wpp++
                    break
            case 4: email++
                    break
            case 5: tf++
                    break
            default: alert(`Opção Invalida`)
        }
    }
    while(opcao != 0)

    console.log(`AVA - ${ava} Papel - ${papel} WhatsApp - ${wpp} E-mail ${email} Tanto Faz - ${tf}`)

    console.log(`${tf/(ava+papel+wpp+email+tf)*100}`)

    let troca
    for (let i = 0; i < 4; i++) {
        if (ava>papel ) {
            troca = ava; ava = papel; papel = troca
        }
        if (papel>wpp ) {
            troca = papel; papel = wpp; wpp = troca
        }
        if (wpp>email ) {
            troca = wpp; wpp = email; email = troca
        }
        if (email>tf ) {
            troca = email; email = tf; tf = troca
        }
    }
    console,log(`${tf} ${email} ${wpp} ${papel} ${ava}`)
        
}
    
