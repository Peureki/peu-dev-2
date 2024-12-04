export const getRandomBtw = (min, max) => {
    return Math.random() * (max - min) + min;
}

// *
// * GET RANDOM MAIN COLOR
// * Green, pink, blue
// *
export const getRandomColor = () => {
    const colors = [
        '#26F527',
        '#ff1178',
        '#0abcf7'
    ];
    return colors[Math.floor(Math.random() * colors.length)]
}