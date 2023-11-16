const randomItem = require("./randomItem")


const makeDragon = () => {
    const dragonSizes = ["big", "medium", "small"]
    const dragonAbilities = ["fire", "ice", "lightening", "Time"]
    return randomItem(dragonSizes) + " " +
        randomItem(dragonAbilities) + " " +
        "dragon"
}

module.exports = makeDragon