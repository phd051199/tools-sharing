<template>
  <v-container>
    <v-btn class="mb-8" @click="fetchData" :loading="loading">fetch</v-btn>

    <div>
      <v-row no-gutters>
        <v-col v-for="n in data" :key="n.id" cols="12" sm="4">
          <v-card @click="() => false" class="ma-2 pa-2" v-if="n.path">
            <v-card-title>{{ n.id }}</v-card-title>
            <v-card-subtitle>{{ $dayjs(n.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</v-card-subtitle>
            <v-card-text>{{ n.path }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { apiGetScripts } from '@/apis/script';

const { data, loading, fetchData } = apiGetScripts.fetch();
</script>
