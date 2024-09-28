// const promiseone = new Promise(function(resolve,reject){
//     //do an async task
//     //db calls , cryptography, network call
//     setTimeout(function(){
//         console.log('Async..');
//         resolve()
//     },1000);
// })

// promiseone.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2...");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : "Chai",email : "chai@example.com"})
//     },1000)
// })
// promise3.then(function(user){
//     console.log(user);
// })

// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username : "sai"})
//         }else{
//             reject('Error : ..@...')
//         }
//     },1000)
// })

// promise4.then( (user) => {
//     console.log(user)
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("Done something")
// })

// const promise5 = new Promise( (resolve,reject) => {
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username : "JavaScript", password : "123"})
//         }else{
//             reject('Error : ..@...')
//         }
//     },1000)
// })

// async function consume5() {
//     const response = await promise5
//     console.log(response);
// }

// consume5();

// async function getallusers() {
//     fetch()
// }

// async function getallusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// getallusers()

// fetch('https://jsonplaceholder.typicode.com/todos/1').then( (response) => {
//     return response.json()
// }).then( (data) => {
//     console.log(data)
// }).catch( (error) => {
//     console.log(error)
// })

