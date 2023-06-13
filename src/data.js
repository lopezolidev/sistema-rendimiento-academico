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
    get user_id(){
        return this.id;
    }
    get user_email(){
        return this.email;
    }
    get user_prof(){
        return this.prof;
    }
} //parent class User, where Student and Teacher inherit

class Student extends User {
    constructor({
        id,
        email,
        password,
        profesor_status,
        courses = [],
        rac = [],
        ap,
    }
    = {
        id:1,
        email: "email",
        password: "password",
        profesor_status: false,
        ap: 0,
    }) //setting default values to keys as literal object in the constructor)
    {
        super(        
            id,
            email,
            password,
            profesor_status,
            // courses = [],
            )
        this.id = id;
        this.email = email;
        this.password = password;
        this.profesor_status = profesor_status;
        this.courses = courses;
        this.rac = rac;
        this.ap = ap;
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
    calculateRA(){
        let i = 0;
        while(i < this.courses.length){
            this.rac.push(this.courses[i].getAP());
            i++;
        }
        return this.rac;
        // return avg / this.rac.length;
    }
    getTotalRac(){
        let avg = 0;
        let i = 0;
        while(i < this.rac.length){
            avg += this.rac[i];
            i++
        }
        this.ap = parseFloat(((avg / this.rac.length).toFixed(2)) * (100/0.5));
    }
} //adding OOP to construct students from class User, therefore adding methods to the Student unavailable to the teacher

class Courses {
    constructor({
        id,
        name,
        credits,
        studyHours,
        grades = [],
        ap,
    } = {
        id: 1,
        name: "name",
        credits: 1,
        studyHours: 0,
        ap: 0,
    })
    {
        this.id = id;
        this.name = name;
        this.credits = credits;
        this.grades = grades;
        this.studyHours = studyHours;
        this.ap = ap;
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
    getGrades(){
        return this.grades;
    }
    getStudyHours(){
        return this.studyHours;
    }
    getAP(){
        let i = 0;
        let totalGrades = 0;
        while(i < this.grades.length){
            totalGrades += this.grades[i];
            i++;
        }
        this.ap = parseFloat((totalGrades / this.getStudyHours()).toFixed(2));

        return this.ap;
    }
    getGradesAvg(){
        let total = 0;
        let i = 0;
        while(i < this.grades.length){
            total += this.grades[i];
            i++;
        }
        return total / this.grades.length;
    }
} //class to create courses for students

const algProg = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg1 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg2 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg3 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg4 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg5 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg6 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg7 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

const algProg8 = new Courses({
    id: 6201,
    name: "Algoritmos y Programación",
    credits: 6,
});

algProg1.studyHours = 76;
algProg1.grades.push(10)
algProg1.grades.push(18);
algProg1.getAP();

algProg2.studyHours = 58;
algProg2.grades.push(12)
algProg2.grades.push(07);
algProg2.getAP();

algProg3.studyHours = 80;
algProg3.grades.push(19)
algProg3.grades.push(15);
algProg3.getAP();

algProg4.studyHours = 52;
algProg4.grades.push(08)
algProg4.grades.push(13);
algProg4.getAP();

algProg5.studyHours = 66;
algProg5.grades.push(13)
algProg5.grades.push(11);
algProg5.getAP();

algProg6.studyHours = 50;
algProg6.grades.push(10)
algProg6.grades.push(20);
algProg6.getAP();

algProg7.studyHours = 60;
algProg7.grades.push(9)
algProg7.grades.push(14);
algProg7.getAP();

algProg8.studyHours = 72;
algProg8.grades.push(11)
algProg8.grades.push(17);
algProg8.getAP();

const Intro = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});


const Intro1 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});

const Intro2 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});
const Intro3 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});
const Intro4 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});

const Intro5 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});

const Intro6 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});
const Intro7 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});
const Intro8 = new Courses({
    id: 6301,
    name: "Introducción a la Informática",
    credits: 4,
});

Intro1.studyHours = 60;
Intro1.grades.push(13);
Intro1.grades.push(12);
Intro1.getAP();

Intro2.studyHours = 64;
Intro2.grades.push(10);
Intro2.grades.push(9);
Intro2.getAP();

Intro3.studyHours = 74;
Intro3.grades.push(18);
Intro3.grades.push(12);
Intro3.getAP();

Intro4.studyHours = 80;
Intro4.grades.push(3);
Intro4.grades.push(20);
Intro4.getAP();

Intro5.studyHours = 56;
Intro5.grades.push(12);
Intro5.grades.push(19);
Intro5.getAP();

Intro6.studyHours = 28;
Intro6.grades.push(17);
Intro6.grades.push(8);
Intro6.getAP();

Intro7.studyHours = 40;
Intro7.grades.push(15);
Intro7.grades.push(14);
Intro7.getAP();

Intro8.studyHours = 62;
Intro8.grades.push(16);
Intro8.grades.push(12);
Intro8.getAP();


const math = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math1 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math2 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math3 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math4 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math5 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math6 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math7 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

const math8 = new Courses({
    id: 8206,
    name: "Matemática I",
    credits: 6,
});

math1.studyHours = 80;
math1.grades.push(12);
math1.grades.push(18);
math1.getAP();

math2.studyHours = 40;
math2.grades.push(18);
math2.grades.push(8);
math2.getAP();


math3.studyHours = 20;
math3.grades.push(7);
math3.grades.push(4);
math3.getAP();

math4.studyHours = 42;
math4.grades.push(11);
math4.grades.push(18);
math4.getAP();

math5.studyHours = 16;
math5.grades.push(2);
math5.grades.push(1);
math5.getAP();

math6.studyHours = 48;
math6.grades.push(14);
math6.grades.push(10);
math6.getAP();

math7.studyHours = 60;
math7.grades.push(16);
math7.grades.push(17);
math7.getAP();

math8.studyHours = 72;
math8.grades.push(10);
math8.grades.push(19);
math8.getAP();

const discMath = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) //instanciating courses objects

const discMath1 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath2 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath3 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath4 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath5 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath6 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath7 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

const discMath8 = new Courses({
    id: 6110,
    name: "Matemática Discreta",
    credits: 4,
}) 

discMath1.studyHours = 70;
discMath1.grades.push(12);
discMath1.grades.push(20);
discMath1.getAP();

discMath2.studyHours = 50;
discMath2.grades.push(10);
discMath2.grades.push(8);
discMath2.getAP();


discMath3.studyHours = 74;
discMath3.grades.push(18);
discMath3.grades.push(18);
discMath3.getAP();

discMath4.studyHours = 60;
discMath4.grades.push(17);
discMath4.grades.push(2);
discMath4.getAP();

discMath5.studyHours = 56;
discMath5.grades.push(10);
discMath5.grades.push(19);
discMath5.getAP();

discMath6.studyHours = 64;
discMath6.grades.push(8);
discMath6.grades.push(20);
discMath6.getAP();

discMath7.studyHours = 50;
discMath7.grades.push(13);
discMath7.grades.push(16);
discMath7.getAP();

discMath8.studyHours = 52;
discMath8.grades.push(19);
discMath8.grades.push(10);
discMath8.getAP();

const teacher1 = new User({
    id: 10345987,
    email:  "teacheremail@gmail.com",
    password: "pa$$w0rD",
    profesor_status: true,
    courses: [algProg]
});

const teacher2 = new User({
    id: 24587963,
    email: "samaltman@gmail.com",
    password: "trJ487Ku",
    profesor_status: true,
    courses: [Intro],
});

const teacher3 = new User({
        id: 86125472,
        email: "example_mail@gmail.com",
        password: "KDuwj7%6",
        profesor_status: true,
        courses: [math],
});

const teacher4 = new User({
    id: 93314587,
    email: "gdgpst@gmail.com",
    password: "fKDK4e67/",
    profesor_status: true,
    courses: [discMath],
})

//instantiating users

let teachers = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
];

console.log(teachers)

const student1 = new Student({
    id: 28457966,
    email: "gatoalegre@gmail.com",
    password: "45FJD87)",
    profesor_status: false,
    courses: [
        algProg1,
        Intro1,
        math1,
        discMath1
    ]
})

student1.calculateRA();
student1.getTotalRac();

const student2 = new Student({
    id: 30458789,
    email: "solestial@gmail.com",
    password: "7C,uK+nA",
    profesor_status: false,
    courses: [
        algProg2,
        Intro2,
        math2,
        discMath2
    ]
})

student2.calculateRA();
student2.getTotalRac();

const student3 = new Student({
    id: 27156330 ,
    email: "saltos@gmail.com",
    password: "45/!JD87",
    profesor_status: false,
    courses: [
        algProg3,
        Intro3,
        math3,
        discMath3
    ]
})

student3.calculateRA();
student3.getTotalRac();

const student4 = new Student({
    id: 30926803,
    email: "chillibomb@gmail.com",
    password: "2E/eX.5y",
    profesor_status: false,
    courses: [
        algProg4,
        Intro4,
        math4,
        discMath4
    ]
})

student4.calculateRA();
student4.getTotalRac();

const student5 = new Student({
    id: 34748435,
    email: "saltamontes@email.com",
    password: "V%4uX{QW",
    profesor_status: false,
    courses: [
        algProg5,
        Intro5,
        math5,
        discMath5
    ]
})

student5.calculateRA();
student5.getTotalRac();

const student6 = new Student({
    id: 23591022,
    email: "chocotorbellino@gmail.com",
    password: "M*wfRZ-S",
    profesor_status: false,
    courses: [
        algProg6,
        Intro6,
        math6,
        discMath6
    ]
})

student6.calculateRA();
student6.getTotalRac();

const student7 = new Student({
    id: 26208040,
    email: "cazafantasma@gmail.com",
    password: "Cm$*vqB4",
    profesor_status: false,
    courses: [
        algProg7,
        Intro7,
        math7,
        discMath7
    ]
})

student7.calculateRA();
student7.getTotalRac();

const student8 = new Student({
    id: 29853495 ,
    email: "espirituoso@gmail.com",
    password: "Yr43/6qt",
    profesor_status: false,
    courses: [
        algProg8,
        Intro8,
        math8,
        discMath8
    ]
})

student8.calculateRA();
student8.getTotalRac();

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
