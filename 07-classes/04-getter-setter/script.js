// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        getname() {
            return `${this.firstName} ${this.lastName}`
        }
        setname(newName) {
            this.firstName = newName.split(' ')[0]
            this.lastName = newName.split(' ')[1]
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        const Me = new Person('Мандзюк', 'Анна');
        console.log(Me.getname());
        Me.setname('Bruel Patrick');
        console.log(Me.getname());
    })

})();

//document.getElementById("run").addEventListener('click', () => {});