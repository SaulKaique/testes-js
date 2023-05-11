
let Medico
let infermero
let recepção



let Usuario = [

    {nome: 'Arthur', idade: 18 , altura: '1,96' , peso: 101, email: 'arthurgeladeradopedro@email.com' },
    
    {nome: 'Pedro', idade: 18 , altura: '1,75' , peso: 127, email: 'Pedrocomedordeveia@email.com' },
    
    {nome: 'Joliano', idade: 19 , altura: '1,75' , peso: 46, email: 'Jolianoburaconegro@email.com'}, 
    
    {nome: 'Athena', idade: 18 , altura: '1,65' , peso: 73, email: 'athenagostosa@email.com' },
    
    {nome: 'Nicole', idade: 18 , altura: '1,59' , peso: 80, email: 'Nicolebalão@email.com' },
    
    {nome: 'Big ed', idade: 18 , altura: '1,72' , peso: 128, email: 'bigedgadodemais@email.com' },
    
    {nome: 'Thiago', idade: 18 , altura: '1,84' , peso: 120, email: 'thigastropadoscalvo@email.com' },
    
    {nome: 'Rato', idade: 'sla' , altura: 'sla' , peso: 'sla', email: 'ratosla@email.com' },
    
    {nome: 'Ana', idade: 18 , altura: '1,60' , peso: 45, email: 'aninhacubatão@email.com' },
    
    {nome: 'Sara', idade: 22 , altura: '1,75' , peso: 65, email: 'Saragordafeia10kavenda@email.com' }
    
    
    
    ];

    if (Usuario.nome == 'joliano') {

        console.log('você é Medico esse essa e sua interface ');

         
    } 
    else{

        console.log('Você  é infermero');

    }



    
    let user = prompt('Seu nome:');
    //
    let usarname = Usuario.filter(Usuario => Usuario.nome == `${user}` );
    
    
   let escreveridade = prompt('Seu idade:');
    
   let useridade = Usuario.filter(Usuario => Usuario.idade == `${escreveridade}` );
    
    let escreveraltura = prompt('Seu Altura:');
    //
    //let useraltura = Usuario.filter(Usuario => Usuario.altura == `${escreveraltura}` );
//
    //let escreverpeso = prompt('Seu Peso:');
    //
    //let useralpeso = Usuario.filter(Usuario => Usuario.peso == `${escreverpeso}` );
//
    //let escreveremal = prompt('Seu E-mal:');
    //
    //let useremail = Usuario.filter(Usuario => Usuario.email == `${escreveremal}` );




    
    console.log(usarname);
    console.log(useridade);


    //console.log();
    //console.log();
    //console.log();
