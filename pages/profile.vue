<script setup>
useHead({
  title: 'Profile'
});
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Profile</h1>
            <p class="mb-0">"Hope for the best, prepare for the worst."</p>
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
          <li class="current">Profile</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- About Section -->
  <section id="about" class="about section">

    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4 justify-content-center">
        <div class="col-lg-3">
          <img src="~/assets/img/profile-image.jpeg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-9 content">
          <h2>Thomas Chong</h2>
          <p class="pt-3">
            Gratuated from Hong Kong Institute of Vocational Education (Sha Tin) in 2021 and The Hong Kong Polytechnic
            University with a Bachelor of Science in Computing in 2023; currently working as Developer at ESD Services
            Limited.
          </p>
          <p>
            With hands-on experience in developing web-based projects using Nuxt and Laravel, I hope that my
            deliverables can enhance the user experience and solve real-world problems.
          </p>
          <p class="pt-1">
            Enjoys playing trading card games (Yu-Gi-Oh!, Duel Master, Magic the Gathering, WIXOSS, etc.) and watching
            anime during free time.
          </p>
        </div>
      </div>
    </div>
  </section><!-- /About Section -->

  <!-- Skills Section -->
  <section id="skills" class="skills section">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2>Skills</h2>
      <div><span>My</span> <span class="description-title">Skills</span></div>
    </div><!-- End Section Title -->

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row skills-content skills-animation">
        <div class="col-lg-6">
          <ul>
            <li><BootstrapIcon name="chevron-right" /> <strong>PHP</strong> <span>(Laravel, CodeIgniter, WordPress)</span></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>Nuxt</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>Node.js</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>MySQL</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>HTML</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>CSS</strong></li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul>
            <li><BootstrapIcon name="chevron-right" /> <strong>JavaScript</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>Git</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>AWS</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>Java</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <strong>Python</strong></li>
            <li><BootstrapIcon name="chevron-right" /> <span>etc.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section><!-- /Skills Section -->
</template>