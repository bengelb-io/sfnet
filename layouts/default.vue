<script setup lang="ts">
import { useWindowSize } from "@vueuse/core"; // Optional, explained below
const { width } = useWindowSize();
</script>
<template>
  <div>
    <P5Canvas class="w-full min-h-screen h-screen w-64 h-64 z-10">
      <div
        class="absolute w-full min-h-screen h-screen flex flex-col items-center justify-center gap-4"
      >
        <div class="flex gap-2 items-center">
          <NuxtLink to="/">
            <NuxtImg class="size-16" src="sfnet.png" />
          </NuxtLink>
          <h1
            class="text-6xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-5xl font-extrabold text-transparent pb-2 my-2"
          >
            BayAreaSecure.ai
          </h1>
        </div>
        <h2 class="text-xl font-extrabold">
          Beyond Quantum: Secure Today, Safe Tomorrow
        </h2>
        <UButton
          icon="i-lucide-rocket"
          color="neutral"
          variant="outline"
          :ui="{
            leadingIcon: 'text-primary cursor-hover',
          }"
        >
          Join The Movement
        </UButton>
      </div>
    </P5Canvas>

    <main class="flex flex-col items-center">
      <slot />
    </main>
  </div>
</template>
