<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Sanguosha Scroll Checklist' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Sanguosha Scroll Checklist</h1>
            <p class="mb-0">A simple tool to record whether a Sanguosha scroll is used; developed in 2023.</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="breadcrumbs">
      <div class="container">
        <ol>
          <li>
            <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'projects' }">Projects</NuxtLink>
          </li>
          <li class="current">Sanguosha Scroll Checklist</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- Portfolio Details Section -->
  <section id="portfolio-details" class="portfolio-details section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper init-swiper">
            <div class="swiper-wrapper align-items-center">
              <div class="swiper-slide">
                <img src="~/assets/img/projects/sanguosha-scroll/sanguosha-scroll-1.jpg" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/sanguosha-scroll/sanguosha-scroll-2.jpg" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/sanguosha-scroll/sanguosha-scroll-3.jpg" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/sanguosha-scroll/sanguosha-scroll-4.jpg" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row portfolio-info" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-12 col-md-6 mb-3">
              <div class="features-item">
                <BootstrapIcon name="github" />
                <h3>
                  <NuxtLink :to="`${config.public.githubUrl}/sanguosha-scroll`" target="_blank" class="stretched-link">
                    Repository
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->

            <div class="col-lg-12 col-md-6">
              <div class="features-item">
                <BootstrapIcon name="link-45deg" />
                <h3>
                  <NuxtLink to="https://tomakizu.github.io/sanguosha-scroll/" target="_blank" class="stretched-link">
                    Demo
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
            <h2>Features</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Record whether a scroll is used</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Display the effect of the corresponding scroll (mobile only)</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Reset the page to initial state</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="400">
            <h2>Highlighted Technologies</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Progressive Web Apps (PWA)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Portfolio Details Section -->
</template>