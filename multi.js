const exiberinfou = (usuario) => {
    console.log(`O usuario ${usuario.login} possui ${usuario.followers} seguidores`)


}






  

const iniciar = async() => {

const Response =  await fetch('https://api.github.com/users/SaulKaique')
console.log(Response);

};


    //api para gf



//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5//

//S46sECcA2NRLPHKpBJTG2lHDG4Izxb38
//http://api.giphy.com/v1/gifs/search gif


//    console.log('antes da api')
//    fetch("https://api.github.com/users/SaulKaique")
//    .then((Response) => Response.json())
//    .then((result) => exiberinfou(result))
//    .then(() => console.log('depois da api'));
//    
//
//
//};

document.addEventListener('DOMContentLoaded' , iniciar);