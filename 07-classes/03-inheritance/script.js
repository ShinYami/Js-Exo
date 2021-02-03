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
            super();
            this.name = name;
        }
        static greeting = "zboul";
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "zbeul";
    }

    document.getElementById("run").addEventListener('click', () => {
        let nameCat = new Cat('Joe');
        let nameDog = new Dog('Anna');
        console.log(nameCat.sayHello());
        console.log(nameDog.sayHello());
    });

})();


