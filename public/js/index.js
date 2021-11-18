console.log('index connected seccess');

let main = document.querySelector('main')
let h2 = document.querySelector('h2')
let a = document.querySelector('a')
let p = document.querySelectorAll('p')

let response = prompt('Ingrese su nombre')

if(response){
    h2.innerText += nombre
}else {
    h2.innerText += "Invitado"
}

h2.style.textTransform = "uppercase"

a.style.color = "#E51B3E"

const response = confirm('¿Desea colocar un fonde de pantalla?') //ya esta definido pero no entiendo!?

response && document.body.classList.add('fondo')

p.forEach((parrafo, index)=> {
    index % 2 == 0 ? parrafo.classList.add('destacadoPar') : parrafo.classList.add('destacadoImpar')
})

main.style.display = "block"