const exiberinfou = (usuario) => {
    console.log(`O usuario ${usuario.login} possui ${usuario.followers} seguidores`)


}






const iniciar = () => {
    console.log('antes da api')
    fetch("https://api.github.com/users/SaulKaique")
    .then((Response) => Response.json())
    .then((result) => exiberinfou(result))
    .then(() => console.log('depois da api'));
    


};

document.addEventListener('DOMContentLoaded' , iniciar);