<template>
  <v-navigation-drawer
    color="surface"
    rail
    floating
    class="fixed!"
    :rail-width="88"
    :mobile-breakpoint="768"
  >
    <template #prepend>
      <v-container class="text-center">
        <v-btn
          flat
          color="tertiary-container"
          :min-width="56"
          :min-height="56"
          icon="mdi-magnify"
          :style="{ borderRadius: '1rem !important' }"
        >
        </v-btn>
      </v-container>
    </template>

    <v-list>
      <v-list-item
        class="mb-3.5 h-15 p-0!"
        :ripple="false"
        v-for="(item, index) in navItems"
        :key="index"
      >
        <v-container class="text-center p-0!" @click="router.push(item.link)">
          <v-btn
            flat
            ripple
            :color="
              router.currentRoute.value.path === item.link
                ? 'secondary-container'
                : 'transparent'
            "
            class="mx-auto mb-1 h-8! min-w-14!"
          >
            <component class="size-6" :is="item.icon"></component>
          </v-btn>

          <div
            class="cursor-pointer text-xs"
            :style="{
              fontWeight:
                router.currentRoute.value.path === item.link ? '900' : '700'
            }"
          >
            {{ item.title }}
          </div>
        </v-container>
      </v-list-item>
    </v-list>

    <template #append>
      <v-container class="text-center">
        <v-btn
          color="on-surface"
          variant="outlined"
          @click="toggleDark"
          :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          :elevation="0"
        >
        </v-btn>
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import IMaterialSymbolsAddCircleOutline from '~icons/material-symbols/add-circle-outline';
import IMaterialSymbolsApps from '~icons/material-symbols/apps';
import IMaterialSymbolsBookOutline from '~icons/material-symbols/book-outline';
import IMaterialSymbolsCode from '~icons/material-symbols/code';
import IMaterialSymbolsHomeOutline from '~icons/material-symbols/home-outline';
import IMaterialSymbolsPaletteOutline from '~icons/material-symbols/palette-outline';

const { isDark, toggleDark } = useDark();

const router = useRouter();

const navItems = [
  { badge: true, link: '/', title: 'Home', icon: IMaterialSymbolsHomeOutline },
  {
    badge: true,
    link: '/explore',
    title: 'Develop',
    icon: IMaterialSymbolsCode
  },
  { badge: false, link: '#', title: 'Get started', icon: IMaterialSymbolsApps },
  {
    badge: false,
    link: '#',
    title: 'Foundations',
    icon: IMaterialSymbolsBookOutline
  },
  {
    badge: false,
    link: '#',
    title: 'Styles',
    icon: IMaterialSymbolsPaletteOutline
  },
  {
    badge: false,
    link: '#',
    title: 'Components',
    icon: IMaterialSymbolsAddCircleOutline
  }
];
</script>
