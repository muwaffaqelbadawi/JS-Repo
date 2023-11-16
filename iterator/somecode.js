const randomNumber = require("random-number")


function randomItem(array) {
    const randomIndex = randomNumber({
        min: 0,
        max: array.length,
        integer: true

    })
    return array[randomIndex]
}

const makeDragon = () => {
    const dragonSizes = ["big", "medium", "small"]
    const dragonAbilities = ["fire", "ice", "lightening"]
    return randomItem(dragonSizes) + " " +
        randomItem(dragonAbilities) + " " +
        "dragon"
}
makeDragon() //?