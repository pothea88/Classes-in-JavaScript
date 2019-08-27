import User from './Student.js'
class Person extends User {
    welcome() {
        console.log("Welcom new day");
    }
}
const p1 = new Person();
p1.setFirstName('Rady');
p1.getFirstName();
p1.setAge(40);
p1.getAge();