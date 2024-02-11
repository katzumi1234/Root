function getRandomInt(max) {
    const number = Math.floor(Math.random() * max);
    if(number !== 0)
        return number
    else getRandomInt(max);
}

export {
    getRandomInt
}