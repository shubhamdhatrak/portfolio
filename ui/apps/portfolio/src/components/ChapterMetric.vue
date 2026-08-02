<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  before: string;
  after: string;
  label: string;
  visible: boolean;
}>();

const showAfter = ref(false);

watch(
  () => props.visible,
  (visible) => {
    if (!visible) return;
    setTimeout(() => {
      showAfter.value = true;
    }, 400);
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="mb-5 flex items-center gap-3 text-2xl font-bold tabular-nums"
    :aria-label="label"
  >
    <span class="text-rose-400">
      {{ before }}
    </span>
    <span class="text-slate-500">→</span>
    <span
      class="text-[var(--chapter-accent)] opacity-0 transition-opacity duration-400 motion-reduce:opacity-100"
      :class="{ 'opacity-100': showAfter }"
    >
      {{ after }}
    </span>
  </div>
</template>
