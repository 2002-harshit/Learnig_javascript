//* falsy values are the falues which when converetd to boolean retuen a false. In js tehre are only 5 falsy values
//*      0,"",undefined,null,NaN
//* everything else is a truthy value

console.log(Boolean("harshit"))
console.log(Boolean(undefined))
console.log(Boolean(""))
console.log(Boolean("0"));//this will be true becuase it is non empty string
console.log(Boolean(0))
console.log(Boolean({}));
//! an empty object is not a falsy value

//* Boolean function is hardly used because these values are type coerced

const money=100;
if(!money)//here money is type coerced to boolean
{
    console.log("No money")
}
else
{
    console.log("Money")
}

//* lets check whether a variable is not defined or not
let height;
if(height)//since height is undefined which is falsy so value
{
    console.log("Ya its defined")
}
else
{
    console.log("pencho kithe defined aa")
}

//! but even height=0 will trigger else because it is also falsy so this is a logical bug we will fix this using logical operators in future


