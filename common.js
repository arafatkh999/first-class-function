//1.Function Statement same as Function Declaration
//You can call this function berfore initialization
a();
function a(){
    console.log('HelloWorld')
}

//2.Function Expression
//You can not call this function berfore initialization
// b()
const b = function(){
    console.log('b called')
}
//You need to call this function from here
b();

//3.Anonymous Function
//You can not use anonymous function as a common function , it will create syntaxError but you can use it as values.You can assign this like function variable like function expression
// function (){

// }

//4.Named Function Expression
const c = function xyz(){
    console.log('c called')
}
c();
// xyz();
//you can not call xyz() because it is act now as a local variable, you will get an referenceError

//5.Different between parameters & arguments
const d= function(parameter1, parameter2){

} 
d(argument1,argument2);


//6.First Class Function
//Ability to use a function as values and assign it to a variable and can be passed as an argument into another function and can be return out of another function that is first class function
//Same as first class citizens
const e = function(parameter1){
    return function(){

    }

}
e(function(){

})


//7.Arrow Function

const f =()=>{
    
}

