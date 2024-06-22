<template>
  <v-app-bar color="background" class="fixed!" :height="88">
    <template #prepend>
      <v-btn color="tertiary" v-if="$vuetify.display.mdAndDown" icon>
        <i-material-symbols:menu class="size-8" /> </v-btn
    ></template>

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
      >
      </v-text-field>
    </v-container>

    <template #append>
      <v-btn color="tertiary xl:m-4" v-if="$vuetify.display.lgAndUp" icon>
        <i-material-symbols:translate class="size-8" />
      </v-btn>

      <v-btn color="tertiary xl:m-4" icon>
        <i-material-symbols:account-circle class="size-8" />
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
