console.log('moviesList connected seccess');

let h1 = document.querySelector('h1');
let body = document.querySelector('body').innerHTML += 'Estoy reemplazando el contenido';

let response = confirm('¿Desea modo oscuro?'); //en el tp dice que haga uso del  prompt (pero no hagarra)

if(response){
    body.style.backgroundColor = '#7f7f7f',
    body.classList.add('fondoMoviesList')
}
h1.innerHTML = "LISTADO DE PELICULAS" // puede ir tambien .innerText

h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding ="20px";