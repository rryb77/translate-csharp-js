console.log("Do you believe in magic?")
console.log("------------------------")

const getAllSpells = () => {
    let spells = [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ]

    return spells
}

const displaySpellBooks = () => {
    
    let theSpells = getAllSpells()
    let goodSpells = []
    let evilSpells = []

    for(spell of theSpells){
        if(spell.IsEvil === true){
            goodSpells.push(spell)
        } else {
            evilSpells.push(spell)
        }
    }

    console.log('Good Book')

    for(spell of goodSpells) {
        console.log(`  ${spell.Name}`)
    }

    console.log("")

    console.log('Evil Book')
    
    for(spell of evilSpells) {
        console.log(`  ${spell.Name}`)
    }
}

displaySpellBooks()