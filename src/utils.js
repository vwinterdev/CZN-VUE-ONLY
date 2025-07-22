export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomFrom8to9 = () => {
    return random(8, 9)
}

export const getRandomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}