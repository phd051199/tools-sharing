<template>
  <v-app>
    <navigation-rail />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import NavigationRail from './components/NavigationRail.vue';
</script>
