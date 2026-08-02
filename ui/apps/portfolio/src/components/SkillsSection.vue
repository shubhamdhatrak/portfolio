<script setup lang="ts">
import { skillCategories } from '../data/portfolio';
import ContentSection from './ContentSection.vue';
</script>

<template>
  <ContentSection id="skills" title="Skills">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
      <div v-for="category in skillCategories" :key="category.name">
        <h3 class="mb-3 text-sm font-semibold text-app-text-subtle">{{ category.name }}</h3>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="inline-block rounded-md border border-app-border bg-app-overlay px-2.5 py-1 text-xs font-medium text-app-text-muted"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </ContentSection>
</template>
