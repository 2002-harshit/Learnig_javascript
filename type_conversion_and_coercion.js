//*type conversion- when the programmer does manually
//*type coercion- when the js automatically does it

const inputAge="1991";
console.log(inputAge+10);//this will concatenate due to type coercion 199110

console.log(Number(inputAge)+10)//2001

console.log(Number("dsdsd"))// this will output NaN which means invlaid number

let val=String(23);
console.log(typeof(val));//this is a string

//* lets look at type coercion now
console.log("hello"+11);//11 is converted to string
console.log("23"+12);//12 is converted to string
console.log('23'-13)//here string is converted to number
console.log('23'-10+'5')
//left to right
// - sign basically triggers conversion to number because - is not defined for strings but + is defined for strings; so 23-13=10 which is then concatenated with 5 so 135

console.log('23'*'2')// conversion to number
console.log(2*'23')//conversion to number
console.log('23'*2)//conversion to number
