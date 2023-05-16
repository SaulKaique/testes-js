const  listalinguagens = document.getElementById('linguagem');

const linguagenpreferida =  'JavaScript';


listalinguagens.insertAdjacentHTML('beforeend','<li class="destaque">C#</li>')
listalinguagens.insertAdjacentHTML('beforeend', `${linguagenpreferida}`)