console.log('hello')

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
    if(!localStorage.getItem("user")){
        //TODO: Finish user validation
    }

    if(obj.id == profesor.user_id && obj.user_email == profesor.user_email){
            console.log('welcome')
            let newUser = obj;    
            if(!localStorage.getItem("user")){
                localStorage.setItem("user", JSON.stringify(newUser));
            }
            
    }
} //validacion datos usuario


console.log(localStorage.getItem("professor")) //this is a string

const newProf = JSON.parse(localStorage.getItem("professor"));
console.log(`
Professor id: ${newProf.id},
Professor email: ${newProf.email},
Professor is professor: ${newProf.profesor} `)


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

    console.log(tabs_wrapper.children[0])

    let arrayOfButtons = [...tabs_wrapper.children[0].children]; //destructuring elements to make it an array instead of a nodelist

    arrayOfButtons.forEach(button => {
        button.click();
    }) //making default option last button
})

