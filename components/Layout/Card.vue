<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

defineProps<{
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  content: string;
  ctaLabel: string;
  ctaText: string;
  color:
    | "error"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "neutral";
  onClick?: () => void;
}>();
const { width } = useWindowSize();
</script>

<template>
  <UCard
    class="bg-slate-900 border border-slate-700 shadow-xl p-6 rounded-2xl animate-fade-in"
  >
    <div class="flex sm:flex-row flex-col">
      <div class="sm:basis-2/3">
        <ContentGlowTitle
          :title="title"
          :subtitle="subtitle"
          :icon="icon"
          :icon-size="32"
          :color="iconColor"
        />

        <ContentBlock v-if="width > 640" :content="content" />
      </div>

      <div
        v-if="width > 640"
        class="flex-grow flex flex-col gap-4 items-end mt-6 sm:mt-0 sm:justify-center"
      >
        <slot name="figure" />
      </div>
    </div>

    <ContentCallToAct :on-click="onClick" :label="ctaLabel" :color="color">
      <template #elaborate>
        <UCollapsible
          v-if="width < 640"
          class="flex mt-4 items-center flex-col gap-2"
        >
          <UButton
            label="Read More"
            color="neutral"
            variant="ghost"
            :ui="{ base: ' w-fit self-center' }"
            trailing-icon="i-lucide-chevron-down"
            block
          />

          <template #content>
            <div class="flex-col gap-4">
              <div
                class="flex-grow flex flex-col gap-4 items-center mt-6 sm:mt-0 sm:justify-center"
              >
                <slot name="figure" />
              </div>
            </div>
            <ContentBlock :content="content" />
          </template>
        </UCollapsible>
      </template>

      {{ ctaText }}
    </ContentCallToAct>
  </UCard>
</template>
