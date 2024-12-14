// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@hypernym/nuxt-gsap', 
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    preload: true,
    families: {
      'Readex Pro': {
        wght: '200..700'
      },
      'Mulish': {
        wght: '200..900'
      }
    },
  },
  
})