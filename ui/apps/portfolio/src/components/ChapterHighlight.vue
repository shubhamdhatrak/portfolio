<script setup lang="ts">
import type { ChapterHighlight } from '../data/portfolio';
import ChapterMetric from './ChapterMetric.vue';
import WorkflowDiagram from './WorkflowDiagram.vue';

defineProps<{
  highlight: ChapterHighlight;
  visible: boolean;
}>();
</script>

<template>
  <ChapterMetric
    v-if="highlight.type === 'metric'"
    :before="highlight.before"
    :after="highlight.after"
    :label="highlight.label"
    :visible="visible"
  />
  <WorkflowDiagram
    v-else-if="highlight.type === 'workflow-diagram'"
    :visible="visible"
  />
</template>
