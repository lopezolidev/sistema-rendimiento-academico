class User {
    constructor({
            id,
            email,
            password,
            profesor_status,
            courses = [],
        }
        = {
            id:1,
            email: "email",
            password: "password",
            profesor_status: false,
        } //setting default values to keys as literal object in the constructor
    )
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profesor_status = profesor_status;
        this.courses = courses;
    }
    set user_id(id){
        this.id = id;
    }
    set user_email(email){
        this.email = email;
    } 
    set user_password(password){
        this.password = password;
    } 
    set user_prof(prof){
        if(prof == "on"){
            this.profesor_status = true;
        }
    }
    addCourse(course){
        this.courses.push(course);
    }
    deleteCourse(course){
        let index = this.courses.indexOf(course);
        if( index > -1){
            this.courses.splice(index, 1);
        }
    }
    get user_id(){
        return this.id;
    }
    get user_email(){
        return this.email;
    }
    get user_prof(){
        return this.prof;
    }
}

class Courses {
    constructor({
        id,
        name,
        credits,
    } = {
        id: 1,
        name: "name",
        credits: 1,
    })
    {
        this.id = id;
        this.name = name;
        this.credits = credits;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getCredits(){
        return this.credits;
    }
} //class to create courses for students

const algProg = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const Intro = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});

const math = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const discMath = new Courses({
    id: 6110,
    name: "Discreet Math",
    credits: 4,
}) //instanciating courses objects



const profesor1 = new User({
    id: 10345987,
    email:  "teacheremail@gmail.com",
    password: "pa$$w0rD",
    profesor_status: true,
    courses: [algProg]
});

const profesor2 = new User({
    id: 24587963,
    email: "samaltman@gmail.com",
    password: "trJ487Ku",
    profesor_status: true,
    courses: [Intro],
});

const profesor3 = new User({
        id: 86125472,
        email: "example_mail@gmail.com",
        password: "KDuwj7%6",
        profesor_status: true,
        courses: [math],
});

const profesor4 = new User({
    id: 93314587,
    email: "gdgpst@gmail.com",
    password: "fKDK4e67/",
    profesor_status: true,
    courses: [discMath],
})

//instantiating users

let teachers = [
    profesor1,
    profesor2,
    profesor3,
    profesor4,
];

console.log(teachers)

const student1 = new User({
    id: 28457966,
    email: "gatoalegre@gmail.com",
    password: "45FJD87)",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})


const student2 = new User({
    id: 30458789,
    email: "solestial@gmail.com",
    password: "7C,uK+nA",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student3 = new User({
    id: 27156330 ,
    email: "saltos@gmail.com",
    password: "45/!JD87",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student4 = new User({
    id: 30926803,
    email: "chillibomb@gmail.com",
    password: "2E/eX.5y",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student5 = new User({
    id: 34748435,
    email: "saltamontes@email.com",
    password: "V%4uX{QW",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student6 = new User({
    id: 23591022,
    email: "chocotorbellino@gmail.com",
    password: "M*wfRZ-S",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student7 = new User({
    id: 26208040,
    email: "cazafantasma@gmail.com",
    password: "Cm$*vqB4",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

const student8 = new User({
    id: 29853495 ,
    email: "espirituoso@gmail.com",
    password: "Yr43/6qt",
    profesor_status: false,
    courses: [
        algProg,
        Intro,
        math,
        discMath
    ]
})

let students = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
]

console.log(students)

//DB for manipulation of students and teachers