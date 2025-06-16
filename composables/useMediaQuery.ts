import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowSize } from '@vueuse/core' // Optional, explained below

export function useMediaQuery() {
  const width = ref(0)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return {
    width,
    // isMobile: computed(() => width.value < 768),
    // isTablet: computed(() => width.value >= 768 && width.value < 1024),
    // isDesktop: computed(() => width.value >= 1024),
  }
}
