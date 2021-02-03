// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = 'zboul';
    }

    class cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "zbeul";
    }

    let nameDog = new dog('Anna');
    let nameCat = new cat('Lea');

    document.getElementById("run").addEventListener('click', () => {
        console.log(nameDog.sayHello());
        console.log(nameCat.sayHello());
    })

})();


