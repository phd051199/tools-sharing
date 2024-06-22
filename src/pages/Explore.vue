<template>
  <v-container>
    <div class="font-weight-black text-h4 my-1">Explore</div>
    <div class="text-h5 mb-8">Featured Scripts</div>

    <v-row v-if="data">
      <v-col cols="12" lg="6" class="space-y-6">
        <script-card
          v-for="script in dataPart[0]"
          :script="script"
          :key="script.id"
        />
      </v-col>

      <v-col v-if="dataPart[1]" cols="12" lg="6" class="space-y-6">
        <script-card
          v-for="script in dataPart[1]"
          :script="script"
          :key="script.id"
        />
      </v-col>
    </v-row>

    <v-row v-if="isLoading">
      <v-col cols="12" lg="6" v-for="n in 4" :key="n">
        <v-card
          flat
          :style="{
            borderRadius: '1.5rem !important'
          }"
        >
          <v-skeleton-loader flat type="card, article"></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { useDisplay } from 'vuetify';

import { Script } from '@/types/script';
import { partitionWithIndex } from '@/utils';

const { data, isLoading } = useQuery<Script[]>({
  queryKey: ['/script']
});

const { mdAndDown } = useDisplay();

const dataPart = computed(() => {
  const dataValue = data.value;

  if (mdAndDown.value) {
    return [dataValue];
  }

  return partitionWithIndex(dataValue, (_, index) => index % 2 === 0);
});
</script>

<style lang="scss">
.v-divider {
  &__content {
    position: absolute;
    right: 1rem; /* 16px */
  }
}

.text-description {
  font-size: 0.75rem !important; /* 12px */
  line-height: 1rem !important; /* 16px */
  font-family: monaco !important;
}

.v-skeleton-loader {
  background-color: rgb(var(--v-theme-background)) !important;
  border: 1px solid rgb(var(--v-theme-surface-variant)) !important;
  border-radius: 1.5rem !important;

  &__image {
    background-color: rgb(var(--v-theme-surface)) !important;
    height: 4.75rem !important;
  }
}
</style>
