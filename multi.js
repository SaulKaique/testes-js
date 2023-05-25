const url = 'https://api.giphy.com/v1/gifs/search';

let busqueda = '?q=';

const key = '&api_key=80dSEX3A138U9jkOS9KxafX50StgjIkp';
const limite = "&limit=90";

let q = "";

let urlcompleta = "";

urlcompleta = url + busqueda + q + key + limite;

const btn = document.getElementById('btn');


btn.onclick = () => {
        q =  document.getElementById('buscar').value;

        urlcompleta = url + busqueda + q +  key +limite;
     getdata(); 



}



const getdata = async () => {

       await fetch(urlcompleta).
       then((response) => {

        return response.json();

       }).
       then((giphy) => {

        console.log(giphy)

      




      

 
for (const i = 0; i < giphy.data.length; i ) {
       
       
        const gif = document.createElement('img');
        
       gif.src = giphy.data[i].images['original'].url;
        gif.className = "mb-3";
        document.getElementById("portfolio").appendChild(gif);
       
      }

})
}  
      

      


