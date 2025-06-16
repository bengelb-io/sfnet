<script setup lang="ts">
defineProps<{ title: string; content: string; src: string }>();
</script>

<template>
  <section
    class="relative py-32 px-8 text-white text-center"
    :style="`background-image: url(${src}); background-size: cover; background-position: center;`"
  >
    <div class="absolute inset-0 bg-black/60" />
    <div class="relative z-10 max-w-3xl mx-auto">
      <h2 class="text-5xl font-bold mb-4">{{ title }}</h2>
      <p class="text-xl text-neutral-200">{{ content }}</p>
    </div>
  </section>
</template>
