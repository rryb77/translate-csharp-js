console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const dieRoll = () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);

    let die = Math.floor(Math.random() * (max - min) + min)

    let roll = {
        value: die
    }

    return roll
}

for(let i = 0; i < 10; i++) {
    
    let die1 = dieRoll()
    let die2 = dieRoll()

    let total = die1.value + die2.value
    let message = `${die1.value} + ${die2.value} = ${total}`.toString()

    if (die1.value === die2.value){
        message = message + ' DOUBLES!'
    }

    console.log(message)
}