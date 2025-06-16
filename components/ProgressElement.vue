<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  width: {
    type: [String, Number],
    required: true,
  },
});

const { width } = toRefs(props);

const computedWidth = computed(() => {
  if (typeof width.value === "number") {
    return `${width.value}px`;
  }
  return width.value;
});
</script>

<template>
  <div
    class="relative h-2 bg-gray-200 rounded-full overflow-hidden transition-all duration-500 ease-out"
    :style="{ width: computedWidth }"
  >
    <div class="absolute inset-0 w-full h-full flex items-center justify-center">
      <div class="w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>
