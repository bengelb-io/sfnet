<script setup lang="ts">
defineProps<{ title: string; content: string; src: string }>();
</script>

<template>
  <UCard class="max-w-4xl mx-auto my-16">
    <template #header>
      <NuxtImg :src="src" class="w-full h-64 object-cover rounded-t-xl" />
    </template>

    <template #default>
      <h2 class="text-3xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-neutral-400 text-base">{{ content }}</p>
    </template>
  </UCard>
</template>
