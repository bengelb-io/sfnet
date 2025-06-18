<script setup>
const logos = [
  "cia.png", // Central Intelligence Agency (USA)
  "mi6.png", // Secret Intelligence Service (UK)
  "mossad.svg", // Mossad (Israel)
  "dhs.png", // Federal Security Service (Russia)
  "nsa.png", // Inter-Services Intelligence (Pakistan)
];
</script>

<template>
  <UCarousel v-slot="item" :items="logos" class="max-w-4xl mx-auto" :ui="{ item: 'basis-1/4' }"  auto-scroll infinite>
    <NuxtImg :src="`intel/${item}`" class="h-24 object-contain" />
  </UCarousel>
</template>
