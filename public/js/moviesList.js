console.log('moviesList connected seccess');

let h1 = document.querySelector('h1');
let body = document.querySelector('body').innerHTML += 'Estoy reemplazando el contenido';
let li = document.querySelectorAll('a')

let fondo= confirm('¿Desea modo oscuro?'); //en el tp dice que haga uso del  prompt (pero no hagarra)

if(fondo){
    body.style.backgroundColor = '#7f7f7f',
    body.classList.add('fondoMoviesList')
}

h1.innerHTML = "LISTADO DE PELICULAS" // puede ir tambien .innerText

h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.padding ="20px";