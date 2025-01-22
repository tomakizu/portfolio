<script setup>
useHead({
  // or as a function
  titleTemplate: (title) => {
    return title ? `${title} - Thomas Chong's Portfolio` : 'Thomas Chong\'s Portfolio';
  }
});
</script>

<template>
  <Header />
  <main class="main">
    <slot />
  </main>
  <Footer />
  <ScrollTop />
  <Preloader />
</template>