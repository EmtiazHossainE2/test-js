var mySelf = {
    name : 'Emtiaz',
    age : 21 ,
    homeTown : ' Rangpur Sadar',
    ward : 13 
};
console.log(mySelf.homeTown);
mySelf.name = 'Emtiaz Hossain Emon';
mySelf['age'] = 20 ;


var myAge = 'age';
var newAge = mySelf.age = 22 ;
var village = mySelf.homeTown = 'Pirjabad';
mySelf[myAge] = 24 ;
console.log(mySelf);
console.log(newAge);
console.log(village);
