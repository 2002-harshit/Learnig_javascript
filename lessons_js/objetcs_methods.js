const person =
{
    firstname: "Harshit",
    lastname: "khanna",
    birthyear: 2002,
    job: "student",
    friends: ["nivas", "samarth"],
    hasDriverLicense: false,

    getAge: function (birthyear) {
        //again birthyear is local to the function
        return 2023 - birthyear;
    },

    getAgeBetter: function () {
        return 2023 - this.birthyear;
    },

    getAgeEvenBetter: function () {
        if (!this.age) {
            this.age = 2023 - this.birthyear;
            //* if age property wont be there it would be created

        }

        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstname} is a ${this.getAgeEvenBetter()} year old man, and he ${this.hasDriverLicense ? "has" : "does not have"} a driver's license`);
    }

}

console.log(person.getAge(person.birthyear));

//* [] can also be used for the same
console.log(person["getAge"](person.birthyear))


console.log(person.getAgeBetter());
console.log(person["getAgeBetter"]());

console.log(person.getAgeEvenBetter());
console.log(person["getAgeEvenBetter"]());

person.getSummary();



