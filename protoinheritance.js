class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name); 
        this.course = course;
    }
    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }
}

const student2 = new Student("varshith", "MERN Stack");
student2.greet();  
student2.study();  