<script setup lang="ts">
import { profile } from '../data/portfolio';
import ContentSection from './ContentSection.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <ContentSection id="contact" title="Contact" compact-title class="text-center">
    <p class="mb-6 text-base text-slate-400">
      Interested in working together? Reach out via email or connect on LinkedIn.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a
        :href="`mailto:${profile.email}`"
        class="inline-block rounded-lg bg-theme-accent px-6 py-3 text-[0.9375rem] font-medium text-slate-900 transition-all duration-200 hover:brightness-110"
      >
        {{ profile.email }}
      </a>
      <a
        :href="profile.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-slate-50 transition-all duration-200 hover:border-slate-500 hover:bg-white/5"
      >
        LinkedIn
      </a>
      <a
        :href="profile.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-slate-50 transition-all duration-200 hover:border-slate-500 hover:bg-white/5"
      >
        GitHub
      </a>
    </div>
  </ContentSection>

  <footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
    <p>&copy; {{ currentYear }} Designed & Built by {{ profile.name }}</p>
    <p class="mt-2">
      <a
        :href="profile.github + '/portfolio'"
        target="_blank"
        rel="noopener noreferrer"
        class="text-slate-500 transition-colors duration-200 hover:text-theme-accent"
      >
        Source
      </a>
      <span class="mx-2 text-slate-700">·</span>
      <a
        href="https://shubhamdhatrak.github.io/portfolio/"
        rel="noopener noreferrer"
        class="text-slate-500 transition-colors duration-200 hover:text-theme-accent"
      >
        Portfolio
      </a>
    </p>
  </footer>
</template>
