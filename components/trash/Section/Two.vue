<script setup lang="ts">
defineProps<{ title: string; content: string; src: string }>();
</script>

<template>
  <section class="text-center max-w-3xl mx-auto py-20 px-6">
    <NuxtImg
      :src="src"
      class="w-full max-w-md mx-auto mb-8 rounded-xl shadow"
    />
    <h2 class="text-4xl font-extrabold mb-4">{{ title }}</h2>
    <p class="text-lg text-neutral-400">{{ content }}</p>
  </section>
</template>
