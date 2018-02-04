var moment = window.moment;

class Person {
  constructor(name, surname, dateOfBirth, gender = "man") {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
  }
  sayhello(){
    console.log("Hello " + "I'm " + this.name + this.surname);
  }
  getage() {
    let currentDate = moment(new Date());
    let dateOfBirth = moment(this.dateOfBirth);
    let differenceInYears = currentDate.diff(dateOfBirth, 'years');
    return differenceInYears;
  }
  getlifedays() {
    let currentDate = moment(new Date());
    let dateOfBirth = moment(this.dateOfBirth);
    let differenceIndays = currentDate.diff(dateOfBirth, 'days');
    return differenceIndays;
  }
}
let person = new Person("Amadeusz ", "Kotrys", new Date('1993-10-10'));

 person.sayhello();
 console.log(person.getage());
 console.log(person.getlifedays());
