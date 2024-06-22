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
          :style="{ borderRadius: '1rem !important' }"
        >
          <i-material-symbols:edit-outline class="size-5" />
        </v-btn>
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
              :is="item[getIconKey(isActivated(item.link))]"
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
import IMaterialSymbolsCodeBlocks from '~icons/material-symbols/code-blocks';
import IMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline';
import IMaterialSymbolsFlowSheet from '~icons/material-symbols/flowsheet';
import IMaterialSymbolsFlowSheetOutline from '~icons/material-symbols/flowsheet-outline';
import IMaterialSymbolsBook from '~icons/material-symbols/handyman';
import IMaterialSymbolsBookOutline from '~icons/material-symbols/handyman-outline';
import IMaterialSymbolsHome from '~icons/material-symbols/home';
import IMaterialSymbolsHomeOutline from '~icons/material-symbols/home-outline';

const { isDark, toggleDark } = useDark();
const router = useRouter();

const navItems = [
  {
    badge: true,
    link: '/',
    title: 'Home',
    icon: IMaterialSymbolsHomeOutline,
    activeIcon: IMaterialSymbolsHome
  },
  {
    badge: true,
    link: '/explore',
    title: 'Explore',
    icon: IMaterialSymbolsCodeBlocksOutline,
    activeIcon: IMaterialSymbolsCodeBlocks
  },
  {
    badge: false,
    link: '/tools',
    title: 'My tools',
    icon: IMaterialSymbolsBookOutline,
    activeIcon: IMaterialSymbolsBook
  },
  {
    badge: false,
    link: '/flows',
    title: 'Flows',
    icon: IMaterialSymbolsFlowSheetOutline,
    activeIcon: IMaterialSymbolsFlowSheet
  }
];

const isActivated = (link: string) => router.currentRoute.value.path === link;

const navigateTo = (link: string) => router.push(link);

const getButtonColor = (link: string) =>
  isActivated(link) ? 'secondary-container' : 'transparent';

const getActiveStyle = (link: string) => ({
  fontWeight: isActivated(link) ? '900' : '700',
  color: isActivated(link)
    ? 'rgb(var(--v-theme-on-surface))'
    : 'rgb(var(--v-theme-on-surface-variant))'
});

const getIconKey = (isActivated: boolean) =>
  isActivated ? 'activeIcon' : 'icon';

const toggleIcon = computed(() =>
  isDark.value ? 'mdi-weather-sunny' : 'mdi-weather-night'
);
</script>
