<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Discord WIXOSS Bot' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Discord WIXOSS Bot</h1>
            <p class="mb-0">A generic Discord bot for a trading card game called WIXOSS; developed in 2022.</p>
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
          <li class="current">Discord WIXOSS Bot</li>
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
                <img src="~/assets/img/projects/discord-wixoss-bot/discord-wixoss-bot-1.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/discord-wixoss-bot/discord-wixoss-bot-2.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/discord-wixoss-bot/discord-wixoss-bot-3.png" alt="" />
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
                  <NuxtLink :to="`${config.public.githubUrl}/wixossbot`" target="_blank" class="stretched-link">
                    Repository
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
                <span>Determine who will go first in the 2-player game by entering command</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Display all registered activities held in the future by entering command</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Use cron job to display all registered activities held at the current date automatically</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="400">
            <h2>Highlighted Technologies</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Python</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Discord.py</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>MySQL</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Portfolio Details Section -->
</template>