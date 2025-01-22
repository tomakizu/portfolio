<script setup>
import projectItems from '~/content/project-items.json';

useHead({ title: 'Projects' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Projects</h1>
            <p class="mb-0">Projects I have contributed on during my studies and in my free time</p>
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
          <li class="current">Projects</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- Services Section -->
  <section id="services" class="services section">
    <div class="container">
      <div class="row gy-4">
        <div v-for="(item, index) in projectItems" :key="index" class="col-lg-4 col-md-6" data-aos="fade-up" :data-aos-delay="(index + 1) * 100">
          <div class="service-item position-relative">
            <div class="icon">
              <i :class="`bi bi-${item.icon}`"></i>
            </div>
            <NuxtLink :to="{ name: item.route }" class="stretched-link">
              <h3>{{ item.title }}</h3>
            </NuxtLink>
            <p>{{ item.description }}</p>
          </div>
        </div><!-- End Service Item -->
      </div>
    </div>
  </section><!-- /Services Section -->
</template>