<template>
  <div class="flex flex-col items-center text-center">
    <!-- Circular Icon Container -->
    <div
      class="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center"
    >
      <UIcon name="i-lucide-file-text" class="text-primary" :size="36" />
    </div>

    <!-- Caption -->
    <p class="mt-4 text-slate-200 text-sm">
      {{ title }}
    </p>

    <!-- Link -->
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-sm text-primary hover:underline mt-1"
    >
      Read the Paper →
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
// No setup needed unless you're dynamically injecting props.
</script>

<style scoped>
/* Optional: add hover effect or animation */
</style>
