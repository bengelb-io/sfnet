<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();

const paragraphs = props.content
  .split(/\n+/)
  .map((p) => p.trim())
  .filter((p) => p.length > 0);
</script>

<template>
  <div
    class=" mt-6 text-slate-300 text-base leading-relaxed space-y-4"
  >
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      v-html="paragraph"
    />
  </div>
</template>
