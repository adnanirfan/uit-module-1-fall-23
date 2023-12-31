// String "Module 1", 'Module 1'
// Number 1,2,4,5
// Boolean true, false

// Brackets
// [] Square
// {} Curly
// () Round

const cleanCities = [];
let isFound = false;
cleanCities.push("Karachi");
cleanCities.push("Lahore");
cleanCities.push("Islamabad");

const cityToCheck = prompt("Enter City name to check");
for (let i = 0; i < cleanCities.length; i++) {
  if (cityToCheck === cleanCities[i]) {
    console.log("FOUND...");
    isFound = true;
    break;
  }
}

if(!isFound){
  console.log('City is not one of the cleanest cities')
}
