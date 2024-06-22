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
      <v-list density="compact" class="font-size-3.5">
        <v-list-item>
          <div class="font-weight-black">On this page</div>
        </v-list-item>

        <v-list-item>
          <div>Item 1</div>
        </v-list-item>

        <v-list-item>
          <div>Item 2</div>
        </v-list-item>

        <v-list-item>
          <div>Item 3</div>
        </v-list-item>
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
