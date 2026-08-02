<script setup lang="ts">
import { profile } from '../data/portfolio';
import ContentSection from './ContentSection.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <ContentSection id="contact" title="Contact" compact-title class="text-center">
    <p class="mb-6 text-base text-app-text-muted">
      Interested in working together? Reach out via email or connect on LinkedIn.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a
        :href="`mailto:${profile.email}`"
        class="inline-block rounded-lg bg-theme-accent px-6 py-3 text-[0.9375rem] font-medium text-app-on-accent transition-all duration-200 hover:brightness-110"
      >
        {{ profile.email }}
      </a>
      <a
        :href="profile.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-lg border border-app-border-strong bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-app-text transition-all duration-200 hover:border-app-border-muted hover:bg-app-overlay"
      >
        LinkedIn
      </a>
      <a
        :href="profile.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block rounded-lg border border-app-border-strong bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-app-text transition-all duration-200 hover:border-app-border-muted hover:bg-app-overlay"
      >
        GitHub
      </a>
    </div>
  </ContentSection>

  <footer class="border-t border-app-border py-8 text-center text-sm text-app-text-faint">
    <p>&copy; {{ currentYear }} Designed & Built by {{ profile.name }}</p>
    <p class="mt-2">
      <a
        :href="profile.github + '/portfolio'"
        target="_blank"
        rel="noopener noreferrer"
        class="text-app-text-faint transition-colors duration-200 hover:text-theme-accent"
      >
        Source
      </a>
      <span class="mx-2 text-app-text-dim">·</span>
      <a
        href="https://shubhamdhatrak.github.io/portfolio/"
        rel="noopener noreferrer"
        class="text-app-text-faint transition-colors duration-200 hover:text-theme-accent"
      >
        Portfolio
      </a>
    </p>
  </footer>
</template>
