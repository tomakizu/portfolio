<script setup>
useHead({ title: 'Resume' });
</script>

<template>
  <!-- Page Title -->
  <div class="page-title" data-aos="fade">
    <div class="heading">
      <div class="container">
        <div class="row d-flex justify-content-center text-center">
          <div class="col-lg-8">
            <h1>Resume</h1>
            <p class="mb-0">You may <NuxtLink to="/downloads/resume_portfolio_ThomasChong_2501.pdf" target="_blank"
                external>click here
              </NuxtLink> to download the PDF version of my resume for further reference.</p>
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
          <li class="current">Resume</li>
        </ol>
      </div>
    </nav>
  </div><!-- End Page Title -->

  <!-- Resume Section -->
  <section id="resume" class="resume section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 class="resume-title">Sumary</h3>

          <div class="resume-item pb-0">
            <h4>Thomas Chong</h4>
            <p>
              <em>
                Web Developer with 3+ years of hands-on experience in developing web-based projects; recognized for
                being diligent, punctual, and driven.
              </em>
            </p>
            <p>
              <em>
                Skills: PHP (Laravel, CodeIgniter, WordPress), Node.js, Nuxt, MySQL, HTML, CSS, JavaScript, Java,
                Python, etc.
              </em>
            </p>
          </div><!-- Edn Resume Item -->

          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>Bachelr of Science in Computing</h4>
            <h5>2021 - 2023</h5>
            <p><em>The Hong Kong Polytechnic University</em></p>
            <ul>
              <li>Award GPA: 3.21</li>
              <li>Designed, developed, and implemented a capstone project on traffic conjestion prediction.</li>
              <li>Received HKSAR Government Scolarship for Outstanding Performance in 2022.</li>
            </ul>
          </div><!-- Edn Resume Item -->

          <div class="resume-item">
            <h4>Higher Diploma in Software Engineering</h4>
            <h5>2019 - 2021</h5>
            <p><em>Hong Kong Institute of Vocational Education (Sha Tin)</em></p>
            <ul>
              <li>Award GPA: 3.84</li>
              <li>Contributed to the design, development, and implementation of web-based final-year project on property
                management.</li>
              <li>Received HKSAR Government Scolarship for Outstanding Performance in 2020 and 2021.</li>
              <li>Awarded Drs. Richard Charles and Esther Yewpick Lee Charitable Foundation Outstanding Industrial
                Attachment Award in 2021.</li>
            </ul>
          </div><!-- Edn Resume Item -->
        </div>

        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <h3 class="resume-title">Experience</h3>
          <div class="resume-item">
            <h4>Web Developer (PHP); Developer</h4>
            <h5>May 2023 - Present</h5>
            <p><em>ESD Services Limited</em></p>
            <ul>
              <li>Contribute to the design, development, and implementation of inhouse projects.</li>
              <li>Collaborate with other development teams to align business requirements with technical specifications.
              </li>
              <li>Communicate with product owner to identify and prioritize user requirements, ensuring timely delivery
                of the product or new features.</li>
              <li>Revamped inhouse content website using new technologies.</li>
              <li>Maintained inhouse wedding preparation website and its backend system; developed new features based on
                user requirements.</li>
              <li>Contributed to the development and implementation of member loyalty scheme project; provided feasible
                solutions for complex business requirements.</li>
            </ul>
          </div><!-- Edn Resume Item -->

          <div class="resume-item">
            <h4>Part Time Programmer</h4>
            <h5>Jul 2021 - Apr 2023</h5>
            <p><em>Innoverz Limited</em></p>
            <ul>
              <li>Planned website development, converting mockups into usable web presence.</li>
              <li>Contributed to the design, development, and implementation of smart recycling project.</li>
              <li>Maintained web-based e-commerce system and developed new features based on user requirements.</li>
            </ul>
          </div><!-- Edn Resume Item -->
        </div>
      </div>
    </div>
  </section><!-- /Resume Section -->
</template>