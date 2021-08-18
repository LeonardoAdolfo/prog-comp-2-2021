let gerenciamentoRedes = () => {
  let redes = [];

  for (let i = 0; i < 5; i++) {
    let redeSocial = {
      codigo: Number(prompt(`De cod da rede social: `)),
      nome: prompt(`Agora de o nome da sua rede `),
      link: prompt(`Link para a rede social`),
    };
    redes.push(redeSocial);
  }

  let usuarios = [];

  for (let i = 0; i < 5; i++) {
    let infoUser = {
      login: prompt(`Digite seu login: `),
      nome: prompt(`Agora digite seu nome: `),
      codRede: Number(prompt(`Qual o codigo da rede `)),
      qtdPost: Number(prompt(`Qual a quantidade de post do usuarios`)),
    };
    let achou = false;
    let j = 0;

    while (!achou && j < 5) {
      if (infoUser.codRede == redes[j].codigo) {
        usuarios.push(infoUser);
        achou = true;
      }
      j++;
    }
    if (!achou) {
      alert(`Meu caro você fez merda... digite denovo!!!`);
    }
  }

  let codigoRede = Number(prompt("De o codigo da rede social"));

  let conta = 0;
  for (let i = 0; i < 5; i++) {
    if (usuarios[i].codRede == codigo) {
      conta += usuarios[i].qtdPost;
    }
  }
  if (conta == 0) {
    console.log("Não houve postagem ou rede social não existe");
  } else {
    console.log(`Houveram ${conata} votos na rede social ${codigo}`);
  }

  for (let i = 0; i < 5; i++) {
    let conta = 0;
    for (let j = 0; j < 5; j++) {
      if (redes[i].codigo == usuarios[i].codRede) {
        conta += usuarios[i].qtdPost;
      }
    }
    console.log(
      `A quantidades de posts na rede social ${redes[i].nome} é ${conta}`
    );
  }

  
}
