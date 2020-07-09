const generateRandomArray = (size, rangeMax) => {
    const output = [];
    for(let i = 0; i < size - 1; i++) {
        const randomInt = Math.floor(Math.random() * (rangeMax + 1));
        output.push(randomInt);
    }

    return output;
}

exports.generateRandomArray = generateRandomArray;