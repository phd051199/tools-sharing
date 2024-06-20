<template>
  <v-container>
    <div class="font-weight-black text-h3 my-4">My tools</div>
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
import { useScriptStorage } from '@/stores/script';
import { partitionWithIndex } from '@/utils';

const { smallerMdWidth } = useDevice();
const scriptStorage = useScriptStorage();

const dataPart = computed(() => {
  const dataValue = scriptStorage.installed.map((id: any) => ({ id }));

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
  &__image {
    --at-apply: 'h-19!';
  }
}
</style>
