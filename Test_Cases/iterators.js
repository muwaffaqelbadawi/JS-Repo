const dragons = [
    "cool dragon",
    "angry dragon",
    "nasty dragon"
]

// Symbol.iterator //?

const iterator = dragons[Symbol.iterator]()
iterator.next() //?
iterator.next() //?
iterator.next() //?
iterator.next() //?

for (const char of dragons[0]) {
    char //?
}

for (const dragon of dragons) {
    dragon
}