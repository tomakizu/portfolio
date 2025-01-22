import AOS from 'aos';

// Animation on scroll function and init
export default defineNuxtPlugin((nuxtApp) => {
  onNuxtReady(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });
});