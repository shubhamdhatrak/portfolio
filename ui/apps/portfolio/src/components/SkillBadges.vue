<script setup lang="ts">
import type { SkillBadge } from '../data/portfolio';

defineProps<{
  badges: SkillBadge[];
}>();

const badgeClass: Record<SkillBadge['type'], string> = {
  core: 'bg-[var(--chapter-accent)] text-slate-900',
  platform: 'border border-slate-600 bg-transparent text-slate-300',
  scale:
    'border border-[var(--chapter-accent-muted)] bg-white/8 font-semibold text-[var(--chapter-accent)]',
  protocol: 'border border-slate-500 bg-white/6 text-[0.6875rem] text-slate-200',
};
</script>

<template>
  <div class="flex flex-wrap gap-1.5">
    <span
      v-for="badge in badges"
      :key="badge.label"
      class="inline-block rounded-md px-2.5 py-1 text-xs leading-snug font-medium"
      :class="badgeClass[badge.type]"
    >
      {{ badge.label }}
    </span>
  </div>
</template>
