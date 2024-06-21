<template>
  <v-card
    :elevation="0"
    :ripple="false"
    @click="router.push(`/script/${script.id}`)"
    :style="{
      border: '1px solid rgb(var(--v-theme-surface-variant)) !important',
      borderRadius: '1.5rem !important'
    }"
  >
    <template #title>
      <v-card-title
        class="font-weight-black"
        :style="{
          color: 'rgb(var(--v-theme-on-surface-variant)) !important'
        }"
        >{{ `Script ${script.id}` }}</v-card-title
      >
    </template>

    <template #subtitle>
      <span class="font-bold">by John Lindquist</span>
    </template>

    <v-divider>
      <btn-install :script="script" />
    </v-divider>

    <div class="bg-background pb-2 pt-6">
      <v-card-subtitle class="text-description">
        // Created: {{ $dayjs(script.createdAt).format('YYYY/MM/DD') }}
      </v-card-subtitle>

      <v-card-subtitle class="text-description">
        // Path: {{ script.path }}
      </v-card-subtitle>

      <highlightjs
        class="max-h-200 overflow-hidden"
        :autodetect="true"
        :code="script.scriptContent ?? ''"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { Script } from '@/types/script';

const router = useRouter();

defineProps<{
  script: Script;
}>();
</script>
