let rectangle = {
    length: 2,
    breadth: 4
};

// for in loop 

for(let key in rectangle){
    console.log(key,rectangle[key])
}

// for off loop

for(let key of Object.entries(rectangle)){
    console.log(key);
}


// how to find property


if('color' in rectangle){
    console.log('present');
}
else{
    console.log("absent");
}


/// -----------------------------          object Cloning-----------

let src ={
    a:10,
    b:20,
    c:30
}

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;

// console.log(dest);


////==========================             Assign clonign ------------------

let dest1 = Object.assign({},src);  // we can also use multiple sources

console.log(dest1);
src.a++;


/// ----------------------   object cloning======================================================


let dest2 = {...src};

console.log(dest2);



//---------------------------=========================              Arrays  -------------------=========================== ********
//))))))________________________________________))))))))))))))))))))((((((((((((((((((((((((((()))))))))))))))))))))))))))

// console.log("arrays");
 let numbers = [1,2,3,4,5];
// console.log(numbers);

// numbers.push(9); //  -----   push is used for adding in the ending
// console.log(numbers);

// numbers.unshift(8); // -------  used to add in the starting
// console.log(numbers);

// numbers.splice(2,0,"a","b"); // to insert at middle 
// console.log(numbers);   


//-----------===        SEARCHING ---
console.log(numbers);

console.log(numbers.indexOf(9)); // returns index of element if present

// we want to check if a number exists in an array or not


console.log(numbers.includes(7));  // inbuilt function to find if present or not

console.log( numbers.indexOf(4,2) ); // here 2 is the starting index


// ----------------------        doint the abobe opetation on  refrence objects -------  ====    abobe are premitives   

let courses =[ 
    {no:1, naame:'aditya'},
    {no:2,naam:'thakur'}
];

console.log(courses);

//console.log(courses.indexOf({no:1,naam:'thakur'})); // it gives wrong because the address is different in both indexOf and includes

/// we use different way to find if it exists or not

let course = courses.find(function(courses){
    return courses.naame == 'love';
})

console.log(course); // false




