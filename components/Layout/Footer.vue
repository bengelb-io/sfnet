<template>
  <footer
    class="w-full border-t border-gray-200 dark:border-gray-800 py-6 px-4 md:px-8 bg-white dark:bg-gray-950"
  >
    <div
      class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
    >
      <!-- Logo -->
      <div class="flex justify-center md:justify-start">
        <slot name="logo" />
      </div>

      <!-- Links -->
      <div class="flex justify-center space-x-6 text-sm font-medium">
        <slot name="links" />
      </div>

      <!-- Socials -->
      <div class="flex justify-center md:justify-end space-x-4">
        <slot name="socials" />
      </div>
    </div>

    <div class="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
      <slot name="copyright" />
    </div>
  </footer>
</template>
