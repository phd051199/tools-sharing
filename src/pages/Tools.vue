<template>
  <v-container>
    <div class="text-h4 font-weight-black my-1">My tools</div>
    <div class="text-h5 mb-8">
      {{
        scriptStorage.installed.length
          ? 'Installed Scripts'
          : 'No script installed'
      }}
    </div>

    <v-row v-if="scriptStorage.installed.length">
      <v-col cols="12" lg="6">
        <tool-card
          v-for="script in dataPart[0]"
          :script="script"
          :key="script.id"
        />
      </v-col>

      <v-col v-if="dataPart[1]" cols="12" lg="6">
        <tool-card
          v-for="script in dataPart[1]"
          :script="script"
          :key="script.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

import { useScriptStorage } from '@/stores/script';
import { partitionWithIndex } from '@/utils';

const { mdAndDown } = useDisplay();
const scriptStorage = useScriptStorage();

const dataPart = computed(() => {
  const dataValue = scriptStorage.installed.map((id: any) => ({ id }));

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
  &__image {
    background-color: rgb(var(--v-theme-surface)) !important;
    height: 4.75rem !important;
  }
}
</style>
