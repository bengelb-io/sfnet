<script setup lang="ts">
import { useWindowSize } from '@vueuse/core' // Optional, explained below
const { width } = useWindowSize()

</script>
<template>
    <nav class="flex p-2 text-lg font-bold items-center align-center justify-between">
        <NuxtLink to="/">
            <NuxtImg class="size-16" src="sfnet.png" />
        </NuxtLink>
        <div class="flex gap-2 sm:flex-row flex-col">
            <NuxtLink to="/education">Education</NuxtLink>
            <ColorMode />
        </div>
    </nav>
    <main class="flex flex-col items-center">
        <slot />
    </main>
</template>