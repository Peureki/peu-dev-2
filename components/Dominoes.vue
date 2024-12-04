<template>
    <div class="dominoes"></div>
</template>

<script setup>
import Matter from 'matter-js'

// module aliases
let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

onMounted(() => {
    // Needs to be inside onMounted because DOM has not been made yet 
    const matterContainer = document.querySelector('.dominoes');

    // * 
    // * MATTER CONTAINER WIDTH, HEIGHT
    // * 
    const mWidth = matterContainer.clientWidth,
        mHeight = matterContainer.clientHeight;

    // Construct levels of planks
    const planks = [
        Plank(mWidth/2, mHeight, mWidth * 1.5, 10, 0),
    ]

    // Initialize index as 0 to use as a condition for spawnRectangles()
    let rectangleIndex = 0;
    const rectangles = [
        // FIRST DOMINO
        Domino(0, mHeight * 0.8, mWidth * 0.01, mHeight, 0.1),
        Domino(mWidth * 0.05, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.1, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.15, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.2, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.25, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.3, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.35, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.4, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.45, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.5, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.55, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.6, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.65, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.7, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.75, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.8, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.85, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.9, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth * 0.95, mHeight * 0.8, mWidth * 0.01, mHeight),
        Domino(mWidth, mHeight * 0.8, mWidth * 0.01, mHeight),
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
    Composite.add(engine.world, [...planks, ...rectangles]);
    
    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
})
</script>

<style scoped>
.dominoes{
    width: 100%;
    height: 100%;
}
</style>