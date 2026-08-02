<script setup lang="ts">
import type { WorkChapter } from '../data/portfolio';
import { getThemeAccent, getThemeLabel } from '../utils/chapterTheme';

defineProps<{
  chapters: WorkChapter[];
  activeChapterIndex: number;
}>();

const emit = defineEmits<{
  navigate: [index: number];
}>();
</script>

<template>
  <nav
    class="flex min-w-0 flex-row flex-wrap gap-2 lg:min-w-[140px] lg:flex-col lg:gap-1"
    aria-label="Experience chapters"
  >
    <button
      v-for="(chapter, index) in chapters"
      :key="chapter.id"
      type="button"
      class="group flex cursor-pointer items-center gap-2.5 border-none bg-transparent py-1.5 text-left font-inherit transition-opacity max-lg:rounded-md max-lg:border max-lg:border-app-border max-lg:bg-app-overlay-medium max-lg:px-2 max-lg:py-1"
      :class="activeChapterIndex === index ? 'max-lg:border-[var(--rail-accent)]' : ''"
      :style="
        activeChapterIndex === index
          ? { '--rail-accent': getThemeAccent(chapter.theme) }
          : undefined
      "
      @click="emit('navigate', index)"
    >
      <span
        class="size-2 shrink-0 rounded-full bg-app-inactive-dot transition-all duration-400"
        :class="activeChapterIndex === index ? 'scale-[1.3]' : ''"
        :style="
          activeChapterIndex === index
            ? { backgroundColor: getThemeAccent(chapter.theme) }
            : undefined
        "
      />
      <span
        class="text-[0.8125rem] leading-snug text-app-text-faint transition-[color,font-weight] duration-400 group-hover:text-app-text-subtle"
        :class="activeChapterIndex === index ? 'font-medium text-app-text' : ''"
      >
        {{ getThemeLabel(chapter.theme) }}
      </span>
    </button>
  </nav>
</template>
