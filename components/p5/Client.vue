<script lang="ts" setup>
const { canvas } = defineProps<{
  canvas: Ref<HTMLDivElement | undefined>;
}>();
</script>

<template>
  <ClientOnly>
    <P5Canvas :sketch="useHyperSpace(canvas)" />
    <template #fallback>
      <div />
    </template>
  </ClientOnly>
</template>
