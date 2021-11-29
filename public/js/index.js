console.log('index connected seccess');

let main = document.querySelector('main')
let h2 = document.querySelector('h2')
let a = document.querySelector('a')
let p = document.querySelectorAll('p')


let res = prompt('Ingrese su nombre')

if(res){
    h2.innerText += res
}else {
    h2.innerText += "Invitado"
}

h2.style.textTransform = "uppercase"

a.style.color = "#E51B3E"

const response = confirm('¿Desea colocar un fondo de pantalla?')
response && document.body.classList.add('fondo')

p.forEach((parrafo, index)=> {
    index % 2 == 0 ? parrafo.classList.add('destacadoPar') : parrafo.classList.add('destacadoImpar')
})

main.style.display = "block"