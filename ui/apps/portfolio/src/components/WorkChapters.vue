<script setup lang="ts">
import type { WorkChapter } from '../data/portfolio';
import WorkChapterComponent from './WorkChapter.vue';

defineProps<{
  chapters: WorkChapter[];
  registerChapter: (el: HTMLElement | null, index: number) => void;
}>();
</script>

<template>
  <section class="pb-8" id="work">
    <h2 class="mb-8 text-[1.75rem] font-bold tracking-tight text-app-text">Experience</h2>

    <div class="flex flex-col">
      <div
        v-for="(chapter, index) in chapters"
        :key="chapter.id"
        :id="chapter.id"
        class="scroll-mt-8"
        :ref="(el) => registerChapter(el as HTMLElement | null, index)"
      >
        <WorkChapterComponent :chapter="chapter" />
      </div>
    </div>
  </section>
</template>
