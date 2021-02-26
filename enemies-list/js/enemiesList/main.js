let response = prompt("Who would you like to say hello to?")


if (response === ""){
    console.log("Fine, don't say 'hello'!")
} else {
    console.log(`Hello, ${response}`)
}