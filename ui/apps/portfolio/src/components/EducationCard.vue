<script setup lang="ts">
import { education } from '../data/portfolio';
import ContentSection from './ContentSection.vue';
</script>

<template>
  <ContentSection id="education" title="Education">
    <div class="rounded-xl border border-app-border bg-app-overlay-subtle p-6">
      <h3 class="mb-2 text-[1.0625rem] font-semibold text-app-text">
        {{ education.degree }}
      </h3>
      <p class="mb-1 text-[0.9375rem] text-app-text-muted">
        {{ education.institution }} · CGPA {{ education.cgpa }}
      </p>
      <p class="text-[0.9375rem] text-app-text-muted">
        {{ education.period }} · {{ education.location }}
      </p>
    </div>
  </ContentSection>
</template>
