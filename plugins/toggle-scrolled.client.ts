// Apply .scrolled class to the body as the page is scrolled down
export default defineNuxtPlugin((nuxtApp) => {
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
});

const toggleScrolled = () => {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  if (!selectBody) return;
  if (!selectHeader) return;

  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
};