<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useOneTap } from 'vue3-google-signin';

useOneTap({ cancelOnTapOutside: false });
</script>
