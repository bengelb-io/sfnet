<script setup lang="ts">
defineProps<{
  agencies: {
    name: string;
    logo: string;
    country: string;
  }[];
}>();
</script>

<template>
  <UCard class="bg-slate-900 border border-slate-800 shadow-xl p-6 sm:w-full max-w-full">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-semibold text-white">
        Western Defense & Security Agencies
      </h2>
      <p class="text-sm text-slate-400">
        By 2035, the United States and its strategic partners will transition
        their systems to PQC.
      </p>
    </div>

    <UCarousel
      :items="agencies"
      :autoplay="{ delay: 3000 }"
      :ui="{
        container: 'gap-4',
        item: 'flex items-center justify-center p-2 sm:basis-1/3',
        arrows: {
          base: 'bg-slate-800/50 hover:bg-slate-700 text-white',
        },
      }"
      class="w-full"
    >
      <template #default="{ item }">
        <div
          class="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-slate-600 rounded-xl p-4 flex flex-col items-center justify-center gap-2"
        >
          <NuxtImg
            :src="item.logo"
            :alt="item.name"
            class="sm:w-20 md:w-24 h-24 object-contain"
          />
          <p class="text-xs sm:text-sm text-slate-100 text-center font-medium">
            {{ item.name }}
          </p>
          <p class="text-[10px] sm:text-xs text-slate-400 text-center">
            {{ item.country }}
          </p>
        </div>
      </template>
    </UCarousel>
  </UCard>
</template>
