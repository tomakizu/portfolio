<script setup>
const config = useRuntimeConfig();

useHead({ title: 'Discord Deadline Reminder' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Discord Deadline Reminder</h1>
            <p class="mb-0">A Discord bot to send deadline reminders to subscribed users.</p>
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
          <li class="current">Discord Deadline Reminder</li>
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
                <img src="~/assets/img/projects/discord-deadline-reminder/discord-deadline-reminder-1.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/discord-deadline-reminder/discord-deadline-reminder-2.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/discord-deadline-reminder/discord-deadline-reminder-3.png" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="~/assets/img/projects/discord-deadline-reminder/discord-deadline-reminder-4.png" alt="" />
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
                  <NuxtLink :to="`${config.public.githubUrl}/discord-deadline-reminder`" target="_blank"
                    class="stretched-link">
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
                <span>Create a course record or an assignment record to database</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>List all registered courses</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Subscribe to or unsubscribe from a registered course</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Mark an assignment as completed or undo the last operation</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>List all uncompleted assignments from user's registered courses</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Use cron job to remind subscribed users to submit assignments before 7 days and 1 day before
                  deadline</span>
              </li>
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Use cron job to clear assignment records from database during semester break</span>
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
              <li>
                <BootstrapIcon name="check-circle" />
                <span>Heroku</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section><!-- /Portfolio Details Section -->
</template>