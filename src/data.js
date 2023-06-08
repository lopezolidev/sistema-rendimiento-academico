class User {
    constructor(
        id,
        email,
        password,
        profesor
    )
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.profesor = profesor;
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
            this.profesor = true;
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

const profesor = new User(); //applying singleton pattern

profesor.user_id = 10345987;
profesor.user_email = "teacheremail@gmail.com";
profesor.user_password = "pepito";
profesor.user_prof = false;

console.log(profesor)

let teachers = [];