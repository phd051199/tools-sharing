<template>
  <v-app-bar color="background" class="fixed!" :height="88">
    <template #prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-container>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Search scripts"
        variant="solo"
        single-line
        flat
        clearable
        hide-details
        rounded
      ></v-text-field>
    </v-container>

    <template #append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
