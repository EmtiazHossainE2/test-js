if(3 < 5 ){
    console.log('Yes true');
}
/* var age = 16
if(age < 17){
    console.log('You are child');
} */

else if ( age >= 20){
    console.log('You are adult');
}
else{
    console.log('you are not adult');
}

var num = 9 
if(num > 1){
    if(num >= 10){
        console.log('greater than 10');
    }
    else {
        console.log(' less than 10');
    }
}
var age = 61
if(age > 18 ){
    if(age > 30 && age <= 60 ){
        console.log('You are a complete man');
    }
    else if(age > 60 ){
        console.log('you are an old man ');
    }
    else{
        console.log('you are young');
    }
}else{
    console.log('you are child');
}

var weekDay = 'friday';
switch(weekDay){
    case 'Saturday' : 
        console.log('Saturday , Today is closed');
        break ;
    case 'Sunday' :
        console.log('Office Day');
        break;
    case ' Monday' :
        console.log('Normal Working Day');
        break;
    case ' Tuesday' :
        console.log('Normal Working Day');
        break;
    case ' Wednesday' :
        console.log('Normal Working Day');
        break;
    case ' Thursday' :
        console.log('Half Working Day');
        break;
    default :
        console.log('Holiday');
}