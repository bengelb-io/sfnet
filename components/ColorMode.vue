<script setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set(_isDark) {
        colorMode.preference = _isDark ? 'dark' : 'light'
    }
})
const label = computed(() => {
    if (isDark.value) {
        return 'Switch To Light'
    }
    return 'Switch To Dark'
})

</script>

<template>
    <ClientOnly v-if="!colorMode?.forced">
        <USwitch @change="isDark = !isDark" size="xl" color="neutral" :label="label" unchecked-icon="i-lucide-moon"
            checked-icon="i-lucide-sun" />
        <template #fallback>
            <USwitch size="xl" color="neutral" label="Switch To Dark" unchecked-icon="i-lucide-moon"
                checked-icon="i-lucide-sun" />
        </template>
    </ClientOnly>
</template>
