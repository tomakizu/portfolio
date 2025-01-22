import Typed from 'typed.js';

// Init typed.js
export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      initTyped();
    },
  );

  initTyped();
});

const initTyped = () => {
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    new Typed('.typed', {
      strings: typed_strings ? typed_strings.split(',') : [],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }
};