function Person(firstName, lastName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
}

module.exports = Person;

const person1 = new Person('Ayabulela', 'Sityata', 'sityataayabulela@gmail.com');
const person2 = new Person('Siyamthanda', 'Mazokwana', 'siyamazokwana@gmail.com');
const person3 = new Person('Thabang', 'Kganana', 'thabangk@gmail.com');