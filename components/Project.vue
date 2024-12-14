<template>
    <section class="projects grid">
        <h3 v-if="headerToggle" class="header-logo">
            <div class="overflow-hidden">
                <div class="overflow-h3 green">our</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-h3 pink">.</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-h3 blue">projects</div>
            </div>
        </h3>

        <img class="project-logo" :src="logo" :alt="`${name}'s logo'`" :title="`${name}'s logo'`">

        <img class="mockup" :src="mockup" :alt="`${name} mockup`" :title="`${name} mockup`">

        <h4>{{ name }}</h4>

        <ul class="attributes">
            <li v-for="attribute in attributes">{{ attribute }}</li>
        </ul>

        <div class="cta-container">
            <a class="cta" :href="href" target="_blank">
                <p>view website</p>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                    <title>Redirect to {{ name }}'s website</title>
                </svg>
            </a>
            <!-- <button class="cta">
                <p>case study</p>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                    <title>Forward to {{ name }}'s case study</title>
                </svg>
            </button> -->

            <!-- <a class="cta secondary" :href="href" target="_blank">
                <p>view website</p>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                    <title>View {{ name }}'s website</title>
                </svg>
            </a> -->
        </div>
        

        <slot name="fact"></slot>      
    </section>
</template>

<script setup>

const props = defineProps({
    headerToggle: {
        type: Boolean,
        default: false
    },
    name: String,
    href: String,
    logo: String, 
    mockup: String,
    attributes: Array 
})

</script>

<style scoped>
.mockup{
    width: 100%;
    border-radius: var(--border-radius-general);
}
/* section {
    margin-bottom: calc(var(--gap-grid) * 4);
} */

section.projects > h3 {
    grid-area: 1 / 1 / 1 / 13;
}
section.projects > h4 {
    grid-area: 2 / 9 / 2 / 13; 
}
section.projects .project-logo {
    grid-area: 2 / 1 / 2 / 2; 
}
section.projects .mockup{
    grid-area: 2 / 3 / 5 / 9;
}
section.projects .attributes{
    grid-area: 3 / 9 / 3 / 13;
}
section.projects .cta-container{
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-button);
    justify-self: flex-start;
    align-self: flex-end;
    grid-area: 4 / 9 / 4 / 13;
}
section.projects .description{
    grid-area: 5 / 9 / 5 / 13; 
}
section.projects :deep(.fact-container){
    align-self: flex-end;
    grid-area: 3 / 1 / 5 / 3;
}
@media (max-width: 768px){
    section.projects > h3 {
        grid-area: 1 / 1 / 1 / 5; 
    }
    section.projects > h4 {
        grid-area: 2 / 1 / 2 / 5;
    }
    section.projects .mockup{
        grid-area: 3 / 1 / 3 / 5;
    }
    section.projects .project-logo{
        grid-area: 4 / 1 / 4 / 2;
    }
    section.projects :deep(.fact-container){
        align-self: flex-start;
        grid-area: 4 / 3 / 4 / 5; 
    }
    section.projects .attributes{
        grid-area: 5 / 1 / 5 / 5; 
    }
    section.projects .cta-container{
        grid-area: 6 / 1 / 6 / 5; 
    }
}
</style>