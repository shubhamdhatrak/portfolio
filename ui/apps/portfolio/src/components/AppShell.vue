<script setup lang="ts">
import { workChapters } from '../data/portfolio';
import { useActiveChapter } from '../composables/useActiveChapter';
import Sidebar from './Sidebar.vue';
import WorkChapters from './WorkChapters.vue';
import SkillsSection from './SkillsSection.vue';
import EducationCard from './EducationCard.vue';
import ContactSection from './ContactSection.vue';

const { activeChapterIndex, registerChapter, scrollToChapter } = useActiveChapter();
</script>

<template>
  <div class="grid min-h-screen grid-cols-1 bg-slate-900 lg:grid-cols-[minmax(280px,38%)_1fr]">
    <Sidebar
      :chapters="workChapters"
      :active-chapter-index="activeChapterIndex"
      @navigate-chapter="scrollToChapter"
    />

    <main class="max-w-[720px] p-6 lg:p-12 lg:px-10">
      <WorkChapters :chapters="workChapters" :register-chapter="registerChapter" />
      <SkillsSection />
      <EducationCard />
      <ContactSection />
    </main>
  </div>
</template>
