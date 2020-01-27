var jack = {
  firstName: "Jack",
  lastName: "John",
  breakfast: "Eggs",
  lunch: "Beans",
  dinner: "Spinach"
}
var sally = {
  firstName: "Sally",
  lastName: "John",
  breakfast: "Toast",
  lunch: "Beans",
  dinner: "Chicken"
}
var lisa = {
  firstName: "Lisa",
  lastName: "John",
  breakfast: "Avacados",
  lunch: "Beans",
  dinner: "Tacos"
}
var tom = {
  firstName: "Tom",
  lastName: "John",
  breakfast: "Avacados",
  lunch: "Cheese",
  dinner: "Tacos"
}

let people = [jack, sally, lisa, tom];

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let peopleIndex = 0;

prevBtn.addEventListener("click", function() {
  console.log("people index: " + peopleIndex);
  swapData(people[peopleIndex]);
  if (peopleIndex > 0) {
    peopleIndex--;
  } else {
    console.log("limit reached");
  }

})
nextBtn.addEventListener("click", function() {
  console.log("people index: " + peopleIndex);
  swapData(people[peopleIndex]);
  if (peopleIndex < people.length - 1) {
    peopleIndex++;
  } else {
    console.log("limit reached");
  }

})

function swapData(person) {
  let firstName = document.getElementById('firstName');
  firstName.innerHTML = person.firstName;
  let lastName = document.getElementById('lastName');
  lastName.innerHTML = person.lastName;

  document.getElementById("breakfast").innerHTML = person.breakfast;
  document.getElementById("lunch").innerHTML = person.lunch;
  document.getElementById("dinner").innerHTML = person.dinner;

}
