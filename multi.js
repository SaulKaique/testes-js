const url = 'https://api.giphy.com/v1/gifs/search';

let busqueda = '?q';

const key = '&api_key=yL1ol1BWPzoaHR2Oc6XIpUpqDqY3aceD';
const limite = "&limit=40";

let q = "cat";

let urlcompleta = "";
const btn = document.getElementById('btn');

btn.onclick = () => {
        q =  document.getElementById('buscar').value;

        urlcompleta = url + busqueda + q +  key +limite;
    console.log( getdata()) ; 

}

urlcompleta = url + busqueda + q + key +limite ;

const getdata = async () => {
        await fetch(urlcompleta)
        .then((response) => {
     return response.json();
  })
        .then((giphy) => {
 console.log(giphy);

       

      for (let i = 0; i < giphy.data.length; i++) {
        const gif = document.createElement('img');
        
        gif.src = giphy.data(i).images["original"].url;
        gif.className = "mb-3";
        document.getElementById("portfolio").appendChild(gif);
}

})

}



//"https://media4.giphy.com/media/LPob0bRfqNrFb8Ejrx/giphy.gif?cid=471d4f5cb5l1ushlycp0tdhz9j7x2qn91dvqcotpbeh5xy04&ep=v1_gifs_trending&rid=giphy.gif&ct=g"