<template>
  <v-container>
    <div class="font-weight-black text-h3 my-4">Explore</div>
    <div class="text-h5 mb-8">Featured Scripts</div>

    <v-row v-if="data">
      <v-col cols="12" lg="6">
        <script-card
          v-for="script in dataPart[0]"
          :script="script"
          :key="script.id"
          :code="script.id % 2 === 0 ? codeData[0] : codeData[1]"
        />
      </v-col>

      <v-col v-if="dataPart[1]" cols="12" lg="6">
        <script-card
          v-for="script in dataPart[1]"
          :script="script"
          :key="script.id"
          :code="script.id % 2 === 0 ? codeData[0] : codeData[1]"
        />
      </v-col>
    </v-row>

    <v-row v-else>
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
import * as PluginTypeScript from 'prettier/parser-typescript';
import * as PluginESTree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';

import { apiGetScripts } from '@/apis/script';
import { code } from '@/mocks/code';
import { partitionWithIndex } from '@/utils';

const { data } = apiGetScripts.fetch();
const { smallerMdWidth } = useDevice();

let codeData: string[] = [];

if (code.length) {
  const formatCode = code.map((item) =>
    prettier.format(item, {
      parser: 'typescript',
      plugins: [PluginESTree, PluginTypeScript]
    })
  );
  codeData = await Promise.all(formatCode);
}

const dataPart = computed(() => {
  const dataValue = data.value;

  if (smallerMdWidth.value) {
    return [dataValue];
  }

  return partitionWithIndex(dataValue, (_, index) => index % 2 === 0);
});
</script>

<style lang="scss">
.v-divider {
  &__content {
    --at-apply: 'absolute right-4';
  }
}

.text-description {
  --at-apply: 'text-xs! font-[monaco]!';
}

.v-skeleton-loader {
  background-color: rgb(var(--v-theme-background)) !important;
  border: 1px solid rgb(var(--v-theme-surface-variant)) !important;
  border-radius: 1.5rem !important;

  &__image {
    background-color: rgb(var(--v-theme-surface)) !important;
    --at-apply: 'h-19!';
  }
}
</style>
