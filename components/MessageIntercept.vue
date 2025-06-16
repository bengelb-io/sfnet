<!-- <script setup lang="ts">
defineProps<{

}>()

</script>

<template>
    <div>
        <slot name="origin" />
        
        <slot name="destination" />
    </div>
</template> -->

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Number of dots
const dotCount = 5
const dots = ref(Array(dotCount).fill(null))

// Current lit dot index
const currentDot = ref(-1)

// Check if all dots are lit
const allDotsLit = computed(() => currentDot.value >= dotCount)

// Animation interval
let animationInterval = null

// Start animation
const startAnimation = () => {
    currentDot.value = -1

    animationInterval = setInterval(() => {
        if (currentDot.value < dotCount - 1) {
            currentDot.value++
        } else {
            // Reset after a pause
            setTimeout(() => {
                currentDot.value = -1
            }, 1000)
        }
    }, 400)
}

// Lifecycle hooks
onMounted(() => {
    startAnimation()
})

onUnmounted(() => {
    if (animationInterval) {
        clearInterval(animationInterval)
    }
})
</script>

<template>
    <div class="flex items-center justify-center p-8">
        <div class="flex items-center space-x-3">
            <slot name="origin" />

            <!-- Dots -->
            <div v-for="(dot, index) in dots" :key="index"
                class="w-3 h-3 rounded-full transition-all duration-300 ease-in-out" :class="[
                    index <= currentDot
                        ? 'bg-blue-500 shadow-lg shadow-blue-500/50 scale-110'
                        : 'bg-gray-300'
                ]"></div>

            <!-- Arrow -->
            <div class="ml-4">
                <svg class="w-6 h-6 transition-all duration-300 ease-in-out" :class="[
                    allDotsLit
                        ? 'text-blue-500 scale-110'
                        : 'text-gray-400'
                ]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </div>
        </div>
        <slot name="destination" />
    </div>
</template>