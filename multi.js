//let caraoucoroa = () => {
//if (Math.random() > 0.5) {
     
    //return 'Coroa';
    
//}
//else {
   // return 'Cara';
    

//}


//}//

//let dados6 = () => Math.floor(Math.random() * 6) + 1 ;

//let Cracks = [
//{Nome: 'Michael Jordan', Esporte: 'Basquete'},
//{Nome: 'Pelé', Esporte:'Fultibol'},
//{Nome: 'Lebron James', Esporte: 'Basquete'},
//{Nome: 'Lancres ferreira', Esporte: 'Tenis'}
//];


//let Ferramentas = [
//    {Nome: 'Martelo', Quantidade: 300 , qualidade: '10/10' , cor: 'Pratiado', Uso: 'Manual'},
 //{Nome: 'Prego', Quantidade: 300 , qualidade: '10/10' , cor: 'Pratiado', Uso: 'Manual'},
 //{Nome: 'Furadera', Quantidade: 300 , qualidade: '10/10' , cor: 'Pratiado', Uso: 'Eletrico'},
 //{Nome: 'Maquita', Quantidade: 300 , qualidade: '9/10' , cor: 'Pratiado', Uso: 'Eletrico'},
 //{Nome: 'Cerra', Quantidade: 300 , qualidade: '9/10' , cor: 'Pratiado', Uso: 'Eletrico'},
 //{Nome: 'Chave de fenda', Quantidade: 300 , qualidade: '5/10' , cor: 'Pratiado', Uso: 'Manual'},
 //{Nome: 'Chave inglêsa', Quantidade: 300 , qualidade: '3/10' , cor: 'Pratiado', Uso: 'Manual'},
 //{Nome: 'Macaco', Quantidade: 300 , qualidade: '10/10' , cor: 'Pratiado' , Uso: 'Manual'},
 //{Nome: 'Marreta', Quantidade: 300 , qualidade: '10/10' , cor: 'Pratiado', Uso: 'Manual'}
//
//
//];

//
//let escolha = prompt('Escolha o uso eletrico ou manual ');
//
//let produto = Ferramentas.filter(Ferramentas => Ferramentas.Uso == `${escolha}`);
//
//let quadrado = x => x ** 2;


//let numeros = [2, -5 , 0,4 , 75 , -3,5];
//let quadrados = numeros.map(quadrado);
//let dobros = numeros.map(n => n * 2);


//let soma = numeros.reduce((ant, atual) => ant + atual); 




//console.log(produto);


//console.log(quadrado);
//console.log(numeros);
//console.log(quadrados);
//console.log(dobros);
//console.log(soma);


let pessoa = {
    nome: 'Saul',
    dizerola2: function(){
        console.log( `Ola meu nome é ${this.nome}`);

    }


}



pessoa.dizerola2();