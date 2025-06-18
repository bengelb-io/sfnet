<template>
  <div class="flex flex-col items-center gap-4">
    <div
      class="relative flex aspect-square w-32 sm:w-48 md:w-64 overflow-hidden rounded-full shadow-lg ring-2 ring-slate-700"
    >
      <img
        :src="src"
        :alt="caption"
        class="object-cover object-center w-full h-full"
        loading="lazy"
      >
    </div>
    <p class="text-slate-400 text-sm text-center">
      {{ caption }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string;
  caption: string;
}>();
</script>
