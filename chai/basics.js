
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

console.log(loginusermessage());
