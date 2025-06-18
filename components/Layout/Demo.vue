<script setup lang="ts">
import { ref, defineExpose } from "vue";

const isOpen = ref(false);

const form = ref({
  name: "",
  email: "",
  company: "",
  message: "",
});

function open() {
  isOpen.value = true;
}

function close() {
  isOpen.value = false;
}

function submitDemoRequest() {
  // Replace this with your backend call
  console.log("Demo Request:", form.value);

  setTimeout(() => {
    close();
  }, 500);
}

defineExpose({ open, close });
</script>

<template>
  <UModal :open="isOpen" class="max-w-96">
    <template #content>
      <div class="p-6 space-y-6 flex flex-col">
        <h2 class="text-2xl font-bold text-slate-100">Book a Demo</h2>
        <p class="text-slate-400">We'd love to show you how it works.</p>

        <UFormField label="Full Name" name="name">
          <UInput
            v-model="form.name"
            placeholder="Your full name"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Email Address" name="email">
          <UInput
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Company" name="company">
          <UInput
            v-model="form.company"
            placeholder="Your company name"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Message (Optional)" name="message">
          <UTextarea
            v-model="form.message"
            placeholder="Tell us more..."
            class="w-full"
          />
        </UFormField>

        <div class="flex justify-end space-x-3 pt-4">
          <UButton variant="ghost" @click="isOpen = false">Cancel</UButton>
          <UButton color="primary" @click="submitDemoRequest">Submit</UButton>
        </div>
      </div>
    </template>
  </UModal>
</template>
