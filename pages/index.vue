<script setup>
const config = useRuntimeConfig();
</script>
<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background">

    <img src="~/assets/img/background.jpg" alt="" data-aos="fade-in">

    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <h2>Thomas Chong</h2>
      <p>I'm Web Developer</p>
      <p>I develop websites with <span class="typed"
          data-typed-items="Laravel, Nuxt, PHP, JavaScript">Laravel</span><span
          class="typed-cursor typed-cursor--blink"></span></p>
      <div class="social-links">
        <NuxtLink :to="`mailto:${config.public.email}`"><BootstrapIcon name="envelope" /></NuxtLink>
        <NuxtLink :to="config.public.githubUrl" target="_blank"><BootstrapIcon name="github" /></NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/thomastcchong" target="_blank"><BootstrapIcon name="linkedin" />
        </NuxtLink>
      </div>
    </div>

  </section><!-- /Hero Section -->
</template>
