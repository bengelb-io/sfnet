<template>
  <div class="relative overflow-hidden flex items-center justify-center max-w-[400px] w-full mx-auto my-24 rounded-[8px] before:content-[''] before:block before:absolute before:h-[300px] before:w-[100px] before:bg-gradient-to-r before:from-transparent before:via-gray-600/75 before:to-transparent before:top-1/2 before:transform before:origin-top before:animate-rotate z-0">
    <div class="relative z-10 w-full m-[2px] p-6 bg-[#222] text-white rounded-[8px]">
      <h3 class="mb-4"><slot/></h3>
    </div>
  </div>
</template>

<style scoped>

</style>