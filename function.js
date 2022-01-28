function firstFunction(){
    console.log('Function Function & Function is real ');
    console.log('Learn Learn Learn ');
}
firstFunction();

function samucha (price){
    console.log(' Samucha ante dici '+ price );
    var samuchaPrice = 10 ; 
    var samuchaPabo = price / samuchaPrice ; 
    return samuchaPabo ;
}
var tk = 100 ;
var yourSamucha = samucha(tk);
console.log('Your samucha ' + yourSamucha);

// Function Subtraction 
var num1 = 100 ;
var num2 = 50 ; 
function subtraction(a,b){
    var result = a - b ;
    return result;
}
var yourResult = subtraction(num1, num2) ;
console.log(yourResult);

// Function Modulus 
var m1 = 52 ;
var m2 = 10 ; 
function myRoll (nine , ten){
    console.log('My School Roll ');
    var student = nine % ten ;
    return student; 
}
var studentId = myRoll (m1 , m2) ;
console.log(studentId);