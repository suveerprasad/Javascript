let answer = 0;
let vis = 0;
let temp = '';
display();

function display(){
    const ele = document.querySelector('.calculation');
    ele.innerHTML = answer;
}

function clear(){
    const ele = document.querySelector('.calculation');
    ele.innerHTML = 0;
}

function funcer(value){

    if(isFinite(value)){
        temp = temp+value;
    }else{
        if(value=='+'){
            
        }
    }

    display;
}




