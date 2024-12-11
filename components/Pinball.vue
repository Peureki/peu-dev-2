<template>
    <div class="pinball"></div>
</template>

<script setup>
import Matter from 'matter-js'
import Logo from '~/assets/svgs/logo.svg'

// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

const balls = [];

onMounted(() => {
    // Needs to be inside onMounted because DOM has not been made yet 
    const matterContainer = document.querySelector('.pinball');

    // * 
    // * MATTER CONTAINER WIDTH, HEIGHT
    // * 
    const mWidth = matterContainer.clientWidth,
        mHeight = matterContainer.clientHeight;

    // const plank = [
    //     Plank(mWidth/2, mHeight, mWidth, 2),
    // ]

    const rectangles = [
        // FIRST TWO COLUMNS
        Rectangle(200, 0, 100, 100),
    ]

    // const balls = [
    //     Ball(50, 0, 20)
    // ]

    const spinPlanks = [
        SpinPlank(200, 300, mWidth / 2, mWidth / 75, 0.03 * positiveOrNegative()),
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
    Composite.add(engine.world, [ ...spinPlanks]);

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
.pinball{
    width: 100%;
    height: 100%;
}
</style>