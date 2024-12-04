<template>
    <header>
        <nav>
            <NuxtLink to="/"><img class="logo" :src="Logo" alt="Logo" title="Logo" > </NuxtLink>
            <NuxtLink to="/about">about</NuxtLink>
            <NuxtLink>projects</NuxtLink>
            <NuxtLink>services</NuxtLink>
            <NuxtLink>let's chat</NuxtLink>
        </nav>
    </header>
    
</template>

<script setup>
import Logo from '~/assets/imgs/logo.svg'


</script>

<style scoped>

nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: var(--padding-inline-page);
    padding-block: var(--padding-block-general);
    z-index: 10000;
    mix-blend-mode: difference;
}

nav > a {
    font-size: var(--font-size-nav);
    font-family: var(--font-family-mulish);
    text-decoration: none;
    mix-blend-mode: difference;
}

</style>