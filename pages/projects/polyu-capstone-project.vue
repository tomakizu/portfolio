<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Traffic Congestion Prediction' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Traffic Congestion Prediction</h1>
            <p class="mb-0">A capstone project to predict traffic congestion during my study in PolyU; developed in
              2023.</p>
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
          <li class="current">Traffic Congestion Prediction</li>
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
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-1.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-2.png" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-3.png" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-4.png" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-5.png" alt="">
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/polyu-capstone-project/polyu-capstone-project-6.png" alt="">
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
                  <NuxtLink :to="`${config.public.githubUrl}/capstone-web`" target="_blank" class="stretched-link">
                    Repository (Frontend)
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->
            <div class="col-lg-12 col-md-6 mb-3">
              <div class="features-item">
                <BootstrapIcon name="github" />
                <h3>
                  <NuxtLink :to="`${config.public.githubUrl}/capstone-api`" target="_blank" class="stretched-link">
                    Repository (Backend)
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->
            <div class="col-lg-12 col-md-6 mb-3">
              <div class="features-item">
                <BootstrapIcon name="youtube" />
                <h3>
                  <NuxtLink to="https://youtu.be/eDkxK6RWDGQ" target="_blank" class="stretched-link">
                    Demo Video
                  </NuxtLink>
                </h3>
              </div>
            </div><!-- End Feature Item -->
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="300">
            <h2>What I have done</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Investigated a more privacy-preserving and accurate method for traffic congestion
                  prediction</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Provided a feasible solution for enhancing the accuracy of STGNN model</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Developed a client-server architecture (web service and prediction algorithm) for the
                  system</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Suggested several possible enhancements for the system</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="400">
            <h2>Features</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Predict the traffic congestion condition for a given time using a machine learning model</span>
              </li>
            </ul>
          </div>

          <div class="portfolio-description" data-aos="fade-up" data-aos-delay="500">
            <h2>Highlighted Technologies</h2>
            <ul>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Laravel (Frontend)</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Flask (Backend)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Portfolio Details Section -->
</template>