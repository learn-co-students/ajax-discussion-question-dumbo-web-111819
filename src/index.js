const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const state = document.getElementById("state");
const city = document.getElementById("city");
const street = document.getElementById("street");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");





console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {

  
  
  // console.log(result[0] )
  // console.log("CONTENT LOADED!");
});
const button = document.querySelector(".btn.btn-primary")
button.addEventListener('click', function(){
  console.log("Printing a Message!")
  fetchData()

})

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json => jsonToHtml(json))
}

function jsonToHtml(data){
  let result=data.results[0]
  console.log(result)
  email.innerHTML=result.email
  fullname.innerHTML=`${result.name.first} | ${result.name.last}`
  state.innerHTML =result.location.state
  city.innerHTML =result.location.city
  street.innerHTML = `${result.location.street.number}|${result.location.street.name}`
  postcode.innerHTML =result.location.postcode
  phone.innerHTML = result.phone
  cell.innerHTML =result.cell
  date_of_birth.innerHTML = result.dob.date

}
