<script setup lang="ts">
defineProps<{
    max: number
    values: number[]
}>()

const chartRef = ref<HTMLDivElement>()
const maxWidth = ref(0)

onMounted(() => {
    if (chartRef.value) {
        const { width } = chartRef.value?.getBoundingClientRect()
        maxWidth.value = width
    }
})
</script>

<template>
    <div ref="chartRef" class="min-w-96 flex flex-col gap-4">
        <div v-for="value in values">
            <BarElement  :width="`${Math.floor(maxWidth * (value /max))}px`">
                <div class="bg-primary p-1 rounded-full" />
            </BarElement>
        </div>
    </div>
</template>