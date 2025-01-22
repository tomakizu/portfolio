<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Property Management' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Property Management</h1>
            <p class="mb-0">A group-based final year project about property management during my study in IVE, developed
              in 2021.</p>
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
          <li class="current">Property Management</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- Service Details Section -->
  <section id="service-details" class="service-details section">

    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div class="services-list">
            <NuxtLink :to="`${config.public.githubUrl}/weprop`" target="_blank">Repository</NuxtLink>
          </div>

          <h4>Highlighted Technologies</h4>
          <ul>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>PHPMailer</span>
            </li>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Twilio</span>
            </li>
          </ul>
        </div>

        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
          <h3>Features</h3>
          <ul>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Provide CRUD operations for accounts and residentials</span>
            </li>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Send feedback, comments, and complaints to management staff</span>
            </li>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Vote on suggestions</span>
            </li>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Send announcements to residents</span>
            </li>
            <li>
              <BootstrapIcon name="check-circle" />
              <span>Create QR code for guests for building entry</span>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </section><!-- /Service Details Section -->
</template>