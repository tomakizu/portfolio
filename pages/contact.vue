<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Contact' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Contact</h1>
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
          <li class="current">Contact</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- Contact Section -->
  <section id="contact" class="contact section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-md-6">
          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i class="icon bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email</h3>
              <p>
                <NuxtLink :to="`mailto:${config.public.email}`">{{ config.public.email }}</NuxtLink>
              </p>
            </div>
          </div>
        </div><!-- End Info Item -->

        <div class="col-md-6">
          <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
            <i class="icon bi bi-share flex-shrink-0"></i>
            <div>
              <h3>Social Profiles</h3>
              <div class="social-links">
                <NuxtLink :to="config.public.githubUrl" target="_blank"><BootstrapIcon name="github" /></NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/thomastcchong" target="_blank"><BootstrapIcon name="linkedin" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div><!-- End Info Item -->
      </div>
    </div>
  </section><!-- /Contact Section -->
</template>