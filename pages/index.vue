<template>
    <!-- 
        *
        * HEADER SECTION
        *
    -->
    <section class="header-grid grid">
        <h1 class="main-header">
            <div class="overflow-hidden">
                <div class="overflow-text">
                    artisan. passionate.
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-text">
                    curating a spotlight for
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-text">
                    small businesses.
                </div>
            </div>
        </h1>

        <Avalanche class="avalanche" id="avalanche"/>
        
        <h2 class="header-logo">
            <div class="overflow-hidden">
                <div class="overflow-content green">peu</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-content pink">.</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-content blue">dev</div>
            </div>
        </h2>

        <button class="cta">
            <p>discover services</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>

        </button>
    </section>

    <!--
        *
        * DESIGN SECTION
        *
    -->
    <section class="design grid">
        <h3 class="overflow-hidden">
            <div class="overflow-h3 green">design</div>
        </h3>

        <h4 id="sub1">it’s more than making pages look cool</h4>

        <h4 id="sub2">it’s also about functionality and intention</h4>


        <!--
            * ADD NUXT LINK TO SHOGUN PROJECT PAGE
        -->
        <div class="project-caption">
            <p>featured project:</p>
            <p>(1) Shogun</p>
        </div>

        <p id="description">Crafting is our favorite hobby here. We praise our work to be modern, but also functional. Websites are a representation of the brand and one of the first things people see when searching. We strive to craft designs that showcases your work and connects you closer to your customers. 
        </p>

        <button class="cta">
            <p>heck yeah</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </button>

        <img class="portrait" id="project-1" :src="ShogunMenu1" alt="Example screenshot of Shogun Steakhouse Naperville's menu page" title="Shogun Steakhouse Naperville's menu page">

        <img id="flower" :src="ShogunFlower1" alt="Flower found in Shogun Steakhouse Naperville's website" title="Sakura flower">
    </section>

    <!--
        *
        * DEVELOPMENT SECTION
        *
    -->
    <section class="development grid">
        <h3 class="overflow-hidden">
            <div class="overflow-h3 pink">development</div>
        </h3>

        <div class="project-caption">
            <p>actual code from featured project, Shogun!</p>
        </div>

        <h4 class="sub-header">the magic behind the curtain</h4>

        <p id="description">No matter where or how a website is built, it's through code. Even page builders such as Wordpress or Squarespace. We believe that having the code be as first-party as possible is the best way to maintain longevity, security, and keeping up-to-date. It's like Legos to us. Because we make it "from scratch", your website and tools will have the freedom to be designed and be implemented any way you like. Let us know your ideas and we'll come up with solutions for you.
        </p>

        <button class="cta">
            <p>i have ideas</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </button>


        <svg id="hand-drawn-arrow" width="32" height="165" viewBox="0 0 32 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.6814 2C28.8631 14.5226 30.059 26.9599 29.9977 39.5125C29.8433 71.1446 24.5291 102.866 15.024 132.664C12.5221 140.507 9.7419 148.443 5.71799 155.505C5.46182 155.954 1.82733 162.446 2.42706 159.325C3.82984 152.025 3.6703 144.58 3.6703 137.155C3.6703 136.773 3.6703 133.599 3.6703 133.964C3.6703 136.645 3.71759 139.332 3.63373 142.011C3.42636 148.638 2.02483 155.127 2.02483 161.763C2.02483 162.502 1.8034 163.431 2.68302 162.779C5.64835 160.582 8.31834 157.86 10.8738 155.118C12.9085 152.936 15.1742 150.938 16.9437 148.473C17.7501 147.35 18.4539 146.285 19.4668 145.385" stroke="var(--color-text)" stroke-width="3" stroke-linecap="round"/>
        </svg>

        <img class="portrait" id="code" :src="ShogunCode" alt="Code snippet from Shogun Steakhouse Naperville's website" title="Code snippet from Shogun Steakhouse Naperville's website">
    </section>

    <!--
        *
        * MAINTENANCE SECTION
        *
    -->
    <section class="maintenance grid">
        <Building v-if="maintenanceBuilding" id="building"/>

        <h3 class="overflow-hidden">
            <div class="overflow-h3 blue">maintenance</div>
        </h3>

        <h4 class="sub-header">keep those pesky "bugs" out</h4>
 
        <p id="description">Imagine a website as a house. Designers are the architects, developers are the builders. With any house, over time it will become outdated whether it's the content of the brand or the technology. Our job is the answer any updates you may have and to make sure that your website stays functional. You can think of us as your pocket developers!
        </p>

        <button class="cta">
            <p>i need a pocket dev</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </button>
    </section>
    <!--
        *
        * 'WHOLE.PROCESS' SECTION
        *
    -->
    <!-- <section class="whole-process grid">
        <Dominoes id="dominoes-1"/>

        <h3 class="header-logo">
            <div class="overflow-hidden">
                <div class="overflow-content green">whole</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-content pink">.</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-content blue">process</div>
            </div>
        </h3>
    </section> -->
    <section class="and-more">
        <h3 class="header-logo">
            <div class="overflow-hidden">
                <div class="overflow-h3 green">and</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-h3 pink">.</div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-h3 blue">more</div>
            </div>
        </h3>

        <div class="and-more-container">
            <div class="service">
                <h4 class="overflow-hidden">
                    <div class="overflow-h4">hosting</div>
                </h4>
                <p class="description">Like what we said in maintenance, a website is going to need a space to call home. We can provide an affordable and comfortable place so you never have to worry about the technical details. Your website will live 100% of the time. If something does happen, we'll have backups prepared!</p>
            </div>

            <div class="service">
                <h4 class="overflow-hidden">
                    <div class="overflow-h4">SEO</div> 
                </h4>
                <p class="description">A large chunk of SEO is all about how a website is built. Search engines crawl websites that use the correct semantics, have great performance, and use appropiate meta tags. Because we code 'from scratch' and is first party, we can directly create and input that data to guarantee your website is built with everything needed to have the best chances of getting the top spot in a search. </p>
            </div>

            <div class="service">
                <h4 class="overflow-hidden">
                    <div class="overflow-h4">on-call</div>
                </h4>
                <p class="description">We are your pocket developers. Email us, call us, DM us, we are here to help you. Our goal is to always make sure you never have to worry about your website. Sometimes you may need to change something. We got you!</p>
            </div>
        </div>

        <div v-if="dominoesToggle" class="dominoes-container">
            <Dominoes/>
        </div>
        
    </section>

    <Project
        :header-toggle="true"
        name="Shogun Japanese Steakhouse Naperville"
        :logo="ShogunLogo"
        :mockup="ShogunMockup1"
        :attributes="['restaurant', 'nuxt.js']"
    >
        <template v-slot:fact>
            <div class="fact-container">
                <h5 class="fact">
                    43%
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z" fill="var(--color-text)"/>
                    </svg>
                </h5>
                <p>More unique weekly user visitors after redesign</p>
            </div>
        </template>
    </Project>
</template>

<script setup>
import ShogunMenu1 from '~/assets/imgs/shogun/menu-1.webp'
import ShogunFlower1 from '~/assets/imgs/shogun/sakura-flower-1.webp'
import ShogunCode from '~/assets/imgs/shogun/code.webp'

// *
// * PROJECT IMAGES
import ShogunLogo from '~/assets/imgs/shogun/logo.svg'
import ShogunMockup1 from '~/assets/imgs/shogun/mockup-1.jpg'

import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const { $gsap } = useNuxtApp();
$gsap.registerPlugin(ScrollTrigger);

const maintenanceBuilding = ref(false),
    dominoesToggle = ref(false); 

onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        //console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const heroTL = $gsap.timeline(),
        designTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.design',
                start: 'top 90%'
            }
        }),
        developmentTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.development',
                start: 'top 90%'
            }
        }),
        maintenanceTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.maintenance',
                start: 'top 90%'
            }
        }),
        andMoreTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.and-more',
                start: 'top 90%'
            }
        });

    const path = document.querySelector('.development #hand-drawn-arrow path');
            path.style.strokeDasharray = path.getTotalLength(); // Set dash array to path length
            path.style.strokeDashoffset = path.getTotalLength(); // Hide path initially
    // *
    // * MAIN SECTION ANIMATION
    // *
    heroTL
        // MAIN HEADER TEXT
        .from('.header-grid .overflow-text', {
            duration: 0.5,
            yPercent: 100,
            stagger: 0.2,
        })
        // peu.dev 
        .from('.header-grid .overflow-content', {
            duration: 0.5,
            yPercent: 100,
            delay: -0.2,
        })
        // CTA BUTTON
        .from('.header-grid .cta', {
            duration: 0.5,
            yPercent: 100,
            opacity: 0, 
        }, '<')
        // AVALANACHE
        .from('.header-grid .avalanche', {
            duration: 0.5,
            yPercent: 2,
            opacity: 0,
        }, '<')
    // *
    // * DESIGN SECTION ANIMATION
    // *
    designTL
        .from('.design .overflow-h3', {
            duration: 0.5,
            yPercent: 100,
            stagger: 0.2,
        })
        .from('.design #sub1', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        })
        .from('.design #sub2', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design .project-caption', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design #description', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design .cta', {
            duration: 0.5, 
            yPercent: 20,
            opacity: 0,
        }, '<')
    // *
    // * DEVELOPMENT SECTION ANIMATION
    // *
    developmentTL
        .from('.development .overflow-h3', {
            duration: 0.5,
            yPercent: 100,
            stagger: 0.2,
        })
        .from('.development .project-caption', {
            duration: 0.5, 
            yPercent: 20,
            opacity: 0,
        }, '<')
        .from('.development .sub-header', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        })
        .from('.development #description', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.development .cta', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .to(path, {
            strokeDashoffset: 0,
            duration: 1, // Duration for the drawing animation
            ease: "power1.inOut",
        }, '<');
    // *
    // * MAINTENANCE SECTION ANIMATION
    // *
    maintenanceTL
        .from('.maintenance .overflow-h3', {
            duration: 0.5,
            yPercent: 100,
            stagger: 0.2,
        })
        .from('.maintenance .sub-header', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        })
        .call(() => { maintenanceBuilding.value = true })
        .from('.maintenance #description', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.maintenance .cta', {
            duration: 0.5, 
            yPercent: 10,
            opacity: 0,
        }, '<')
    // *
    // * AND MORE SECTION ANIMATION
    // *
    andMoreTL
        .call(() => { dominoesToggle.value = true })
        .from('.and-more .overflow-h3', {
            duration: 0.5,
            yPercent: 100,
        })
        .from('.and-more .overflow-h4', {
            duration: 0.3,
            yPercent: 50,
            opacity: 0,
        })
        .from('.and-more .description', {
            duration: 0.3,
            yPercent: 10,
            opacity: 0,
        }, '<')
})

</script>

<style scoped>
.header-grid{
    display: grid;
    height: 100dvh;
    align-items: center;
    gap: var(--gap-grid);
    grid-template-columns: 1fr 3fr 2fr;
    grid-template-rows: 10fr 1fr;
    grid-template-areas: 
        'header header avalanche'
        'logo cta avalanche'
    ;
    
}
.main-header{
    grid-area: header;
}
#avalanche{
    grid-area: avalanche;
}
.cta{
    grid-area: cta;
    justify-self: flex-end;
}



.about{
    position: relative;
}
.about-design{
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-grid);
    height: 150dvh;
}
#about-design{
    position: sticky;
    top: 25%;
}
#about-development{
    position: sticky;
    top: 50%;
}
#about-maintenance{
    position: sticky;
    top: 75%;
}
/*
    *
    * DESIGN SECTION
    *
*/
section.design > h3 {
    grid-area: 1 / 10 / 1 / 13;
}
section.design #sub1{
    grid-area: 2 / 10 / 4 / 13;
}
section.design #project-1{
    width: 100%;
    border-radius: var(--border-radius-general);
    grid-area: 1 / 5 / 7 / 9;
}
section.design #flower{
    width: 100%;
    grid-area: 4 / 2 / 5 / 3;
}
section.design .project-caption{
    grid-area: 1 / 1 / 2 / 4; 
}
section.design #sub2{
    align-self: flex-end;
    grid-area: 6 / 1 / 8 / 4;
}
section.design #description{
    grid-area: 6 / 10 / 8 / 13;
}
section.design .cta{
    justify-self: center;
    grid-area: 7 / 6 / 8 / 8;
}
/*
    *
    * DEVELOPMENT SECTION
    *
*/
section.development > h3{
    grid-area: 1 / 1 / 2 / 6;
}
section.development #code{
    grid-area: 2 / 9 / 6 / 13;
}
section.development .project-caption{
    align-self: center;
    justify-self: center;
    transform: rotate(-3deg);
    grid-area: 1 / 9 / 1 / 13;
}
section.development #hand-drawn-arrow{
    position: absolute;
    bottom: 10%;
    transform: translateY(90%) rotate(-10deg);
    max-width: clamp(3.125rem, 4vw, 7rem);
    grid-area: 1 / 11 / 1 / 13;
}
section.development .sub-header{
    grid-area: 2 / 1 / 3 / 6; 
}
section.development #description{
    grid-area: 3 / 1 / 5 / 6;
}
section.development .cta{
    justify-self: unset;
    align-self: flex-end;
    height: fit-content;
    grid-area: 5 / 1 / 5 / 6;
}
/*
    *
    * MAINTENANCE SECTION
    *
*/
section.maintenance #building{
    grid-area: 1 / 1 / 8 / 6;
}
section.maintenance > h3 {
    grid-area: 1 / 8 / 1 / 13;
}
section.maintenance .sub-header{
    grid-area: 2 / 8 / 4 / 12;
}
section.maintenance #description{
    grid-area: 4 / 8 / 7 / 12;
}
section.maintenance .cta{
    justify-self: flex-start;
    grid-area: 7 / 8 / 7 / 12;
}
/*
    *
    * WHOLE.PROCESS SECTION
    *
*/
section.whole-process{
    grid-template-rows: 25dvh auto;
}
section.whole-process #dominoes-1{
    grid-area: 1 / 1 / 2 / 13; 
}
section.whole-process > h3 {
    grid-area: 2 / 1 / 2 / 8; 
}
/*
    *
    * 'AND MORE' SECTION
    *
*/
section.and-more{
    display: flex;
    flex-direction: column;
    gap: var(--gap-grid);
}
.and-more-container{
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-grid);
}
.service{
    border: 1px solid var(--color-text-fade);
    border-radius: var(--border-radius-general);
    display: flex;
    gap: var(--gap-grid);
    flex-direction: column;
    padding: var(--padding-inline-page);
    width: clamp(18.75rem, 30vw, 50rem);
}
.dominoes-container{
    height: 20dvh;
}
/*
    *
    *  PROJECTS SECTION
    *
*/
section.projects > h3 {
    grid-area: 1 / 1 / 1 / 13;
    justify-self: center;
}
section.projects > h4 {
    grid-area: 2 / 9 / 2 / 13; 
}
section.projects .project-logo {
    grid-area: 2 / 1 / 2 / 2; 
}
section.projects .mockup{
    grid-area: 2 / 3 / 5 / 8;
}
section.projects .attributes{
    grid-area: 3 / 9 / 3 / 13;
}
section.projects .cta{
    justify-self: flex-start;
    align-self: flex-end;
    grid-area: 4 / 9 / 4 / 13;
}
section.projects .description{
    grid-area: 5 / 9 / 5 / 13; 
}
section.projects .fact-container{
    align-self: flex-end;
    grid-area: 3 / 1 / 5 / 3;
}

</style>