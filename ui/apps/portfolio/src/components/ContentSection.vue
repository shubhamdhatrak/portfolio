<script setup lang="ts">
defineProps<{
  id?: string;
  title: string;
  compactTitle?: boolean;
}>();
</script>

<template>
  <section class="border-t border-app-border py-16" :id="id">
    <h2
      class="text-[1.75rem] font-bold tracking-tight text-app-text"
      :class="compactTitle ? 'mb-4' : 'mb-8'"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
