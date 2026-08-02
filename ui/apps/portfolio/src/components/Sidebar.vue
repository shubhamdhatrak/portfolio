<script setup lang="ts">
import { profile, navLinks, type WorkChapter } from '../data/portfolio';
import logoUrl from '../assets/favicon.png';
import ChapterRail from './ChapterRail.vue';

defineProps<{
  chapters: WorkChapter[];
  activeChapterIndex: number;
}>();

const emit = defineEmits<{
  navigateChapter: [index: number];
}>();
</script>

<template>
  <aside
    class="sticky top-0 self-start border-b border-app-border bg-app-surface p-6 lg:border-r lg:border-b-0 lg:p-8 lg:px-8 lg:py-12 max-lg:relative"
  >
    <div class="max-w-80 max-lg:max-w-none">
      <div>
        <div class="mb-1 flex items-center gap-3">
          <img
            :src="logoUrl"
            :alt="`${profile.name} logo`"
            class="size-12 shrink-0 rounded-full shadow-[0_0_0_1px_var(--app-logo-ring)]"
            width="48"
            height="48"
          />
          <h1 class="text-[1.75rem] font-bold tracking-tight text-app-text">
            {{ profile.name }}
          </h1>
        </div>
        <p class="mb-4 text-base font-medium text-theme-accent">{{ profile.title }}</p>
        <p class="mb-6 text-sm leading-relaxed text-app-text-muted">{{ profile.tagline }}</p>
      </div>

      <nav
        class="mb-6 flex flex-row flex-wrap gap-3 lg:flex-col lg:gap-2"
        aria-label="Main navigation"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-app-text-muted transition-colors duration-200 hover:text-theme-accent"
        >
          {{ link.label }}
        </a>
      </nav>

      <ChapterRail
        class="mb-6 border-t border-app-border pt-6"
        :chapters="chapters"
        :active-chapter-index="activeChapterIndex"
        @navigate="emit('navigateChapter', $event)"
      />

      <div class="flex gap-4">
        <a
          :href="`mailto:${profile.email}`"
          class="text-[0.8125rem] text-app-text-faint transition-colors duration-200 hover:text-theme-accent"
        >
          Email
        </a>
        <a
          :href="profile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[0.8125rem] text-app-text-faint transition-colors duration-200 hover:text-theme-accent"
        >
          LinkedIn
        </a>
        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[0.8125rem] text-app-text-faint transition-colors duration-200 hover:text-theme-accent"
        >
          GitHub
        </a>
      </div>
    </div>
  </aside>
</template>
