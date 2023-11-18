import { useTheme } from 'vuetify';

import { localStorage } from '@/utils/storage';

export function useDark() {
  const theme = useTheme();

  const isDark = computed(() => theme.current.value.dark);

  function toggleDark() {
    theme.global.name.value = isDark.value ? 'light' : 'dark';
    localStorage.set('prefer-dark', isDark.value);
  }

  return {
    isDark,
    toggleDark
  };
}
