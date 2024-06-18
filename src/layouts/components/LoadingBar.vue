<template>
  <v-progress-linear
    class="z-999 fixed!"
    :active="loadingStore.loading"
    color="primary"
    height="4"
    :model-value="progress"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useLoadingStore } from '@/stores/loading';

const progress = ref<number>(0);
const loadingStore = useLoadingStore();
const router = useRouter();

let valueTimer: number;
let finishTimer: number;

const clearTimers = () => {
  window.clearTimeout(valueTimer);
  window.clearTimeout(finishTimer);
};

const incrementProgress = () => {
  valueTimer = window.setTimeout(() => {
    if (progress.value < 95) {
      const increment =
        progress.value < 70 ? Math.round(50 * Math.random()) : Math.random();
      progress.value += increment;
      incrementProgress();
    }
  }, 200);
};

const startProgress = () => {
  clearTimers();
  progress.value = 0;
  incrementProgress();
};

const finishProgress = () => {
  clearTimers();
  progress.value = 100;
  finishTimer = window.setTimeout(() => {
    progress.value = 0;
  }, 500);
};

watch(
  () => loadingStore.loading,
  (loading) => {
    if (loading) {
      startProgress();
    } else {
      finishProgress();
    }
  },
  { immediate: true }
);

router.beforeEach(() => {
  loadingStore.setLoading(true);
});

router.beforeResolve(() => {
  loadingStore.setLoading(false);
});
</script>
