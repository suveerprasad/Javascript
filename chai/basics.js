
function printmyname(){
    console.log("Suveer");
}

function addtwonum(num1,num2){
    return num1 + num2;
}

// let value = addtwonum(1,"2");
// console.log(value);

function loginusermessage(username){
    if(!username){
        return "Invalid";
    }
    return `${username} just logged in`;
}

// console.log(loginusermessage());

function calculateprice(val1,val2,...num1){
    return num1;
}

// console.log(calculateprice(200,400,500,900));

const user = {
    username : "Suveer",
    price : 199
}

function handleobj(obj){
    console.log(`Username : ${obj.username}`);
}

// handleobj({
//     username : "Sagar"
// })

// handleobj(user);

// let c = 300;
//  if(true){
//     let c = 30;
//     console.log(c);
//  }
//  console.log(c);

// function one(){
//     const username = "Suveer"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two();
//     // console.log(website);
// }

// one();

// console.log(addone(5));
// function addone(num){
//     return num + 1;
// }

// addtwo(5);

// const addtwo = function(num){
//     return num + 2;
// }

const user1 = {
    username : "Suveer",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} logged in`)
        console.log(this);
    }
}

// user1.welcomeMessage();
// user1.username = "Vijay";
// user1.welcomeMessage();

// function chai(){
//     console.log(this);
// }

// chai();

// const chai = () => {
//     let username = "Suveer"
//     console.log(this);
// }
// chai();

// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addtwo = (num1,num2) => (num1 + num2)
// console.log(addtwo(2,3));


// {function chai(){
//     console.log('DB Connected');
// }}{}

//javascript execution context

//global execution context



