function displayContent(content){
    const contenido = JSON.parse(content);

    const element = document.querySelector('.show2');

    const cards_array = [];
    let counter = 1;
    contenido.map((el) => {
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
        // llenado de valores

        // image_wrapper.append(image); //pegar imagen en contenedor (image_wrapper)
        container.append(image)
        title_wrapper.append(title); //pegar titulo dentro de caja para titulos
        description_box.append(name, game, subscriber); //pegando elementos descriptivos dentro de la description box
        // container.append(image_wrapper); //pegando imagen
        container.append(title_wrapper); //pegar caja de titulo (Que ya tiene titulo)
        container.append(description_box); //pegando description box

        cards_array.push(container);
    })

    element.append(...cards_array);

    // console.log({cards_array}); //display en consola de arreglo de elementos HTML



    // element.append(container);

    // element.innerText = content;

    console.log(contenido)
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
        displayContent(content);
    };
    reader.readAsText(file);
}

// console.log('hello')
const file = document.querySelector('#file1');
file.addEventListener('change', readInfo, false)


