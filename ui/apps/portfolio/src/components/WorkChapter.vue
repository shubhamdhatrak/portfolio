<script setup lang="ts">
import { computed } from 'vue';
import type { WorkChapter } from '../data/portfolio';
import { getChapterThemeStyle } from '../utils/chapterTheme';
import { useInView } from '../composables/useInView';
import ThemeIcon from './ThemeIcon.vue';
import SkillBadges from './SkillBadges.vue';
import ChapterHighlight from './ChapterHighlight.vue';

const props = defineProps<{
  chapter: WorkChapter;
}>();

const chapterStyle = computed(() => getChapterThemeStyle(props.chapter.theme));
const { isVisible, rootRef } = useInView();
</script>

<template>
  <article
    ref="rootRef"
    class="relative min-h-[50vh] scroll-mt-8 py-8 opacity-0 translate-y-3 transition-[opacity,transform] duration-400 motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none sm:min-h-[70vh] sm:py-12"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
    :style="chapterStyle"
  >
    <div class="border-l-2 border-[var(--chapter-accent)] pl-6">
      <div v-if="chapter.status === 'current'" class="mb-4 flex items-center gap-3">
        <span
          class="rounded-full bg-[var(--chapter-accent)] px-2 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-app-on-accent uppercase"
        >
          Current
        </span>
      </div>

      <div class="mb-5 flex items-start gap-4">
        <ThemeIcon :theme="chapter.theme" />
        <div>
          <h3 class="mb-1 text-xl font-bold tracking-tight text-app-text sm:text-2xl">
            {{ chapter.title }}
          </h3>
          <p class="mb-1.5 text-sm font-medium text-[var(--chapter-accent)]">
            {{ chapter.employer }}
            <span v-if="chapter.period" class="font-normal text-app-text-muted">
              · {{ chapter.period }}
            </span>
          </p>
          <p class="text-[0.9375rem] leading-normal text-app-text-muted">{{ chapter.hook }}</p>
        </div>
      </div>

      <ChapterHighlight
        v-if="chapter.highlight"
        :highlight="chapter.highlight"
        :visible="isVisible"
      />

      <div v-if="chapter.domainLabels?.length" class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="label in chapter.domainLabels"
          :key="label"
          class="rounded-md border border-app-border-strong bg-app-overlay-badge px-2.5 py-1 text-xs text-app-text-subtle"
        >
          {{ label }}
        </span>
      </div>

      <p class="mb-4 text-[0.9375rem] leading-relaxed text-app-text-subtle">
        {{ chapter.description }}
      </p>

      <ul class="mb-5 list-none p-0">
        <li
          v-for="item in chapter.impact"
          :key="item"
          class="relative mb-2 pl-5 text-sm leading-normal text-app-text-muted before:absolute before:left-0 before:text-[var(--chapter-accent)] before:content-['▸']"
        >
          {{ item }}
        </li>
      </ul>

      <div>
        <p
          class="mb-2 text-xs font-semibold tracking-wider text-app-text-faint uppercase"
        >
          Skills earned
        </p>
        <SkillBadges :badges="chapter.skillBadges" />
      </div>
    </div>
  </article>
</template>
