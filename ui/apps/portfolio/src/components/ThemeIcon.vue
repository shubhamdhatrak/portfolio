<script setup lang="ts">
import type { ThemeId } from '../data/portfolio';

defineProps<{
  theme: ThemeId;
}>();
</script>

<template>
  <svg
    class="size-7 text-[var(--chapter-accent)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    aria-hidden="true"
  >
    <template v-if="theme === 'governance'">
      <path d="M12 3L4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4z" stroke-linejoin="round" />
      <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
    </template>
    <template v-else-if="theme === 'workflows'">
      <rect x="2" y="9" width="5.5" height="6" rx="1.5" stroke-linejoin="round" />
      <path d="M4.25 12 L4.25 11.25 L5.25 12 L4.25 12.75 Z" fill="currentColor" stroke="none" />
      <path d="M7.75 12 H9.75" stroke-linecap="round" />
      <rect x="9.75" y="9" width="5.5" height="6" rx="1.5" stroke-linejoin="round" />
      <path d="M11.5 12 H13.5 M12.5 11 V13" stroke-linecap="round" />
      <path d="M15.25 12 H17.25" stroke-linecap="round" />
      <rect x="17.25" y="9" width="4.75" height="6" rx="1.5" stroke-linejoin="round" />
      <path d="M19 11.25 L21 12 L19 12.75 Z" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="theme === 'reporting'">
      <path d="M4 20V10M10 20V4M16 20v-6M22 20V8" stroke-linecap="round" />
    </template>
    <template v-else-if="theme === 'android'">
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M10 21h4" stroke-linecap="round" />
    </template>
    <template v-else-if="theme === 'windows'">
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </template>
    <template v-else-if="theme === 'zs'">
      <path d="M4 8h16M4 16h16" stroke-linecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </template>
    <template v-else-if="theme === 'earlier'">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round" />
    </template>
  </svg>
</template>
