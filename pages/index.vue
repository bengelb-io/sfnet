<script setup lang="ts">
// import ProgressElement from "~/components/ProgressElement.vue";
// const canvas = ref<HTMLDivElement>();

const { sections } = useStaticContent();
</script>

<template>
  <div>

    <div />
    <SectionOne v-bind="sections[0]" />
    <SectionTwo v-bind="sections[1]" />
    <SectionThree v-bind="sections[2]" />
    <SectionFour v-bind="sections[3]" />
    <SectionFive v-bind="sections[4]" />
  </div>
</template>
