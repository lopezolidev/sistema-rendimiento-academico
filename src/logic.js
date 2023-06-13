
let user;
let entranceFlag = false;
let currentUser;

signIn.classList.toggle('inactive')

document.addEventListener('click', (e) => {
    if(e.target === btnSignIn || e.target == btnSignUp){
        signIn.classList.toggle('inactive');
        signUp.classList.toggle('inactive');
    }
}) //logic for registration and login

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

        if(obj.es_profesor) {
            user = obj;
            user.courses = [algProg]; //algorithms and programming professor as default
            
            teachers.push(obj);
            // console.log(teachers)
            entranceFlag = true;

            return user;
        } else {
            user = obj;
            user.courses = [
                algProg,
                Intro,
                math,
                discMath
            ]
            students.push(obj)
            // console.log(students)

            entranceFlag = true;

            return user;
        }
        

     //validation for new users
} //validacion datos usuario

function login_user(obj){
    let matchTeacher = teachers.some( teacher => teacher.email === obj.email && teacher.password === obj.password); //teacher login data

    let matchStudent = students.some( student => student.email === obj.email && student.password === obj.password); //student login data

 
     if(matchStudent){
        console.log('welcome student')
        
        user = students.find(student => student.email === obj.email && student.password === obj.password); //current user for changing views depending on it
        // console.log(user);
        entranceFlag = true;
        return user;

        //TODO: CHANGE VIEW
    } else if (matchTeacher) {
        console.log('welcome teacher')
        user = teachers.find(teacher => teacher.email === obj.email && teacher.password === obj.password);
        // console.log(user);
        entranceFlag = true;
        return user;

        //TODO: CHANGE VIEW
    } //student and teacher's password and email will not match between them 
    else {
        window.alert('Usuario no existe'); 
    }

} //user sign-in function 

let data;

form.addEventListener('submit', e => {
    e.preventDefault();
    data = Object.fromEntries(
        new FormData(e.target)
    )
    // console.log({data})
    currentUser = validation(data);

    if(entranceFlag){
        location.hash = '#home';
    }

}) //recuperacion datos usuario


let sign_in_data; //variable to store sing in data

singInForm.addEventListener('submit', e => {
    e.preventDefault();
    sign_in_data = Object.fromEntries(
        new FormData(e.target) //creating a FormData instance from FormData prototype, therefore acquiring all the necessary information to validate and store
    )
    console.log({sign_in_data})  //retrieving information from user

    currentUser = login_user(sign_in_data); 

    // console.log(currentUser);
    // console.log(entranceFlag);
    if(entranceFlag){
        location.hash = '#home';
        // if(currentUser.profesor_status){
        //     location.hash = '#my_class';
        // } else {
        //     location.hash = '#my_profile';
        // }
        
    }
})

// Login and Registration logic ^

// ==================================================================== //


let counter = 0;

backBtn.addEventListener('click', (e) => {
    switch (counter) {
        case 1:
                institutions.classList.remove('inactive');
                faculties.classList.add('inactive');
                backBtn.classList.add('inactive');
            break;
        case 2:
                faculties.classList.remove('inactive');
                schools.classList.add('inactive');
                counter--;
            break;
        case 3:
                schools.classList.remove('inactive');        
                offers.classList.add('inactive');
                counter--;
            break;
        case 4:
                offers.classList.remove('inactive');
                semesters.classList.add('inactive');
                counter--;
            break;
        default:
            break;
    }
    if(counter == 0){

    } 
})

ucvBtn.addEventListener('click', () => {
    institutions.classList.add('inactive');
    backBtn.classList.remove('inactive');
    faculties.classList.remove('inactive');
    counter = 1;
})

ciensBtn.addEventListener('click', () => {
    faculties.classList.add('inactive');
    schools.classList.remove('inactive');
    counter = 2;
})

compSciBtn.addEventListener('click', () => {
    schools.classList.add('inactive');
    offers.classList.remove('inactive');
    counter = 3;
})

pregBtn.addEventListener('click', () => {
    offers.classList.add('inactive');
    semesters.classList.remove('inactive');
    counter = 4;
})

semestreI.addEventListener('click', () => {
    if(currentUser.profesor_status){
        location.hash = '#my_class';
    } else {
        location.hash = '#my_profile';
    }
})

//micro navigation section 

// ============================================================== //

// micro navigation student section ↓


function renderSubject(obj, student){
    obj.innerHTML = '';

    let gradesElements = [];

    gradesElements = student.courses.map(course => {

        const grade_perf_cont = document.createElement('div');
        grade_perf_cont.classList.add('grade_perf_cont');

        const gradeTitle = document.createElement('h2');
        gradeTitle.classList.add('perf_subject_title');

        const gradesContainer = document.createElement('div');
        gradesContainer.classList.add('perf_subcontainer')
        
        const perf_grade1 = document.createElement('p');
        const perf_grade2 = document.createElement('p');
        const perf_grade3 = document.createElement('p');
        const perf_grade4 = document.createElement('p');
        const studyTime = document.createElement('p');

        gradeTitle.innerText = course.name;
        perf_grade1.innerText = `Nota 1: ${course.grades[0]}`;
        perf_grade2.innerText = `Nota 2: ${course.grades[1]}`;
        perf_grade3.innerText = `Nota 3: ${course.grades[2]}`;
        perf_grade4.innerText = `Nota 4: ${course.grades[3]}`;
        studyTime.innerText = `Horas de estudio: ${course.getStudyHours()}`;

        gradesContainer.append(perf_grade1, perf_grade2, perf_grade3, perf_grade4, studyTime);
        grade_perf_cont.append(gradeTitle, gradesContainer);

        return grade_perf_cont;
    })
    
    obj.append(...gradesElements)
}

renderSubject(gradesStudent, student2)
// renderSubject(gradesStudent, student3)
