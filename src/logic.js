

signIn.classList.toggle('inactive')

document.addEventListener('click', (e) => {
    if(e.target === btnSignIn || e.target == btnSignUp){
        signIn.classList.toggle('inactive');
        signUp.classList.toggle('inactive');
    }
}) //logic for registration and login


let data;

form.addEventListener('submit', e => {
    e.preventDefault();
    data = Object.fromEntries(
        new FormData(e.target)
    )
    console.log({data})
    validation(data);
}) //recuperacion datos usuario

function validation(obj){
    if(obj.es_profesor === "on"){
        obj.es_profesor = true;
    } else {
        obj.es_profesor = false;
    }

    if(localStorage.getItem("user")){
        let personA = JSON.parse(localStorage.getItem("user"));

        console.log('person A id: ')
        console.log(personA.id);

        if(personA.email === obj.email || personA.id == obj.id){
            window.alert('Ese usuario ya existe');
            return;
        }
    }  //validation function
    
        console.log('welcome');
        let newUser = obj;
        localStorage.setItem("user", JSON.stringify(newUser));
        teachers.push(obj);
     //validation for new users

    console.log(teachers)
} //validacion datos usuario




// console.log(localStorage.getItem("professor")) //this is a string

// const newProf = JSON.parse(localStorage.getItem("professor"));
// console.log(`
// Professor id: ${newProf.id},
// Professor email: ${newProf.email},
// Professor is professor: ${newProf.profesor} `)


function setUpTabs(){
    tab_button.forEach( button => {
        button.addEventListener('click', () => {
            const sideBar = button.parentElement; //parent element to each button
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab; //reffering from text content to the tab button in the side bar
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`); //now we can specify the tab we want using this syntax. we're selecting from the tabs container the button with the tab number we're passing, linking each tab button to the text section

            sideBar.querySelectorAll(".tab__button").forEach(button => {
                button.classList.remove("tab_button--active")
            })
            
            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("active")
            })

            button.classList.add("tab_button--active")
            tabToActivate.classList.add("active")

        })
    })
}

document.addEventListener('DOMContentLoaded', () => {
    setUpTabs();

    // console.log(tabs_wrapper.children[0])

    let arrayOfButtons = [...tabs_wrapper.children[0].children]; //destructuring elements to make it an array instead of a nodelist

    arrayOfButtons.forEach(button => {
        button.click();
    }) //making default option last button
})

