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

////////////////////////////////////////////////////////////////////////////////////

  let login = prompt('Informe o Login desejado')
  let somaPost
  let achou = false
  for (let i = 0; i <5; i++) {
    if (login==usuarios[i].login) {
      somaPost += usuarios[i].qtdPost
      achou = true
    } 
  }
  if (achou ) {
    alert(`O usuario com login ${login} realizou ${somaPost} posts`)
  }
  else{
    alert(`Ususario não existe !!!`)
  }
//////////////////////////////////////////////////////////////////////////////////
  let userPost = []

  for (let i = 0; i < 5; i++) {
    let achou = false
    for (let j = 0; j < userPost.length; j++) {
      if(usuarios[i].login == userPost[i].login){
        userPost[j].post += usuarios[j].qtdPost
        achou = true
      }
    }
    if (!achou) {
      userPost.push({
        login: usuarios[i].login,
        post: usuarios[i].qtdPost
      })
    }
  }
};
