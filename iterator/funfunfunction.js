const makeDragon = require("./makedragon")

const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonSpawnd = Math.random() > 0.75
                if (!enoughDragonSpawnd)
                    return {
                        value: makeDragon(),
                        done: false
                    }
                return { done: true }
            }
        }
    }
}

for (const dragon of dragonArmy) {
    dragon //?
}