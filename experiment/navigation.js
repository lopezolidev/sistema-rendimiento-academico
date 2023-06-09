// backBtn.addEventListener('click', () => {
//     location.hash = "#home";
// })

cont1.addEventListener('click', () => {
    location.hash = "#one";
}); 

cont2.addEventListener('click', () => {
    location.hash = "#two";
});

cont3.addEventListener('click', () => {
    location.hash = "#three";
});

cont4.addEventListener('click', () => {
    location.hash = "#four";
}); //every time we click each container, the website hash will change

backBtn.addEventListener('click', () => {
    window.history.back();  // this method makes us go back to the previous page

    /*  
    location.hash = '#home'
*/
});

window.addEventListener('DOMContentLoaded', navigator, false);

window.addEventListener('hashchange', navigator, false);


function navigator(){
    console.log({ location });

    if(location.hash.startsWith('#one')){
        one();
    } else if(location.hash.startsWith('#two')){
        two();
    } else if(location.hash.startsWith('#three')){
        three();
    } else if(location.hash.startsWith('#four')){
        four();
    } else {
        homePage();
    }

    window.scrollTo({top: 0, behavior: 'smooth'});
}

function homePage(){
    navigationContainer.classList.remove('navigation_in_two');
    navigationContainer.classList.remove('navigation_in_three');
    navigationContainer.classList.remove('navigation_in_four');
    
    cont1.classList.remove("inactive");
    cont2.classList.remove("inactive");
    cont3.classList.remove("inactive");
    cont4.classList.remove("inactive");
}

function one(){
    cont2.classList.toggle('inactive');
    cont3.classList.toggle('inactive');
    cont4.classList.toggle('inactive');
}

function two(){
    navigationContainer.classList.add('navigation_in_two');
    cont1.classList.toggle('inactive');
    cont3.classList.toggle('inactive');
    cont4.classList.toggle('inactive');
}

function three(){
    navigationContainer.classList.add('navigation_in_three')
    cont1.classList.toggle('inactive');
    cont2.classList.toggle('inactive');
    cont4.classList.toggle('inactive');
}

function four(){
    navigationContainer.classList.add('navigation_in_four');
    cont1.classList.toggle('inactive');
    cont2.classList.toggle('inactive');
    cont3.classList.toggle('inactive');
}