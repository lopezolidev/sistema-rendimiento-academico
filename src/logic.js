
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
            let user = new User({
                id: parseInt(obj.id),
                email: obj.email,
                password: obj.password,
                profesor_status: obj.es_profesor,
            }) //instancing profesor as an object of User class

            user.courses.push(algProg) //algorithms and programming professor as default
            
            teachers.push(user);
            // console.log(teachers)
            entranceFlag = true;

            return user;
        } else {
            let student = new Student({
                id: parseInt(obj.id),
                email: obj.email,
                password: obj.password,
                profesor_status: obj.es_profesor,
            })  //instancing student as an object of Student class
            
            student.courses = [
                algProg1,
                Intro2,
                math3,
                discMath4
            ]
            students.push(obj)
            // console.log(students)

            entranceFlag = true;

            return student;
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

// rendering class section ↓ STUDENTS CARDS

function renderStudents(studentsContainer, studentsArray, currentUser){
    studentsContainer.innerHTML = '';

    myClassHeader.children[1].append(`${currentUser.courses[0].name}`);

    let student_cards_box = [];
 
    student_cards_box = studentsArray.map(student => {
        const student_card = document.createElement('div');
        student_card.classList.add('student-card');

        const student_card_Id = document.createElement('h3');
        student_card_Id.innerText = `Id: ${student.id}`;

        const student_card_email = document.createElement('h3');
        student_card_email.innerText = `Email: ${student.email}`;

        const student_card_grades = document.createElement('div');
        student_card_grades.classList.add('student-card-grades');

        const nota1 = document.createElement('h4');
        const nota2 = document.createElement('h4');
        const nota3 = document.createElement('h4');
        const nota4 = document.createElement('h4');
        const promedio = document.createElement('h4');
        const rendimiento = document.createElement('h4');

        
        student.courses.map(course => {
            if(course.id === currentUser.courses[0].id){
                nota1.innerText = `Nota 1: ${course.grades[0]}`;
                nota2.innerText = `Nota 2: ${course.grades[1]}`;
                nota3.innerText = `Nota 3: ${course.grades[2]}`;
                nota4.innerText = `Nota 4: ${course.grades[3]}`;
                promedio.innerText = `Promedio: ${course.getGradesAvg()}`;
                rendimiento.innerText = `Rendimiento: ${parseFloat((course.getAP()) * (100 / 0.5).toFixed(2))}%`;
            }
        })

        student_card_grades.append(nota1, nota2, nota3, nota4, promedio, rendimiento);

        const downloadGradesBtn = document.createElement('button');
        downloadGradesBtn.classList.add('student-card_button');
        downloadGradesBtn.innerText = 'Descargar Datos';

        student_card.append(student_card_Id, student_card_email, student_card_grades, downloadGradesBtn);

        return student_card;
    })

    console.log(student_cards_box);

    studentsContainer.append(...student_cards_box);
} //function for rendering students with their own information according to section



// ============================================================== //

// rendering student section ↓


function recom(ap){
    if(ap <= 25){
        return 'Debes mejorar tu método de estudio y responsabilizarte más';
    } else if(ap > 25 && ap <= 50){
        return 'Puedes lograr mucho más, enfócate y supera las dificultades. Cambia tus hábitos para que tu esfuerzo sea recompensado';
    } else if(ap > 50 && ap <= 75){
        return 'Bien hecho. Puedes lograr algo mejor, afina tus habilidades y alcanzarás mayores logros';
    } else {
        return 'Excelente. Sigue así';
    }
}

function renderSubject(performance_box, student){
    performance_box.innerHTML = '';
    
    console.log({myProfileData})

    myProfileData.children[1].innerText = `Id: ${student.id}`
    myProfileData.children[2].innerText = `E-mail: ${student.email}`


    let grades_box = document.createElement('div');
    grades_box.classList.add('grades', 'perf_cont');

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
    
    grades_box.append(...gradesElements);

    const academic_perf = document.createElement('div');
    academic_perf.classList.add('performance-indicator', 'perf_cont');

    const academic_perf_title = document.createElement('h2');
    academic_perf_title.innerText = 'Rendimiento académico y recomendaciones';

    const academic_perf_subcontainer = document.createElement('div');
    academic_perf_subcontainer.classList.add('perf_subcontainer');
    
    const subcontainer_perf_ind = document.createElement('p')
    subcontainer_perf_ind.classList.add('perf_ind');

    const subcontainer_perf_recom = document.createElement('p');
    subcontainer_perf_recom.classList.add('perf_recom');

    student.calculateRA();
    student.getTotalRac();
    
    subcontainer_perf_ind.innerText = `${student.ap}%`;
    subcontainer_perf_recom.innerText = recom(student.ap);

    academic_perf_subcontainer.append(subcontainer_perf_ind, subcontainer_perf_recom);

    const downloadData = document.createElement('button');
    downloadData.innerText = 'Descargar Datos';
    downloadData.classList.add('btn');

    academic_perf.append(academic_perf_title, academic_perf_subcontainer, downloadData);


    performance_box.append(grades_box, academic_perf);
}



// renderSubject(performance_wrapper, currentUser)
// renderSubject(gradesStudent, student3)

//  currentUser = students[0] //default option

// window.addEventListener('DOMContentLoaded', renderSubject(performance_wrapper, currentUser));