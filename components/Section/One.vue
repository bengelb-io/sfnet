<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4 md:px-16">
    <NuxtImg :src="src" alt="Image" class="w-full h-auto rounded-2xl shadow-md" />

    <div>
      <h2 class="text-4xl font-bold mb-4">{{ title }}</h2>
      <p class="text-lg text-neutral-400" >{{ content }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; content: string; src: string }>()
</script>