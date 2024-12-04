<template>
    <div class="matter-container"></div>
</template>

<script setup>
import Matter from 'matter-js'
import Design from '~/assets/svgs/design.svg'

// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;



const balls = [];

// const createBalls = () => {
//     const newBall = Ball(50, -50, 20);
//     balls.push(newBall);
//     return newBall; 
// }



onMounted(() => {
    // Needs to be inside onMounted because DOM has not been made yet 
    const matterContainer = document.querySelector('.matter-container');

    // * 
    // * MATTER CONTAINER WIDTH, HEIGHT
    // * 
    const mWidth = matterContainer.clientWidth,
        mHeight = matterContainer.clientHeight;

    // Construct levels of planks
    const planks = [
        Plank(0, (mHeight/5), mWidth, 10, 0.07),
        Plank(mWidth, (mHeight/3), mWidth, 10, -0.07),
        Plank(0, (mHeight/2), mWidth, 10, 0.07),
        Plank(mWidth, (mHeight/1.5), mWidth, 10, -0.07),
        Plank(0, (mHeight/1.25), mWidth, 10, 0.07),
    ]

    // create an engine
    let engine = Engine.create();

    // create a renderer
    let render = Render.create({
        element: matterContainer,
        // *
        // * CHANGE STYLES OF CANVAS HERE
        // *
        options: {
            background: 'transparent',
            width: mWidth,
            height: mHeight,
            wireframes: false,
        },
        engine: engine
    });

    // add all of the bodies to the world
    Composite.add(engine.world, [...planks]);
    setInterval(() => {
        Composite.add(engine.world, createBalls(50, -50, 20, balls));
    }, 1000)

    // Monitor and remove offscreen bodies
    // 'afterUpdate' updates every few ms to check on the individual balls
    Matter.Events.on(engine, 'afterUpdate', () => {
        // Go through each active ball and get their position
        balls.forEach((ball, index) => {
            const { x, y } = ball.position;
            // If their position is outside the canvas, then remove
            if (x < -50 || x > mWidth + 50 || y > mHeight + 50) {
                Composite.remove(engine.world, ball); // Remove from world
                balls.splice(index, 1); // Remove from the balls array
            }
        });
    });
    

    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
})
</script>

<style scoped>
.matter-container{
    width: 100%;
    height: 100%;
}
</style>