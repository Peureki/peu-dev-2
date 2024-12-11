import Matter from 'matter-js'

export const Ball = (x, y, r, texture = null) => {
    return Matter.Bodies.circle(x, y, r, {
        friction: 0, 
        restitution: 0.5,
        render: {
            fillStyle: '#ff1178', // Pink
            sprite: {
                texture: texture,
            }
        }
    })
}

export const Rectangle = (x, y, w, h, texture = null) => {
    return Matter.Bodies.rectangle(x, y, w, h, {
        friction: 0.9, 
        restitution: 0.8,
        render: {
            fillStyle: '#0abcf7', // Pink
            sprite: {
                texture: texture,
            }
        }
    })
}



export const Domino = (x, y, w, h, angle = 0) => {
    return Matter.Bodies.rectangle(x, y, w, h, {
        friction: 0.4, 
        restitution: 0.2,
        density: 0.002,
        angle: Math.PI * angle,
        render: {
            fillStyle: getRandomColor(), // Pink
        }
    })
}

// * 
// * Pair this with an interval to continously create balls 
// * 
// * Use @param array to store the balls and track them so when they go out of bounds, remove (using a different function)
export const createBalls = (x, y, r, array, texture = null) => {
    const newBall = Ball(x, y, r, texture);
    array.push(newBall); 
    return newBall;
}

// * 
// * For long planks that have collision
// * 
// * angle is in %. ie 0.10 = change angle by 10% upwards
export const Plank = (x, y, w, h, angle = 0, fill = '#ececec') => {
    return Matter.Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        restitution: 0.9,
        angle: Math.PI * angle,
        render: {
            fillStyle: fill,
        }
    }); 
}

export const SpinPlank = (x, y, w, h, angle = 0) => {
    return Matter.Bodies.rectangle(x, y, w, h, {
        isStatic: true,
        angle: Math.PI * angle,
        render: {
            fillStyle: '#ececec',
        }
    })
}

// * 
// * Randomly get a positive or negative result
// * Use this return as a way to make something do the opposite (like spin backwards or forward)
// *
export const positiveOrNegative = () => {
    const randomNumber = Math.random(); 

    if (randomNumber < 0.5){
        return -1;
    }
    return 1; 
}
// Return random range
// Use this for: 
// Random X position for summoning balls
export const randomRange = (min, max) => {
    return Math.random() * (max - min) + min; 
}
