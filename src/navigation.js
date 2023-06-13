window.addEventListener('DOMContentLoaded', navigator, false);

window.addEventListener('hashchange', navigator, false);


function navigator(){
    console.log({ location });

    if(location.hash.startsWith('#login')){
        login();
    } else if(location.hash.startsWith('#home')){
        home();
    } else if(location.hash.startsWith('#my_class')){
        myClass();
    } else if(location.hash.startsWith('#my_profile')){
        // console.log(location.hash)
        myProfile();
    } else {
        login();
    }

    window.scrollTo({top: 0, behavior: 'smooth'});
} //navigation section for travelling between screens using location.hash

function login(){
    startSite.classList.remove('inactive');
    homeScreen.classList.add('inactive');
    userSection.classList.add('inactive');
}

function home(){
    homeScreen.classList.remove('inactive');
    startSite.classList.add('inactive');
    userSection.classList.add('inactive');
    backBtn.classList.add('inactive');
    institutions.classList.remove('inactive');
    faculties.classList.add('inactive');
    schools.classList.add('inactive');
    offers.classList.add('inactive');
    semesters.classList.add('inactive');
}


function myClass(){
    teacherSection.classList.remove('inactive');
    startSite.classList.add('inactive');
    homeScreen.classList.add('inactive');
    userSection.classList.remove('inactive');
    studentSection.classList.add('inactive');
    renderStudents(studentsCardsSection, students, currentUser)
}

function myProfile(){
    studentSection.classList.remove('inactive');
    startSite.classList.add('inactive');
    homeScreen.classList.add('inactive');
    userSection.classList.remove('inactive');
    teacherSection.classList.add('inactive');
    renderSubject(performance_wrapper, currentUser);
}
