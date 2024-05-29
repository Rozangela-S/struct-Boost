              // * Variaveis 

var precoCar = 5000
let tipotransporte = "onibus"
const vendido = false
var tipo = null
var to = Symbol()
var ob = [{
    nome: "gol",
    ano: 2021,
    preco: 4.582
},
{
    nome: "fi",
    ano: 2025
}]
console.log(to)
console.log(ob[1])

 //OBS: [1] Possição das coisas 

console.log(tipo)
console.log(precoCar)
console.log(tipotransporte)
console.log(typeof vendido) 

//OBS: Typeof diz que tipo de variavel é string

const pi = 3.14
let resultado = pi * 100
console.log(resultado)

let nomen = "roza"
let sobrn = "felix"
console.log(`primeiro nome: ${nomen} ${sobrn}`);

             // * Operadores 
 
let soma = 5 + 10 * 2
let subtraçao = (10 - 4) / 3
let multiplicacao = 10 / 2 * 3 
let dibisao =  20 / 5 * 2 + 4 + 10 - 5 
let expoente = 4 ** 2
console.log(soma)
console.log(subtraçao)
console.log(multiplicacao)
console.log(dibisao)
console.log(expoente)

               //* Operadores Unarios 

let incrementar = 10
console.log(incrementar++)
console.log(incrementar)

let incrementar2 = 10
console.log(++incrementar2)

           //  Boolean e Condicionais "If" e "Else"

 let carroVendido = false
 if(carroVendido){
    console.log('o carro foi vendido ')
 }else{
    console.log('o carro não foi vendido')
 }

           //* Condicional ' Else if' 

 let possuiCarro = false
 let possuiMoto = true
  if(possuiMoto){
    console.log('Ele tem uma moto')
  }else if(possuiCarro){
    console.log('Ele tem um carro')
  }else{
    console.log('Ele não tem nem carro e nem moto')
  }

//OBS: Valores Falsos / if(false) / if(0) / if(NaN) / if(null) / if(undefined) / if('')

if(false){
    console.log('true')
}else{
    console.log('false')
}

//OBS: Valores Verdadeiros / if(true) / if(1) / if(' ') / if('will') / if(-28) / if({})

if('will'){
    console.log('true')
}else{
    console.log('false')
}

           // * Operadores lógicos de negação 

//OBS:  if(!true)-> false

//OBS: qualquer valor com o operador '!' resulta em false . isto é se o valor original seria true ele retorna false e vice-versa.

//OBS: se '!!' logo ele será resultará o valor original. 

             //  * Operadores de Comparação 

//OBS:'==' -> verifica se são iguais independente da tipagem.

//OBS: '===' -> verifica a tipagem

//OBS:'!=' -> verifica se é diferente independente da tipagem

//OBS:'!==' -> verifica a tipagem 

              // * Funções 

function areaQuadrada(lado){
    return lado * lado
}

console.log(areaQuadrada(10))
console.log(areaQuadrada(5))
console.log(areaQuadrada(4))

                // * Paramentros e Argumentos

function inc(peso, altura){
  const inc = peso / (altura ** 2)
  return inc
}

inc(88, 1.88)
inc(60, 1.70)
console.log('O inc é:', inc(48, 1.56))

                  // * Executando a função

function carrFavorito(carr){
  if(carr === 'fusca'){
    console.log('O carro favorito é o fusca')
  }else if(carr === 'gol'){
    console.log('O carro favorito é o gol')
  }else{
    console.log('você gosta de nenhum dos carros')
  }
}
carrFavorito('gol')

                   // *Objetos

var car = {
  nome: 'lanborghint',
  ano: 2023,
  cor: 'red',
  automatico: true
}
console.log(car.nome)

car.nome = "fusca"
console.log(car.nome)

             // * Arrays e Loops 

var carrs = ['fusca', 'nanza', 'brasilia', 'span']

console.log(carrs)


           // * Métodos e propriedades

//OBS: carrs.pop()
//OBS: .pop() remove o ultumo item do Array
//OBS: .push() add no final do Array
//OBS: console.log(carrs.length) retorna o tamanho do Array

          // * For Loop estrutura de repetição

for(var numero = 0; numero < 11; numero++){
  console.log(numero)
}

        // *For While || mais não é muito utilizado 

var i = 0
while(i < 10){
  console.log(i)
  i++
}

            // * Loops com Array

var cars = ['funca','barsileira', 'span', 'gol']
for(var i = 0; i < cars.length; i++){
  console.log(cars[i])
}

            // * Break

var cars = ['funca','barsileira', 'span', 'gol']
for(var i = 0; i < cars.length; i++){
  console.log(cars[i])

  if(cars[i] === 'span'){
    break
  }
}

            // * ForEach

var cars = ['azul','branca', 'rosa', 'verde']
cars.forEach(function(item){
  console.log(item)
})

                    //SELECIONANDO OS ELEMENTOS 

const cabecalho = document.getElementById("js-cabecalho")
console.log(cabecalho)

const rodape = document.querySelector('.js-rodape')
console.log(rodape)

const menu = document.querySelector('#js-menu')
console.log(menu)

const meioItem = document.querySelector('ul li:nth-child(2)') // ->  pega o segundo da lista \first -> primeiro\ last -> ultimo

console.log(meioItem)

const primeiralista = document.querySelector('ul')
console.log(primeiralista) // -> Prega a primeira li encontrada pelo o primeiro ul  

const lista = document.querySelector('.Lista02')
const itemlista = lista.querySelector('li:last-child')
console.log(itemlista) // -> pega o ultimo elemento da segunda lista 

const iltemMenu = primeiralista.querySelector('li')
console.log(iltemMenu) // -> retorna a primeira li encontrada 

const listDropdown = document.querySelectorAll('.dropdown')
console.log(listDropdown) // -> retorna todos os elementos que estão no dropdown

console.log(listDropdown[3]) // -> retorna o dropdown na posição que desejada

               // Foreach 

const allDropdowns = document.querySelectorAll('.js-dropdown')
allDropdowns.forEach(function(item){
  console.log(item) // -> retorna todos os elementos que estão no dropdown
})

 //OBS: forEach roda todos os elementos automaticamente sem precisar de uma " determinação"

 const allDropdown = document.querySelectorAll('.js-dropdown')
 allDropdown.forEach(function(itemAtual, index, array){
    itemAtual.addEventListener('click', function(){
    console.log('Estou clicando no item', index)
  }) // ->  ao clicar na pag ele retorna o console.log evento de clicar 

  console.log(itemAtual) // -> percorrer todos os elementos
  
  console.log(index) // -> retorna as posições 
  
  console.log(array) // -> retorna as informações completas 
})

           // Arrow Function

//OBS: foreach(item =>{...}) quando tiver só um paramentro foreach((item, index, array) =>{...}) quando tiver mais parametros

//OBS: foreach(()=>{}) quando não tiver nenhum parametro

          // ** Classes  

const button = document.getElementById('js-btn')

console.log(button.classList) // -> lista as classes do elemento

button.addEventListener("click", () =>{
 //OBS: button.classList.add('active') // -> add a class
  
  //OBS: button.classList.remove('active') // -> remove a   class
 
   button.classList.toggle('active') // ->  add/remove a class \ toggle se existe remove senão add
 
  button.classList.contains('active')

   //OBS: console.log(button.classList.contains('active')) // -> verifica se existe a class

   //OBS: button.classList.replace('active', 'roza') // -> substitui o nome da class
})


                  // ATRIBUTOS

const image = document.getElementById('js-img')
const buttonS = document.getElementById('js-btn')

button.addEventListener('click', () => {
  console.log(image.getAttribute('src', '/Hotmart/IMG/Icon (1).svg')); // -> alt ou src retorna o caminho da imagem 

  let htmlDocument = document.documentElement;
  htmlDocument.classList.toggle('theme-black')

  if(htmlDocument.classList.contains('theme-black')){
    image.setAttribute('src', '/Hotmart/IMG/Icon (1).svg') //  -> muda a imagem original

    image.setAttribute('alt', 'logo white') // -> muda o texto alternativo da imagem

  }else{
    image.setAttribute('src', '/Hotmart/IMG/Icon.svg') // -> volta para a imagem original

    image.setAttribute('alt', 'logo black') // -> volta ao texto alternativo original

  }
})

                      // EVENTOS  OTIMIZADO callback

const btns = document.getElementById('js-btns')
function handClick(){
  console.log(event.type) // -> retorna o evento que esta sendo executado 

 //OBS: console.log(event.target) // -> retorna o item que esta no mapeamento no evento 

 //OBS:  let botao = event.currentTarget
 //botao.textContent = 'CLICOU' // ->  MUDAR O TEXTO AO CLICAR PARA 'CLUCOU '

 //OBS: console.log(botao.textContent) // -> retorna só o texto que está entro do elemento button 

  //OBS: console.log(event.currentTarget) // -> event.currentTarget mostra que o evento esta adicionavel 
}
btns.addEventListener('click', handClick)

// ORIGINAL 

/* OBS:    
  const btns = document.getElementById('js-btns')
  console.log(btns) // -> para saber se o elemento esta correto

  btns.addEventListener('click', () =>{
      console.log('clicou')
  })/*

             // PREVENTDEFAULT \\ prenive o evento padrao 

const link = document.getElementById('js-link')
function Click(event){
  event.preventDefault()
  console.log('clicou')
}
link.addEventListener('click', Click)

                // Ex:  envia um dados por tras dos panos 

const submit = document.getElementById('js-form')
function dados(event){
  event.preventDefault()
  console.log('Enviou')
}
submit.addEventListener('submit', dados) 

// OBS: evento 'SCROLL' ocorre quando você rola a pag

// OBS: evento 'MOUSEENTER'  é quando você passa o mause no elemento determinado 

// OBS: evento 'KEYDOWN' é quando digita uma tecla no teclado 

// OBS: evento ' mouseleave' é quando tira o mause do elemento determinado  



                     //   OUTERHTML, INNERHTML & INNERTEXT

 const titulo = document.querySelector('.titulo')
 console.log(titulo.outerHTML) //retorna todo html incluindo a tag

 console.log(titulo.innerHTML) //retorna o html interno, isto é se tiver outra tag ele retornará 

console.log(titulo.innerText) // retorna o texto sem tags 

//OBS: titulo.innerText = '<h1> NOVO TITULO</h1>' // a tag vai como texto, sendo assim, só precisa colocar = 'NOVO TITULO'

titulo.innerHTML = '<h1> NOVO TITULO </h1>' // a tag é renderizada, OU SEJA SÓ RETORNA O TEXTO 

                    //  TRANSVERSING

const tit = document.querySelector('h2') // querySelector('h2') + console.log(tit) mostra que estou pegando a tag h2
console.log(tit) // todos colocado em um console.log(tit.parentElement )// pai deste elemento

//OBS: tit.parentElement.parentElement // pai do pai do elemento 

//OBS: tit.previousElementSibling // elemento anterior 

//OBS: tit.nextElementSibling // proximo elemento

                    // MANUPULANDO OS ELEMENTOS  /

const item01 = document.querySelector('.item01')
const item02 = document.querySelector('.item02')
const tix = document.querySelector('.tix')
item01.appendChild(item02) // mover o elemento para o final do item01

//item01.removeChild(tix) // remove o titulo do item01. Se colocar item02.removechild(tix) ele removerá o texto da pag 

                     // CRIANDO NOVOS ELEMENTOS 

const areaTitulo = document.querySelector('.area-titulo')
const novoTitulo = document.createElement('h2') // criou uma tag h2 sem precisar usar o html
novoTitulo.innerText = 'NOVO TITULO secundario ' // add o novo texto
novoTitulo.classList.add('titulo-novo-secun') // add nova nome para class
areaTitulo.appendChild(novoTitulo) // exibiu na pag  

                    // NAVEGAÇÃO EM TABS 

const navTabs = document.querySelectorAll('.js-nav-tabs li a')
const tabPane = document.querySelectorAll('.tab-pane')

console.log(tabPane)

navTabs.forEach((nav, index) =>{
  nav.addEventListener('click', (event) =>{
    event.preventDefault() // impede que o link continue como href normalmente

    navTabs.forEach(itamNav => {
      itamNav.classList.remove('active')
    })

    tabPane.forEach(tab => {
      tab.classList.remove('active')
    })

    nav.classList.add('active')

    tabPane[index].classList.add('active')
  })
})
                   // ACCORDION 

 const accordion = document.querySelectorAll('.js-accordion');


accordion.forEach(acc => {
  acc.addEventListener('click', () => {
    let pai = acc.parentElement

    pai.classList.toggle('active')
    
    
  })
}) 

               // NAVEGAÇÃO SUAVE DE LINKS INTERNOS

const linkSection = document.querySelectorAll('.js-nav li a')
function scrollToSection(event){
  event.preventDefault()

  const href = event.currentTarget.getAttribute('href')

  const section = document.querySelector(href)

  const iniPosition = section.offsetTop
  window.scrollTo({
    top: iniPosition - 80,
    behavior: 'smooth'
  })
} 
linkSection.forEach(link => {
  link.addEventListener("click", scrollToSection)
})           */

                  // Modal 
/*
const btModal = document.querySelector('.js-open-modal')
const closeButtonModal = document.querySelector('.js-close-modal')
const modal = document.getElementById('js-modal')

function openModal() {
  modal.classList.add('active')
}

function closeModal(){
  modal.classList.remove('active')
}


btModal.addEventListener("click", openModal)

closeButtonModal.addEventListener("click", closeModal) */ 

            // SetTimeout e setlnterval
// cenario de animação

/*setTimeout(() =>{
  console.log('Exercutar setTimeout')
}, 3000)
// demora a exercução 

const count =document.getElementById('number')
setInterval(() =>{
  count.textContent = Number(count.textContent) + 1 
  console.log(count.textContent)
}, 1000)
// exercução em um intervalo de tempo 
*/

///
