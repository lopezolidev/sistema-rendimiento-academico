let contents = [
    {
        name: "Jane Doe",
        favorite_game: "Stardew Valley",
        subscriber: false,
        games: [4, 3, 2, 1]
      },
      {
        name: "JohEWFREAFG n Doe",
        favorite_game: "DefwE Quest XI",
        subscriber: true,
        games: [1, 2, 8, 4]
      },
      {
        name: "John Doe",
        favorite_game: "DrEAR GQuest XI",
        subscriber: true,
        games: [1, 6, 3, 4]
      },
      {
        name: "JohnAREW GAR  Doe",
        favorite_game: "Dragon QGAE GAERGuest XI",
        subscriber: true,
        games: [1, 7, 3, 8]
      },
      {
        name: "John Doe",
        favorite_game: "DrAER GEATGAE on Quest XI",
        subscriber: true,
        games: [0, 0, 0, 4]
      },
      {
        name: "Jame sdfawe",
        favorite_game: "wefwef",
        subscriber: false,
        games: [1, 2, 5, 4]
      }
]

function renderContents(contentsArray) {

    if(JSON.parse(localStorage.getItem('data'))){
        contentsArray = JSON.parse(localStorage.getItem('data'));
    }

    const element = document.querySelector('.show2');
    element.innerHTML = '';
    const cards_array = [];
    let counter = 1;
    contentsArray.map((el) => {
        const container = document.createElement('div'); //contenedor grande
        // const image_wrapper = document.createElement('div'); //contenedor de img
        const image = document.createElement('img'); //imagen
        const title_wrapper = document.createElement('div'); //contenedor titulo
        const title = document.createElement('h3'); //titulo de la card
        title.innerText = `Characters! ${counter}`;
        counter++;

        const description_box = document.createElement('section'); //contenedor de descripcion de personaje
        const name = document.createElement('span'); //nombre personaje
        const game = document.createElement('span'); //favourite game
        const subscriber = document.createElement('span'); //subscriber
        const games = document.createElement('span');


        //añadido de clases a los elementos de HTML
        container.classList.add('character_container');

        // image_wrapper.classList.add('img_wrapper');
        image.classList.add('img');
        image.src = "../src/assets/cube_background.jpg";

        title_wrapper.classList.add('title_wrapper');
        // title.classList.add('title');

        description_box.classList.add('description_box');
        name.classList.add('description_text');
        game.classList.add('description_text');
        subscriber.classList.add('description_text');



        name.innerText = `Name of character:  ${el.name}`;
        game.innerText = `Favourite game: ${el.favorite_game}`;
        subscriber.innerText = `It's a subscriber? ${el.subscriber}`;
        games.innerText = `Games: ${el.games}`;
        // llenado de valores

        // image_wrapper.append(image); //pegar imagen en contenedor (image_wrapper)
        container.append(image)
        title_wrapper.append(title); //pegar titulo dentro de caja para titulos
        description_box.append(name, game, subscriber, games); //pegando elementos descriptivos dentro de la description box
        // container.append(image_wrapper); //pegando imagen
        container.append(title_wrapper); //pegar caja de titulo (Que ya tiene titulo)
        container.append(description_box); //pegando description box

        cards_array.push(container);
    })

    element.append(...cards_array);

}



function sameName(person, n){
    return person.name === n;
}

function displayContent(cont){
    const data = JSON.parse(cont);
    // console.log(contents)
    contents.map(e => {
        data.map(d => {
            if(e.name == d.name){
                e.games = d.games;
            }
        })
    }) //codigo para modificar "games"

    console.log(contents)

    localStorage.setItem('data', JSON.stringify(contents));
}

function readInfo(e){
    console.log('hello')
    const file = e.target.files[0];
    if(!file){
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        // console.log(JSON.parse(content))


        displayContent(content);
        renderContents(contents)
    };
    reader.readAsText(file);
}

// console.log('hello')
const file = document.querySelector('#file1');
file.addEventListener('change', readInfo, false)
window.addEventListener('DOMContentLoaded', renderContents(contents));
