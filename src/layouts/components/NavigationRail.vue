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
        />
      </v-container>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in navItems"
        :key="index"
        class="mb-3.5 h-15 p-0!"
        :ripple="false"
      >
        <v-container class="text-center p-0!" @click="navigateTo(item.link)">
          <v-btn
            flat
            ripple
            :color="getButtonColor(item.link)"
            class="mx-auto mb-1 h-8! min-w-14!"
          >
            <component
              class="size-6"
              :is="item.icon"
              :style="getActiveStyle(item.link)"
            />
          </v-btn>
          <div class="text-xs" :style="getActiveStyle(item.link)">
            {{ item.title }}
          </div>
        </v-container>
      </v-list-item>
    </v-list>

    <template #append>
      <v-container class="text-center">
        <v-btn
          color="rgb(var(--v-theme-on-surface-variant))"
          variant="outlined"
          @click="toggleDark"
          :icon="toggleIcon"
          :elevation="0"
        />
      </v-container>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import IMaterialSymbolsCode from '~icons/material-symbols/code';
import IMaterialSymbolsBookOutline from '~icons/material-symbols/handyman-outline';
import IMaterialSymbolsHomeOutline from '~icons/material-symbols/home-outline';

const { isDark, toggleDark } = useDark();
const router = useRouter();

const navItems = [
  { badge: true, link: '/', title: 'Home', icon: IMaterialSymbolsHomeOutline },
  {
    badge: true,
    link: '/explore',
    title: 'Explore',
    icon: IMaterialSymbolsCode
  },
  {
    badge: false,
    link: '/tools',
    title: 'My tools',
    icon: IMaterialSymbolsBookOutline
  }
];

const isActivated = (link: string) => {
  return router.currentRoute.value.path === link;
};

const navigateTo = (link: string) => {
  router.push(link);
};

const getButtonColor = (link: string) => {
  return isActivated(link) ? 'secondary-container' : 'transparent';
};

const getActiveStyle = (link: string) => {
  return {
    fontWeight: isActivated(link) ? '900' : '700',
    color: isActivated(link)
      ? 'rgb(var(--v-theme-on-surface))'
      : 'rgb(var(--v-theme-on-surface-variant))'
  };
};

const toggleIcon = computed(() =>
  isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night'
);
</script>
