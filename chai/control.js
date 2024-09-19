//control flow in javascript

// console.log(2=="2");   //no datatype checking
// console.log(2==="2");  //datatype check
// const isuserlogged = true;
// if(isuserlogged){
// }

// const adder = (num1,num2) => {
//     return{
//         func1 : (num3) => {
//             if(num1==num3){
//                 return true;
//             }
//         },
//         func2 : (num3) => {
//             if(num2==num3){
//                 return true;
//             }
//         }
//     }
// }

// console.log(adder(2,3).func1(2));
// console.log(adder(2,2).func1(2));

//falsy values:

// false, 0, -0, BigInt, "",null, undefined, NaN

// //truthy values : 

// "0", 'false', " ", [],{}, function(){};

// const useremail = {};
// if(useremail.length ===0){
//     console.log("Empty");
// }
// if(Object.keys(useremail).length === 0){

// }

//nullish coalescing operator

// val1 = 5 ?? 10;
// val = null ?? 10;
// console.log(val);

//ternary operator

//(condition) ? true : false

// const arr = [1,2,3,4,5];

// for (const val of arr) {
//     console.log(val);
// }

// const map = new Map();
// map.set('IN',"India");
// map.set('US',"United States");
// map.set('CH',"China");
// for(const [key,value] of map){
//     console.log(key,' : ',value);
// }

// const obj = {
//     js : "javascript",
//     cpp : "c++"
// }

// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`);
// }

// const coding = ["js","ruby","cpp",'python'];

// coding.forEach(function (item) {
//     console.log(item);
// })

//filter map and reduce

// const coding = ["js","ruby","cpp",'python'];
// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

const numbers = [1,2,3,4,5,6,7,8,9];

// const newnums = numbers.filter( (num) =>{
//     return num > 4
// });
// console.log(newnums);

// let arr = numbers.map( (num) => num+10); 
// console.log(arr);

// let newnums = numbers
//                 .map((num) => num*10)
//                 .map(((num) => num + 1))
//                 .filter((num) => num>=40)
// console.log(newnums);

//reduce

const arr1 = [1,2,3,4];

const initial = 0;

// const sum = arr1.reduce( (acc,currval) => {
//     return acc + currval
// }, 0);

// const sum = arr1.reduce( (acc,curr) => acc + curr,0);

// console.log(sum);

const shoppingcart = [
    {
        itemname : "js-course",
        price : 349
    },
    {
        itemname : "python-course",
        price : 3499
    },
    {
        itemname : "DSA-course",
        price : 2349
    },
    {
        itemname : "webdev-course",
        price : 3000
    }
]

const sum = shoppingcart.reduce( (acc,item) => acc+item.price,0);
console.log(sum);
