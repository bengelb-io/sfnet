<script setup lang="ts">
defineProps<{ width: string }>()
</script>

<template>
    <div :class="`width-[${width}] animate-grow`" >
        <slot />
    </div>
</template>
