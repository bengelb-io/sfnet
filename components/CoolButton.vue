
<template>
  <button
    class="relative px-6 py-3 font-semibold text-white bg-gray-900 rounded-full overflow-hidden group"
  >
    <span class="relative z-10"><slot/></span>

    <!-- Animated Gradient Border -->
    <span
      class="absolute inset-0 rounded-full p-2 bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 animate-gradient-border blur-sm"
    />

    <!-- Mask to keep background solid -->
    <span class="absolute inset-0 bg-gray-900 rounded-lg" />
  </button>
</template>

<style scoped>
@keyframes gradient-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-border {
  background-size: 300% 300%;
  animation: gradient-border 3s linear infinite;
}
</style>
