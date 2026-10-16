// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: {
        default: "solarized-dark",
      }
    }
  },
  googleFonts: {
    families: {
      'Barlow': true,
      'Barlow Condensed': [400],
      'Courier Prime': true,
      'Khand': [400, 500, 600]
    }
  },
  devtools: { enabled: true }
})
