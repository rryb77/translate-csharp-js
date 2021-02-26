// Setup the array of names
let names = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

// Print some output to the console
console.log("All Place Names")

for (theName of names){
    console.log(theName)
}

console.log("")

let filteredNames = names.filter(n => n.startsWith("The"))

console.log("'The' Place Names")

for (theName of filteredNames) {
    console.log(theName)
}