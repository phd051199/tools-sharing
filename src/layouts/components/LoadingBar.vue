<template>
  <v-progress-linear
    class="z-999 fixed!"
    :active="loadingStore.loading"
    color="primary"
    height="4"
    :model-value="progress"
  ></v-progress-linear>
</template>

<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading';

const progress = ref<number>(0);
const loadingStore = useLoadingStore();

let valueTimer: number;
let finishTimer: number;

const clearTimer = () => {
  window.clearTimeout(valueTimer);
  window.clearTimeout(finishTimer);
};

const tickValue = () => {
  valueTimer = window.setTimeout(() => {
    if (progress.value < 95) {
      let num = Math.random();
      if (progress.value < 70) num = Math.round(50 * Math.random());
      progress.value += num;
      tickValue();
    }
  }, 200);
};

const start = () => {
  clearTimer();
  progress.value = 0;
  tickValue();
};

const finish = () => {
  clearTimer();
  progress.value = 100;
  finishTimer = window.setTimeout(() => {
    progress.value = 0;
  }, 500);
};

watch(
  () => loadingStore.loading,
  (loading) => {
    loading ? start() : finish();
  },
  { immediate: true }
);
</script>
