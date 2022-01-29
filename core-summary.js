// // variable , array ,object , function ,loop , if,else 

// // variable 
// var myName = 'Emtiaz ';

// // array  
// var favouriteBooks = ['Mathematics', 'Physics', 'Chemistry', 'English'] ;
// favouriteBooks[1] = 'Bangla';
// // console.log(favouriteBooks); 

// if(favouriteBooks.indexOf('Physics') == -1){
//     console.log('Physics book is not here');
// }
// if(favouriteBooks.indexOf('English') != -1){
//     console.log('English book is  here');
// }

// // loop  
// var num = 0 ;
// while (num <= 10 ){
//     console.log(num);
//     num++;
// }

// // for (var i = 0 ; i < 10 ; i++){
// //     console.log(i);
// // }

// // function  

// function add (num1 , num2 , num3){
//     var total = num1 + num2 + num3 ; 
//     return total ;
// }
// var value1 = 10 ;
// var value2 = 20 ;
// var value3 = 30 ;
// var valueSum = add(value1 , value2, value3) ; 
// console.log(valueSum);


// // object  
// var myLaptop = {
//     name : 'HP',
//     price : 57000 ,
//     ram : '12 GB',
//     ssd : 250 ,
//     hdd : '1TB',
//     screenSize : 15.6 
// }
// myLaptop['ssd'] = 512 ;
// myLaptop.ssd = '1TB;'
// console.log(myLaptop);

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(typeof result);