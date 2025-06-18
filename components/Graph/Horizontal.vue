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
  <div ref="graphContainerRef" class="flex flex-col gap-4 max-w-96">
    <div
      v-for="({ width, iconName }, i) in dataWidth"
      :key="i"
      class="flex items-center"
    >
      <GraphColumn :width="width" class="delay-250">
        <!-- <div class="flex justify-center align-center"> -->
        <div class="bg-secondary p-2 w-full" />
        <!-- </div> -->
      </GraphColumn>
      <div class="-ml-2 z-0 inline-block rounded-full ring-2 ring-secondary">
        <UAvatar :icon="iconName" size="md" class="z-0" />
      </div>
    </div>
  </div>
</template>
