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
                    curating spotlights for
                </div>
            </div>
            <div class="overflow-hidden">
                <div class="overflow-text underline">
                    <a href="#services" title="View services for your business">small businesses.</a>
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

        <a class="cta" href="#services" title="View services for your business">
            <p>discover services</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>

        </a>
    </section>

    <!--
        *
        * DESIGN SECTION
        *
    -->
    <section class="design grid" id="services">
        <h3 class="overflow-hidden">
            <div class="overflow-h3 green">design</div>
        </h3>

        <h4 id="sub1">it’s more than making pages look cool</h4>

        <h4 id="sub2">it’s also about accessibility and intention</h4>


        <!--
            * ADD NUXT LINK TO SHOGUN PROJECT PAGE
        -->
        <div class="project-caption">
            <p>featured project:</p>
            <p>Shogun</p>
        </div>

        <p id="description">Crafting is our favorite hobby here. We praise our work to be modern, but also functional. Websites are a representation of the brand and one of the first things people see when searching. We strive to craft designs that showcases your work and connects you closer to your customers. 
        </p>

        <a class="cta" href="#contact" title="Let's connect!">
            <p>i need designs</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </a>

        <img class="portrait" id="project-1" :src="ShogunMenu1" alt="Example screenshot of Shogun Steakhouse Naperville's menu page" title="Shogun Steakhouse Naperville's menu page">

        <img id="flower" :src="ShogunFlower1" alt="Flower found in Shogun Steakhouse Naperville's website" title="Sakura flower">
    </section>

    <!--
        *
        * DEVELOPMENT SECTION
        *
    -->
    <section class="development grid">
        <Transition name="fade">
            <Pinball v-if="pinball" id="pinball"/>
        </Transition>
    
        <h3 class="overflow-hidden">
            <div class="overflow-h3 pink">development</div>
        </h3>

        <div class="project-caption">
            <p>"the magic" can create anything!</p>
        </div>

        <h4 class="sub-header">the magic behind the curtain</h4>

        <p id="description">No matter where or how a website is built, it's through code. Even page builders such as Wordpress or Squarespace. We believe that having the code be as first-party as possible is the best way to maintain security and keeping up-to-date. Because we make it "from scratch", your website and tools will have the freedom to be designed and be implemented any way you like. Let us know your ideas and we'll build it for you!
        </p>

        <a class="cta" href="#contact" title="Let's connect!">
            <p>i have ideas</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </a>


        <svg id="hand-drawn-arrow" width="32" height="165" viewBox="0 0 32 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.6814 2C28.8631 14.5226 30.059 26.9599 29.9977 39.5125C29.8433 71.1446 24.5291 102.866 15.024 132.664C12.5221 140.507 9.7419 148.443 5.71799 155.505C5.46182 155.954 1.82733 162.446 2.42706 159.325C3.82984 152.025 3.6703 144.58 3.6703 137.155C3.6703 136.773 3.6703 133.599 3.6703 133.964C3.6703 136.645 3.71759 139.332 3.63373 142.011C3.42636 148.638 2.02483 155.127 2.02483 161.763C2.02483 162.502 1.8034 163.431 2.68302 162.779C5.64835 160.582 8.31834 157.86 10.8738 155.118C12.9085 152.936 15.1742 150.938 16.9437 148.473C17.7501 147.35 18.4539 146.285 19.4668 145.385" stroke="var(--color-text)" stroke-width="3" stroke-linecap="round"/>
        </svg>

        <!-- <img class="portrait" id="code" :src="ShogunCode" alt="Code snippet from Shogun Steakhouse Naperville's website" title="Code snippet from Shogun Steakhouse Naperville's website"> -->
    </section>

    <!--
        *
        * MAINTENANCE SECTION
        *
    -->
    <section class="maintenance grid">
        <Transition name="fade">
            <Building v-if="buildling" id="building"/>
        </Transition>
        

        <h3 class="overflow-hidden">
            <div class="overflow-h3 blue">maintenance</div>
        </h3>

        <h4 class="sub-header">keep those pesky "bugs" out</h4>
 
        <p id="description">Imagine a website as a house. Designers are the architects, developers are the builders. With any house, over time it may become outdated. Our job is the answer any updates you may have and to make sure that your website stays functional. You can think of us as your pocket developers!
        </p>

        <a class="cta" href="#contact" title="Let's connect!">
            <p>i need a pocket dev</p>
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                <title>Discover services</title>
            </svg>
        </a>
    </section>
    <!--
        *
        * 'AND MORE' SECTION
        * Explaining more smaller services
        *
    -->
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
            <div class="service-container">
                <div class="service">
                    <div class="description-container">
                        <h4 class="overflow-hidden">
                            <div class="overflow-h4">hosting</div>
                        </h4>
                        <p class="description">Like what we said in maintenance, a website is going to need a space to call home. We can provide an affordable and comfortable place so you never have to worry about the technical details. Your website will live 100% of the time. If something does happen, we'll have backups prepared!</p>
                    </div>
                        

                    <a class="cta" href="#contact" title="Let's connect!">
                        <p>i need hosting</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                            <title>Discover services</title>
                        </svg>
                    </a>
                </div>

                <div class="service">
                    <div class="description-container">
                        <h4 class="overflow-hidden">
                            <div class="overflow-h4">onsite SEO</div> 
                        </h4>
                        <p class="description">A large chunk of SEO is all about how a website is built. Search engines crawl websites that use the correct semantics, have great performance, and use appropiate meta tags. Because we code 'from scratch' and is first party, we can directly create and input that data to guarantee your website is built with everything needed to have the best chances of getting the top spot in a search. </p>
                    </div>
                        
                    <a class="cta" href="#contact" title="Let's connect!">
                        <p>i want organic leads</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                            <title>Discover services</title>
                        </svg>
                    </a>
                </div>

                <div class="service">
                    <div class="description-container">
                        <h4 class="overflow-hidden">
                            <div class="overflow-h4">on-call</div>
                        </h4>
                        <p class="description">We are your pocket developers. Email us, call us, DM us, we are here to help you. Our goal is to always make sure you never have to worry about your website. Sometimes you may need to change something. We got you!</p>
                    </div>
                
                    <a class="cta" href="#contact" title="Let's connect!">
                        <p>i need that</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z"/>
                            <title>Discover services</title>
                        </svg>
                    </a>
                </div>
            </div>

            <div v-if="dominoesToggle" class="dominoes-container">
                <Dominoes/>
            </div>
        </div>

        
        
    </section>

    <!--
        *
        * 'AND MORE' SECTION
        * Explaining more smaller services
        *
    -->
    <Project
        :header-toggle="true"
        name="Shogun Japanese Steakhouse Naperville"
        href="https://shogunsteaknaperville.com/"
        :logo="ShogunLogo"
        :mockup="ShogunMockup1"
        :attributes="['restaurant', 'nuxt.js', 'netlify']"
        id="projects"
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

    <Project
        name="Peu Research Center"
        href="https://peuresearchcenter.com/"
        :logo="PRCLogo"
        :mockup="PeuMockup1"
        :attributes="['web app', 'laravel', 'vue.js', 'mysql', 'digitalocean', 'laravelforge']"
    >
        <template v-slot:fact>
            <div class="fact-container">
                <h5 class="fact">
                    1000+
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z" fill="var(--color-text)"/>
                    </svg>
                </h5>
                <p>Monthly unique page visits</p>
            </div>
        </template>
    </Project>

    <Project
        name="Alfonso & Webber"
        href="https://www.alfonsoandwebber.com/"
        :logo="AWLogo"
        :mockup="AWMockup"
        :attributes="['duda', 'web design']"
    >
        <template v-slot:fact>
            <div class="fact-container">
                <h5 class="fact">
                    25%
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.195 10.83L12 6.00001L7.195 1.17001C7.1516 1.11302 7.09647 1.06603 7.03333 1.0322C6.9702 0.998373 6.90053 0.978506 6.82904 0.973946C6.75756 0.969385 6.68593 0.980236 6.61901 1.00576C6.55208 1.03129 6.49142 1.0709 6.44114 1.12191C6.39085 1.17292 6.35211 1.23414 6.32754 1.30142C6.30297 1.36871 6.29315 1.44048 6.29873 1.51189C6.30431 1.5833 6.32517 1.65268 6.35989 1.71533C6.39462 1.77798 6.4424 1.83243 6.5 1.87501L10.095 5.50001L0.53 5.50001C0.397391 5.50001 0.270215 5.55269 0.176447 5.64646C0.0826787 5.74022 0.0299997 5.8674 0.0299997 6.00001C0.0299997 6.13262 0.0826787 6.2598 0.176447 6.35356C0.270215 6.44733 0.397391 6.50001 0.53 6.50001L10.095 6.50001L6.5 10.125C6.40651 10.2192 6.35425 10.3466 6.35472 10.4793C6.35519 10.612 6.40835 10.739 6.5025 10.8325C6.59665 10.926 6.72409 10.9783 6.85677 10.9778C6.98945 10.9773 7.11651 10.9242 7.21 10.83H7.195Z" fill="var(--color-text)"/>
                    </svg>
                </h5>
                <p>More client connections</p>
            </div>
        </template>
    </Project>

    

    <footer class="footer grid" id="contact">
        <!-- <LowGravity id="low-gravity"/> -->

        <section class="closing grid">
            <h3 class="main-header">
                <div class="overflow-hidden">
                    <div class="overflow-text-h3">
                        have a vision of your website?
                    </div>
                </div>
            </h3>
            <h4 class="sub-header">let's connect! it's as easy as sending an email: <a class="email-header underline" href="mailto:matt@peu.dev">matt@peu.dev</a></h4>
        </section>

        <div class="end-credits">
            <a class="p-link" href="tel:331-256-7731" title="Call us at 331-256-7731">331-256-7731</a>
            <a class="p-link logo-font" href="mailto:matt@peu.dev" title="Email us at matt@peu.dev">
                <span class="green">peu</span>
                <span class="pink">.</span>
                <span class="blue">dev</span>
            </a>
            <div class="socials">
                <a class="svg-link" href="https://www.linkedin.com/in/mattnewyen/" target="_blank" title="LinkedIn: https://www.linkedin.com/in/mattnewyen/">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="var(--color-text)"/>
                        <title>LinkedIn: https://www.linkedin.com/in/mattnewyen/</title>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import ShogunMenu1 from '~/assets/imgs/shogun/menu-1.webp'
import ShogunFlower1 from '~/assets/imgs/shogun/sakura-flower-1.webp'
import ShogunCode from '~/assets/imgs/shogun/code.webp'
import PeuLogo from '~/assets/imgs/logo.svg'

// *
// * PROJECT IMAGES
// *
// PROJECT: SHOGUN 
import ShogunLogo from '~/assets/imgs/shogun/logo.svg'
import ShogunMockup1 from '~/assets/imgs/shogun/mockup-1.webp'

// PROJECT: PEU RESEARCH CENTER
import PRCLogo from '~/assets/imgs/peu-research-center/Peu_Choya.webp'
import PeuMockup1 from '~/assets/imgs/peu-research-center/mockup-1.webp'

// PROJECT: ALFONSO & WEBBER
import AWLogo from '~/assets/imgs/alfonso_and_webber/logo.webp'
import AWMockup from '~/assets/imgs/alfonso_and_webber/mockup.webp'


import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Pinball from '~/components/Pinball.vue'
import Project from '~/components/Project.vue'

// *
// * SEO HEAD AND META
// * 
const seoTitle = 'peu.dev | Your Pocket Web Developer',
    seoContent = 'Custom web design, development, and maintenance services tailored to your brand. We create unique websites that prioritize your vision and drive results.';


useHead({
    meta: [
        {
            name: seoTitle,
            content: seoContent, 
        }
    ],
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
        rel: 'icon',
        type: 'image/svg',
        href: '/favicon.svg'
        }
    ]
})

useSeoMeta({
    title: seoTitle, 
    description: seoContent, 
    ogTitle: seoTitle, 
    ogDescription: seoContent, 
    ogImage: PeuLogo,
    ogUrl: 'localhost:3000',
    twitterTitle: seoTitle, 
    twitterDescription: seoContent, 
    twitterImage: PeuLogo, 
    twitterCard: seoContent,  
})

const { $gsap } = useNuxtApp();
$gsap.registerPlugin(ScrollTrigger);

const buildling = ref(false),
    dominoesToggle = ref(false),
    pinball = ref(false); 

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

    // * 
    // * Initialize TIMELINES 
    // *
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
        }),
        projectsTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.projects',
                start: 'top 90%'
            }
        }),
        footerTL = $gsap.timeline({
            scrollTrigger: {
                trigger: '.footer',
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
            duration: 0.4,
            yPercent: 100,
            stagger: 0.2,
        })
        // peu.dev 
        .from('.header-grid .overflow-content', {
            duration: 0.4,
            yPercent: 100,
            delay: -0.2,
        })
        // CTA BUTTON
        .from('.header-grid .cta', {
            duration: 0.4,
            yPercent: 100,
            opacity: 0, 
        }, '<')
        // AVALANACHE
        .from('.header-grid .avalanche', {
            duration: 0.4,
            yPercent: 2,
            opacity: 0,
        }, '<')
    // *
    // * DESIGN SECTION ANIMATION
    // *
    designTL
        .from('.design .overflow-h3', {
            duration: 0.4,
            yPercent: 100,
            stagger: 0.2,
        })
        .from('.design #sub1', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        })
        .from('.design #sub2', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design .project-caption', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design #description', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.design .cta', {
            duration: 0.4, 
            yPercent: 20,
            opacity: 0,
        }, '<')
    // *
    // * DEVELOPMENT SECTION ANIMATION
    // *
    developmentTL
        .from('.development .overflow-h3', {
            duration: 0.4,
            yPercent: 100,
            stagger: 0.2,
        })
        .from('.development .project-caption', {
            duration: 0.4, 
            yPercent: 20,
            opacity: 0,
        }, '<')
        .call(() => { pinball.value = true })
        .from('.development .sub-header', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        })
        .from('.development #description', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.development .cta', {
            duration: 0.4, 
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
            duration: 0.4,
            yPercent: 100,
            stagger: 0.2,
        })
        .call(() => { buildling.value = true })
        .from('.maintenance .sub-header', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.maintenance #description', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.maintenance .cta', {
            duration: 0.4, 
            yPercent: 10,
            opacity: 0,
        }, '<')
    // *
    // * AND MORE SECTION ANIMATION
    // *
    andMoreTL
        .call(() => { dominoesToggle.value = true })
        .from('.and-more .overflow-h3', {
            duration: 0.4,
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
    // *
    // * FEATURED PROJECTS SECTION ANIMATION
    // *
    projectsTL 
        .from('.projects .overflow-h3', {
            duration: 0.4, 
            yPercent: 100,
        })
        .from('.projects .project-logo', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        })
        .from('.projects > h4', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.projects .mockup', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.projects .attributes', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.projects .cta-container', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        }, '<')
        .from('.projects .fact-container', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        }, '<')
    // *
    // * FOOTER SECTION ANIMATION
    // *
    footerTL
        .from('.footer .overflow-text-h3', {
            duration: 0.4, 
            yPercent: 100,
        })
        .from('.footer .sub-header', {
            duration: 0.4,
            yPercent: 10,
            opacity: 0,
        })
        .from('.footer .end-credits', {
            duration: 0.4,
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
}
section.header-grid .main-header{
    align-self: flex-end;
    grid-area: 1 / 1 / 1 / 10; 
}
section.header-grid .main-header a{
    font-family: var(--font-family-readex);
    font-size: var(--font-size-h1);
}
section.header-grid .avalanche{
    width: 30vw;
    grid-area: 1 / 10 / 3 / 13;
}
section.header-grid .header-logo{
    grid-area: 2 / 1 / 2 / 5;
}
section.header-grid .cta{
    justify-self: flex-end;
    grid-area: 2 / 5 / 2 / 10;
}
@media (max-width: 790px){
    section.header-grid{
        height: unset;
    }
    section.header-grid .main-header{
        /* padding-top: calc(var(--margin-section) * 2); */
        padding-top: calc(var(--margin-section) * 2);
        align-self: center;
        justify-self: center;
        text-align: center;
        grid-area: 1 / 1 / 1 / 5; 
    }
    section.header-grid .avalanche{
        height: 70dvh;
        width: unset;
        grid-area: 3 / 1 / 3 / 5;
    }
    section.header-grid .header-logo{
        display: none;
        grid-area: 3 / 1 / 3 / 5; 
    }
    section.header-grid .cta{
        justify-self: center;
        grid-area: 2 / 1 / 2 / 5;
    }
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
    justify-self: center;
    border-radius: var(--border-radius-general);
    grid-area: 1 / 4 / 6 / 10;
}
section.design #flower{
    width: 100%;
    grid-area: 3 / 2 / 3 / 3;
}
section.design .project-caption{
    grid-area: 1 / 1 / 2 / 4; 
}
section.design #sub2{
    align-self: flex-end;
    grid-area: 4 / 1 / 7 / 4;
}
section.design #description{
    align-self: flex-end;
    grid-area: 4 / 10 / 7 / 13;
}
section.design .cta{
    justify-self: center;
    grid-area: 6 / 4 / 7 / 10;
}
/*
    *
    * MOBILE
    * DESIGN SECTION
    *
*/
@media (max-width: 768px){
    section.design > h3{
        grid-area: 1 / 1 / 1 / 5;
    }   
    section.design #sub1{
        grid-area: 2 / 1 / 2 / 5;
    }
    section.design #project-1{
        grid-area: 3 / 1 / 3 / 5;
    }
    section.design #flower{
        grid-area: 4 / 1 / 4 / 2;
    }
    section.design #sub2{
        align-self: flex-start;
        grid-area: 5 / 1 / 5 / 5; 
    }
    section.design #description{
        grid-area: 6 / 1 / 6 / 5; 
    }
    section.design .cta{
        justify-self: flex-start;
        grid-area: 7 / 1 / 7 / 5; 
    }
    section.design .project-caption{
        justify-self: flex-end;
        grid-area: 4 / 2 / 4 / 5; 
    }
}
/*
    *
    * DEVELOPMENT SECTION
    *
*/
section.development > h3{
    grid-area: 1 / 1 / 2 / 13;
}
section.development #pinball{
    grid-area: 2 / 8 / 5 / 13;
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
    grid-area: 3 / 1 / 3 / 6;
}
section.development .cta{
    justify-self: unset;
    align-self: flex-end;
    height: fit-content;
    grid-area: 4 / 1 / 4 / 6;
}
/*
    *
    * MOBILE
    * DEVELOPMENT SECTION
    *
*/
@media (max-width: 768px){
    section.development > h3 {
        grid-area: 1 / 1 / 1 / 5;
    }
    section.development .sub-header{
        grid-area: 2 / 1 / 2 / 5;
    }
    section.development .project-caption{
        align-self: flex-start;
        justify-self: center;
        grid-area: 3 / 1 / 3 / 5; 
    }
    section.development #hand-drawn-arrow{
        top: 10%;
        left: 50%;
        transform: translateY(-10%) rotate(-10deg);
        bottom: unset;
        grid-area: 3 / 1 / 3 / 5;
    }
    section.development #pinball{
        height: 70dvh;
        grid-area: 3 / 1 / 3 / 5; 
    }
    section.development #description{
        grid-area: 4 / 1 / 4 / 5;
    }
    section.development .cta{
        justify-self: flex-start;
        grid-area: 5 / 1 / 5 / 5;
    }
}

/*
    *
    * MAINTENANCE SECTION
    *
*/
section.maintenance #building{
    grid-area: 1 / 1 / 5 / 6;
}
section.maintenance > h3 {
    grid-area: 1 / 8 / 1 / 13;
}
section.maintenance .sub-header{
    grid-area: 2 / 8 / 2 / 12;
}
section.maintenance #description{
    grid-area: 3 / 8 / 3 / 12;
}
section.maintenance .cta{
    justify-self: flex-start;
    grid-area: 4 / 8 / 4 / 12;
}
/*
    *
    * MOBILE
    * MAINTENANCE SECTION
    *
*/
@media (max-width: 768px){
    section.maintenance > h3 {
        grid-area: 1 / 1 / 1 / 5;
    }
    section.maintenance .sub-header{
        grid-area: 2 / 1 / 2 / 5; 
    }
    section.maintenance #building{
        height: 70dvh;
        grid-area: 3 / 1 / 3 / 5; 
    }
    section.maintenance #description{
        grid-area: 4 / 1 / 4 / 5; 
    }
    section.maintenance .cta{
        grid-area: 5 / 1 / 5 / 5;
    }
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
    flex-direction: column;
    gap: var(--gap-grid);
}
.service-container{
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-grid);
}
.service{
    border: 1px solid var(--color-text-fade);
    border-radius: var(--border-radius-general);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    column-gap: var(--gap-column);
    row-gap: var(--gap-row);
    padding: var(--padding-inline-page);
    width: clamp(18.75rem, 30vw, 50rem);
}
.description-container{
    display: flex;
    column-gap: var(--gap-column);
    row-gap: var(--gap-row);
    flex-direction: column;
}
.dominoes-container{
    height: 20dvh;
}
/*
    *
    * MOBILE
    * 'AND MORE' SECTION
    *
*/
@media (max-width: 768px){
    .and-more-container{
        justify-content: center;
        flex-direction: column-reverse;
    }
    .service{
        width: 100%;
    }
    section.and-more .dominoes-container{
        height: 10dvh;
    }
}
/*
    *
    *  PRICING SECTION
    *
*/
section.closing > h3{
    text-align: center;
    justify-self: center;
    grid-area: 1 / 1 / 1 / 13;
}
section.closing > h4{
    text-align: center;
    justify-self: center;
    grid-area: 2 / 1 / 2 / 13; 
}
/*
    *
    *  FOOTER SECTION
    *
*/
footer {
    position: relative;
    padding-inline: var(--padding-inline-page);
    margin-bottom: var(--margin-footer);
}
footer #low-gravity{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}
footer .end-credits{
    grid-area: 3 / 1 / 3 / 13;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 768px){

}

</style>