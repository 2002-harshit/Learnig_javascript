const mark = {
    full_name: "mark miller",
    mass: 23,
    height: 1.60,

    calcBMI: function () {
        //if you only write mass, the function will look for mass in its body, which wont be available
        if (!this.bmi) {
            this.bmi = this.mass / (this.height ** 2);
        }
        return this.bmi;
    }
};
const john = {
    full_name: "john smith",
    mass: 30,
    height: 1.65,

    calcBMI: function () {
        //if you only write mass, the function will look for mass in its body, which wont be available
        if (!this.bmi) {
            this.bmi = this.mass / (this.height ** 2);
        }
        return this.bmi;
    }
};

console.log(mark.calcBMI());