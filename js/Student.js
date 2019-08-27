// class Student {
//     setFirstName(firstname) {
//         this.mFirstName=firstname;
//     }
//     getFirstName() {
//         console.log(this.mFirstName);
//     }
// }
// const student1 = new Student();
// student1.setFirstName("romdoul");
// student1.getFirstName();
//setter 
//set firstname
export default class User {
    setFirstName(fname) {
        this.mFname = fname;
    }
    //set lastname
    setLastName(lname) {
        this.mLname = lname;
    }
    //set age 
    setAge(age) {
        this.mAge = age;
    }
    //getter 
    // get firstname
    getFirstName() {
        console.log(this.mFname);
    }
    getLastName() {
        console.log(this.mLname);

    }
    getAge() {
        console.log(this.mAge);
    }
}
const student1 = new User();
student1.setFirstName("Chompa");
student1.setLastName("Norm");
student1.setAge("18");
student1.getFirstName();
student1.getLastName();
student1.getAge();

class Person extends User {
    welcome() {
        console.log("welcome New day");
    }
}
const p1 = new Person();
p1.welcome();
p1.setFirstName('rady');
p1.setLastName("y");
p1.setAge(30);
p1.getFirstName();
p1.getLastName();
p1.getAge();

document.body.style.background = "teal";