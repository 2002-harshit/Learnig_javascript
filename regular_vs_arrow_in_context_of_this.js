"use strict";

const person = {
    myName: "harshit",
    yob: 2002,
    obj: this,

    calcAge: function () {
        console.log(this);
        console.log(2023 - this.yob);
    },

    greet: () => {
        console.log(`hey! ${this.myName}`);
        //* again we know thatg arrow functions do not get their own this, so they use it from the surrouding scope, which is outside the person object that is global scope and in the global scope "this" is window, so window.myName is undefined.
        //! we also know var creates properties in th window object, so if var myName was anywhere in thr program, it would be printed.

        //!THEREFORE NEVER USE ARROW FUNCTIONS AS OBJECT METHODS
    }
}

// person.calcAge( );
person.greet();

//*********************************************************** */

//*Another exmaple

const person2 = {
    myName: "harshit",
    yob: 2002,
    obj: this,

    calcAge: function () {
        console.log(this);
        console.log(2023 - this.yob);

        //!here this is the perosn2 object because calcAge() is called using perosn2 object.

        const ismillenial = function () {
            // console.log(this.yob >= 1981 && this.yob <= 1996 ? `hey!,${this.myName} is a millenial` : `hey!,${this.myName} is not a millenial`);

            //! again look closely, ismillenial() is just a normal function call,threfore "this" is undefined(strict mode), so the above is an error, now lets see a solution to this in next code exmaple.
        }

        ismillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`hey! ${this.myName}`);
    }
}

person2.calcAge();


//*********************************************************** */

const person3 = {
    myName: "harshit",
    yob: 2002,
    obj: this,

    calcAge: function () {
        console.log(this);
        console.log(2023 - this.yob);


        const self = this;
        //* this is a pre es6 solution, lets see the post ES6 version

        const ismillenial = function () {

            console.log(self.yob >= 1981 && self.yob <= 1996 ? `hey!,${self.myName} is a millenial` : `hey!,${self.myName} is not a millenial`);


        }

        ismillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`hey! ${this.myName}`);
    }
}

person3.calcAge();

//************************************************************** */

const person4 = {
    myName: "harshit",
    yob: 2002,
    obj: this,

    calcAge: function () {
        console.log(this);
        console.log(2023 - this.yob);

        //*es6 solution is using arrow fucntions

        const ismillenial = () => {
            console.log(this.yob >= 1981 && this.yob <= 1996 ? `hey!,${this.myName} is a millenial` : `hey!,${this.myName} is not a millenial`);
            //! since an arrow function does not get its "this" keyword , it uses the "this" of its surrounding scope(calcAge()), which will point to person3 object.
        }

        ismillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`hey! ${this.myName}`);
    }
}

person4.calcAge();


//*********************************************************** */
const person5 = {

    myName: "garv bhai",

    firstThis: function () {
        console.log("You are in firstThis", this);
        //* here this is person5 object because it is called by the object.

        const secondThis = () => {

            console.log("You are in secondThis", this);

            //* here since we are in an arrow function, we dont have our "this" keyword, we uise this of surrounding scope that is firstTHis(), where "this" was person5 object.
            //* in other words we inherit this.

            const thirdThis = () => {
                console.log("You are in thirdThis", this);

                //* we didnt get our "this", so we used this of secondThis which was using "this" of firstThis, so still here "this" points to person5 object.
            }

            thirdThis();
        }

        secondThis();
    }

}

person5.firstThis();

//*********************************************************** */

const person6 = {

    myName: "garv bhai",

    firstThis: function () {
        console.log("You are in firstThis", this);
        //* here this is person5 object because it is called by the object.

        const secondThis = function () {

            console.log("You are in secondThis", this);

            //* here this is undefined, becuase a normal fucntion call

            const thirdThis = () => {
                console.log("You are in thirdThis", this);

                //* we didnt get our "this", so we used this of secondThis which is undefined.
            }

            thirdThis();
        }

        secondThis();
    }

}

person6.firstThis();