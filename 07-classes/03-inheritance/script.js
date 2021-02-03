// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal {
        constructor(name) {
            this.name = name;
        } static greeting = "zboul";
    }

    class Dog extends Animal {
        constructor(name) {
            this.name = name;
        } static greeting = "zbeul";
    }

    document.getElementById("run").addEventListener("click", () => {

        let catName = new Cat("Joe");
        let dogName = new Dog("Anna");

        console.log(catName.sayHello());
        console.log(dogName.sayHello());
    });

});
