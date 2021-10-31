function randomGen(min = 1, max = 60, quant = 6) {

    let draws = []

    for (let i = 0; i < quant; i++) {
        let num = parseInt(Math.random() * (max + 1 - min) + min)
        while (draws.includes(num)) {
            num = parseInt(Math.random() * (max + 1 - min) + min)
        }
        draws.push(num)
    }
    return draws.sort((a, b) => a - b)
}

console.log(randomGen(1, 60, 60))
