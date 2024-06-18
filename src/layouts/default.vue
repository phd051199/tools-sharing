<template>
  <v-app>
    <loading-bar />

    <navigation-rail />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LoadingBar from './components/LoadingBar.vue';
import NavigationRail from './components/NavigationRail.vue';
</script>
