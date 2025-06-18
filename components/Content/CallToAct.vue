<script setup lang="ts">
const props = defineProps<{
  color:
    | "error"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "neutral";
  label: string;
  onClick?: () => void;
}>();

const onClick = props.onClick || (() => {});
</script>

<template>
  <div
    class="mt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 "
  >
    <p class="text-lg font-semibold text-slate-100">
      <slot />
    </p>

    <slot name="elaborate" />

    <UButton
      size="lg"
      variant="outline"
      :ui="{ base: 'cursor-hover w-fit' }"
      :color="color"
      type="button"
      @click="onClick"
    >
      {{ label }}
    </UButton>
  </div>
</template>
