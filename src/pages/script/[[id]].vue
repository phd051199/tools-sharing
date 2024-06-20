<template>
  <v-container>
    <div class="text-h3">{{ route.params.id }}</div>
  </v-container>
</template>

<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
</script>
