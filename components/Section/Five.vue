<template>
  <section
    :class="[
      'flex flex-col md:flex-row items-center gap-10 py-20 px-6',
      reverse ? 'md:flex-row-reverse' : '',
    ]"
  >
    <NuxtImg :src="src" class="w-full md:w-1/2 rounded-xl shadow-lg" />
    <div class="md:w-1/2">
      <h2 class="text-4xl font-bold mb-4">{{ title }}</h2>
      <p class="text-lg text-neutral-400">{{ content }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
  src: string;
  reverse?: boolean;
}>();
</script>
