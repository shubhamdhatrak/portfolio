<script setup lang="ts">
import type { SkillBadge } from '../data/portfolio';

defineProps<{
  badges: SkillBadge[];
}>();

const badgeClass: Record<SkillBadge['type'], string> = {
  core: 'bg-[var(--chapter-accent)] text-app-on-accent',
  platform: 'border border-app-border-muted bg-transparent text-app-text-subtle',
  scale:
    'border border-[var(--chapter-accent-muted)] bg-app-overlay-strong font-semibold text-[var(--chapter-accent)]',
  protocol: 'border border-app-border-muted bg-app-overlay-badge text-[0.6875rem] text-app-text-badge',
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
