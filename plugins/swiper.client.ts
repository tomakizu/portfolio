import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Init swiper sliders
export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();

  watch(
    () => route.path,
    () => {
      initSwiper();
    },
  );

  initSwiper();
});

const initSwiper = () => {
  new Swiper('.swiper', {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
}
