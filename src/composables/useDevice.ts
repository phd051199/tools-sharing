export function useDevice() {
  const windowWidth = ref(window.innerWidth);

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });

  const isMobile = computed(() => windowWidth.value <= 768);
  const smallerMdWidth = computed(() => windowWidth.value < 1280);

  return {
    windowWidth,
    isMobile,
    smallerMdWidth
  };
}
