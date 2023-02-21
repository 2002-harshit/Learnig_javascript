// const day="friday"
// //! it exact as cpp

// switch(day)
// {
//     case "monday":
//         console.log("monday");
//         console.log(1);
//         //all the lines under the case block are executed withpuit using {}
//         break;
    
//     case "tuesday":
//         console.log("tuesday");
//         console.log(2);
//         break;
    
//     default:
//         console.log("This is default");
// }

// //ternary operato r
// let age=Number(prompt("age"));
// age>=18?console.log("adult"):console.log("minor");
// //* ternary can also return a value

// const drink= age>=18?"yes":"no";
// console.log(drink);

const bill= 274;
const tip=(50< bill && bill<275)?0.15*bill:0.2*bill;
console.log(tip)