<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Portfolio' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Portfolio</h1>
            <p class="mb-0">My personal portfolio website; developed in 2025.</p>
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
          <li class="current">Portfolio</li>
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
                <img src="~/assets/img/projects/portfolio/portfolio-1.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/portfolio/portfolio-2.png" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row portfolio-info" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-12 col-md-6">
              <div class="features-item">
                <BootstrapIcon name="github" />
                <h3>
                  <NuxtLink :to="`${config.public.githubUrl}/portfolio`" target="_blank" class="stretched-link">
                    Repository
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
            <h2>What have I done</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Converted the HTML template from <NuxtLink to="https://bootstrapmade.com/personal-free-resume-bootstrap-template/">BootstrapMade</NuxtLink> into Vue components</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Installed libraries and plugins instead of using vendor files</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Revamped JavaScript logic to fit SPA architecture</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Deployed the website to GitHub Pages with GitHub Actions</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="400">
            <h2>Highlighted Technologies</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Nuxt</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>GitHub Pages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Portfolio Details Section -->
</template>