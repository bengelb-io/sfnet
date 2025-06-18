<script lang="ts" setup>
const { max, data } = defineProps<{
  max: number;
  data: {
    value: number;
    label: string;
    iconName: string;
  }[];
}>();
const dataWidth = reactive(data.map((d) => ({ width: 0, ...d })));
const graphContainerRef = ref<HTMLDivElement>();
onMounted(() => {
  if (graphContainerRef.value) {
    const graphElement = graphContainerRef.value;
    const { width } = graphElement.getBoundingClientRect();
    dataWidth.forEach((d, i) => {
      const ratio = d.value / max;
      dataWidth[i] = { ...d, width: width * ratio };
    });
  }
});
</script>

<template>
  <div ref="graphContainerRef" class="flex flex-col gap-4">
    <div
      v-for="({ width, iconName, value, label }, i) in dataWidth"
      :key="i"
      class="flex items-center mt-6"
    >
      <div class="flex flex-col text-grey-200">
        <div class="absolute sm:-mt-6 -mt-12 sm:max-w-full max-w-24">
          <p class="text-gray-400">{{ label }}</p>
        </div>
        <GraphColumn :width="width" class="delay-250">
          <div class="bg-secondary p-2 w-full" />
        </GraphColumn>
      </div>

      <div class="-ml-2 z-0 inline-block rounded-full ring-2 ring-secondary">
        <UAvatar :icon="iconName" size="md" class="z-0" />
      </div>
      <div class="ml-2">
        <p>
          {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>
