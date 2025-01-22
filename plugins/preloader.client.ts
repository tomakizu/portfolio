// Preloader
export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      initPreloader();
    },
  );

  initPreloader();
});

const initPreloader = () => {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.setAttribute('style', 'display: block;');

    onNuxtReady(() => {
      preloader.setAttribute('style', 'display: none;');
    });
  }
}