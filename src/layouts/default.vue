<template>
  <v-app>
    <loading-bar />
    <navigation-rail />
    <app-bar />

    <v-navigation-drawer
      rail
      color="background"
      location="right"
      class="fixed!"
      :rail-width="156"
      floating
    >
      <v-list
        v-for="c in 2"
        :key="c"
        density="compact"
        class="mb-2 font-size-3.5"
      >
        <v-list-item>
          <div class="font-weight-black">Category {{ c }}</div>
        </v-list-item>

        <v-list-item v-for="n in 5" :key="n"> Item {{ n }} </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from './components/AppBar.vue';
import LoadingBar from './components/LoadingBar.vue';
import NavigationRail from './components/NavigationRail.vue';
</script>
