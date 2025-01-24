// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/portfolio/',
    head: {
      meta: [
        { name: 'description', content: 'Portfolio Website of Thomas Chong' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ],
      link: [
        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      email: 'thomaschong0929@gmail.com',
      githubUrl: 'https://github.com/tomakizu',
      linkedinUrl: 'https://www.linkedin.com/in/thomastcchong',
    },
  },
  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],
  devtools: { enabled: true },
  modules: ['nuxt-bootstrap-icons', 'usebootstrap'],
  nitro: {
    preset: 'github_pages',
  },
})