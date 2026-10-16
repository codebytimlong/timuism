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
    pageTransition: { name: 'page', mode: 'out-in' },
    // viewport-fit=cover lets the sticky header reach under the iOS status
    // bar; the layout pads for the safe areas itself.
    head: {
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
    }
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
      'Khand': [400, 500, 600]
    }
  },
  devtools: { enabled: true }
})
