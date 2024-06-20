<template>
  <v-card
    :elevation="0"
    class="mb-6"
    :style="{
      border: '1px solid rgb(var(--v-theme-surface-variant)) !important',
      borderRadius: '1.5rem !important'
    }"
  >
    <template #title>
      <v-card-title class="font-weight-black mt-1">{{
        `Tool ${script.id}`
      }}</v-card-title>
    </template>

    <template #subtitle>
      <span class="font-bold">by John Lindquist</span>
    </template>

    <v-divider />

    <div class="bg-background">
      <v-container>
        <v-text-field label="param1"></v-text-field>
        <v-text-field label="param2"></v-text-field>
      </v-container>

      <v-divider>
        <v-btn
          flat
          @click="() => false"
          class="text-none z-2"
          append-icon="mdi-play"
          >Run
        </v-btn>
      </v-divider>

      <v-container class="mt-4">
        <v-text-field label="output" disabled></v-text-field>
      </v-container>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Script } from '@/apis/script';

defineProps<{
  script: Script;
}>();
</script>
