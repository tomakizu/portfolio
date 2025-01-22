<script setup>
const config = useRuntimeConfig();
</script>

<template>
  <footer id="footer" class="footer dark-background">
    <div class="container">
      <h3 class="sitename">Contact</h3>
      <div class="social-links d-flex justify-content-center">
        <NuxtLink :to="`mailto:${config.public.email}`"><BootstrapIcon name="envelope" /></NuxtLink>
        <NuxtLink :to="config.public.githubUrl" target="_blank"><BootstrapIcon name="github" /></NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/thomastcchong" target="_blank"><BootstrapIcon name="linkedin" />
        </NuxtLink>
      </div>
      <div class="container">
        <div class="copyright"></div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>
</template>