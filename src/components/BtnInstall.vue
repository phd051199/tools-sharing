<template>
  <v-btn
    flat
    :color="isInstalled ? 'tertiary' : 'primary'"
    :loading="loading"
    @click="toggleInstall"
    class="text-none z-2"
    :append-icon="isInstalled ? 'mdi-close' : 'mdi-plus'"
    >{{ isInstalled ? 'Uninstall' : 'Install' }}
  </v-btn>
</template>

<script setup lang="ts">
import without from 'lodash/without';

import {
  // apiGetScript,
  Script
} from '@/apis/script';
import { useScriptStorage } from '@/stores/script';
import { localStorage } from '@/utils/storage';

const props = defineProps<{
  script: Script;
}>();

const loading = ref(false);
const scriptStorage = useScriptStorage();

const isInstalled = computed(() =>
  scriptStorage.installed.includes(props.script.id)
);

// const { data, fetchData } = apiGetScript(props.script.id).lazyFetch();
// const { deleteFile, downloadAndSaveFile } = useFileStorage();

const toggleInstall = async (e: Event) => {
  e.stopPropagation();

  loading.value = true;

  const installed = localStorage.get('installed') ?? [];
  const updatedInstalled = isInstalled.value
    ? without(installed, props.script.id)
    : [...installed, props.script.id];

  // if (isInstalled.value) {
  //   await deleteFile(props.script.id);
  // } else {
  //   await fetchData();
  //   await downloadAndSaveFile(data.value!.fileUrl, props.script.path);
  // }

  window.setTimeout(() => {
    scriptStorage.setInstalled(updatedInstalled);
    loading.value = false;
  }, 500);
};
</script>
