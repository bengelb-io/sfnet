<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  icon?: string;
  iconSize?: string | number;
  color?: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center gap-2">
    <div
      class="hidden text-red-500 text-red-500 text-blue-500 text-green-500 text-yellow-500 text-purple-500 text-pink-500 text-orange-500 text-teal-500 text-indigo-500 text-emerald-500"
    />
    <div class="flex gap-4 items-center">
      <Icon
        v-if="icon"
        :name="icon"
        :size="iconSize"
        :class="`text-${color}-500`"
      />
      <h1
        class="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide"
        :class="`animate-glow-text glow-text-${color}`"
      >
        {{ title }}
      </h1>
    </div>

    <p class="text-slate-400 text-base md:text-lg max-w-prose">
      {{ subtitle }}
    </p>
  </div>
</template>
