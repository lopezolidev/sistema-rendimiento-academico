
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


// console.log(currentUser)
// console.log('hello')
// console.log(entranceFlag)

