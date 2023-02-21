"use strict";
/*let func1 = function () {
    let a = 2;
    let b = 3;
    var c = 10;
};

// console.log(a);//! this is a reference error
// console.log(c);//! this is also a reference error

//* testing the block level scope
{
    let d = 1;
    const e = 4;
    var f = 2;
}

// console.log(d);//! this is a reference error
// console.log(e);//!also an error
// console.log(f);///! this is NOT AN ERROR BECAUSE ITS VAR AND it DOES NOT HAVE BLOCK LEVEL SCOPE

let func2 = function () {
    {
        var z = 1;
    }
    console.log(z);//! this is fine because var does not have block level scope
}

func2();
console.log(z);//!this is an error because var has function level scope so it is only accessible inside the func2
*/

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    //*since firstName is not present in the calcAge() scope, JS peroforms a vraiable lookup int he scope chiana nd finds it in the global scope.

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;


            // const firstName = "khanna" 
            //* if the above statement is added, then str will be logged as khanna because JS finds value in the current scope first and then peroforms the vraiable lookup.

            // output = 2;
            //* in the above statement i am reassigning "output" variable so it gets changed

            const output = 2;
            //! instead if i would have written const output=2 then the value of the outside scope's "output" wont be reassigned because i have just declared my own "output" variable





            const str = `Oh you are also a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        console.log(millenial);//! this is not block scoped, and is function scoped therefore it is accessible outside the block
        // console.log(add(2, 3));
        /*
         * this add function is not accessible outside becuase functions are block scoped in the strict mode, and sicne we are using srict mode, add is only accessible inside the if block
         *if strict mode is removed, then it becomes function scoped and is accessible outside the if block also, but inside the printAge() duw to function scopeness.  
        */

        console.log(output);
    }

    printAge();
    // add(2, 3);//!this is an error
    return age;
}

const firstName = "harshit";
calcAge(1990);

