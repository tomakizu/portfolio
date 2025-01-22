<script setup>
import menuItems from '~/content/menu-items';
const route = useRoute();
</script>

<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <NuxtLink :to="{ name: 'index' }" class="logo d-flex align-items-center">
        <h1 class="sitename">Thomas Chong</h1>
      </NuxtLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li v-for="item in menuItems" :key="item.title">
            <NuxtLink :to="{ name: item.route }" :class="route.name === item.route ? 'active' : ''">{{ item.title }}</NuxtLink>
          </li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>
</template>