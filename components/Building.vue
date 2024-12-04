<template>
    <div class="building"></div>
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
    const matterContainer = document.querySelector('.building');

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
        // FIRST TWO COLUMNS
        Rectangle(mWidth * 0.33, mHeight * 0.8, mWidth * 0.1, mHeight * 0.3),
        Rectangle(mWidth * 0.67, mHeight * 0.8, mWidth * 0.1, mHeight * 0.3),

        // FIRST PLANK
        Rectangle(mWidth / 2, mHeight * 0.5, mWidth * 0.5, mHeight * 0.1),

        // SECOND STORY COLUMNS
        Rectangle(mWidth * 0.33, mHeight * 0.3, mWidth * 0.1, mHeight * 0.3),
        Rectangle(mWidth * 0.67, mHeight * 0.3, mWidth * 0.1, mHeight * 0.3),

        //SECOND PLANK
        Rectangle(mWidth / 2, mHeight * 0.1, mWidth * 0.5, mHeight * 0.1),

        // OBJECT FROM ABOVE
        Rectangle(mWidth / 2, mWidth * -0.1, mWidth * 0.1, mHeight * 0.3),
        
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

    // *
    // * SPAWN RECTANGLES
    const spawnRectangles = () => {
        // Iterate through rectangles[]
        if (rectangleIndex < rectangles.length) {
            Composite.add(engine.world, rectangles[rectangleIndex]);
            rectangleIndex++;
        } else {
            // Clear the interval once all rectangles are added
            clearInterval(rectangleInterval);
        }
    };

    // Start spawning rectangles
    const rectangleInterval = setInterval(spawnRectangles, 500);
    
    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
})
</script>

<style scoped>
.building{
    width: 100%;
    height: 100%;
}
</style>