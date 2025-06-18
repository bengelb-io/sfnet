<script setup lang="ts">
const company = "Bay Area Secure";
</script>
<template>
  <div>
    <nav class="sticky border-b border-gray-800">
      <UContainer class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center space-x-2 font-semibold text-lg"
        >
          <NuxtImg class="size-16" src="sfnet.png" />
          <span>{{ company }}</span>
        </NuxtLink>

        <div>
          <UButton
            label="Book A Demo"
            color="secondary"
            variant="soft"
            icon="i-lucide-notebook-pen"
            block
            :ui="{ base: 'cursor-pointer' }"
          />
        </div>
      </UContainer>
    </nav>
    <main class="flex flex-col items-center">
      <slot />
    </main>
    <LayoutFooter>
      <template #logo>
        <div class="flex items-center gap-2">
          <NuxtImg class="size-16" src="sfnet.png" />

          <NuxtLink to="/" class="text-neutral font-bold text-lg">{{
            company
          }}</NuxtLink>
        </div>
      </template>

      <template #links>

      </template>

      <template #socials>
        <NuxtLink
          to="https://www.linkedin.com/company/bayareasecure/"
          target="_blank"
          aria-label="Linkedin"
        >
          <Icon
            name="mdi:linkedin"
            size="36"
            class="transition-all hover:text-primary"
          />
        </NuxtLink>
        <NuxtLink to="https://github.com" target="_blank" aria-label="GitHub">
          <Icon
            name="mdi:github"
            size="36"
            class="transition-all hover:text-primary"
          />
        </NuxtLink>
      </template>

      <template #copyright>
        © 2025 {{ company }}. All rights reserved.
      </template>
    </LayoutFooter>
  </div>
</template>
