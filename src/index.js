const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
//   console.log("CONTENT LOADED!");
//   console.log("Hello")
 
// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi") 
//   })
 
(params) => {
  
}
// console.log("Sup?")

function fetchData(){
    fetch('https://randomuser.me/api/')
    .then( resp => resp.json() )
    .then( json => console.log(json))
  
}


fetchData()
});


