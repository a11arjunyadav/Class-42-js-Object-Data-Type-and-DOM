
let car1 = {
     //1. p.v. (many)
    brand:'TATA',
    year:2023,
    modal:"Hariar",
    color:'black',
    type:"SUV",
    engine:'EV/petrol/Diesal',
    price:2000000,
     //2. mathod (many)
     getFullDetail(){

        return this.brand+' '+this.year+" "+this.modal+' '+this.color+" "+this.type+' '+this.engine;
     }
}
var car2 = {
    //1. p.v. (many)
   brand:'Mahindra',
   year:2022,
   modal:"Thar",
   color:'black',
   type:"Gypcy",
   engine:'Diesal',
    price:25000000,
    //2. mathod (many)
    getFullDetail(){

        //Every function return somthink
        return this.brand;
    }
}
const car = {
    //1. p.v. (many)
   brand:'Hundai',
   year:2023,
   modal:"Inova",
   color:'gray',
   type:"Gypcy",
   engine:'Diesal',
    price:30000000,
    //2. mathod (many)
}

//console.log(car1.getFullDetail());
console.log(car1.brand); //object proparty
console.log(car2['brand']); //object[proparty]
let x="brand";
console.log(car3[x]); //object[expration] is an expration