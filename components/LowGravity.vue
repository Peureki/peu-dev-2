<template>
    <div class="low-gravity"></div>
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

onMounted(() => {
    // Needs to be inside onMounted because DOM has not been made yet 
    const matterContainer = document.querySelector('.low-gravity');

    // * 
    // * MATTER CONTAINER WIDTH, HEIGHT
    // * 
    const mWidth = matterContainer.clientWidth,
        mHeight = matterContainer.clientHeight;

    const plank = [
        Plank(mWidth/2, mHeight, mWidth, 2),
    ]

    const rectangles = [
        // FIRST TWO COLUMNS
        Rectangle(200, 0, 100, 100, Logo),
        
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
    Composite.add(engine.world, [...rectangles, ...plank]);
    
    // run the renderer
    Render.run(render);

    // create runner
    let runner = Runner.create();

    // run the engine
    Runner.run(runner, engine);
})
</script>

<style scoped>
.low-gravity{
    width: 100%;
    height: 100%;
}
</style>