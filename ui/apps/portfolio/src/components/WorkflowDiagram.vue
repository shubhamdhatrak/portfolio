<script setup lang="ts">
defineProps<{
  visible: boolean;
}>();
</script>

<template>
  <svg
    class="mb-5 block w-full max-w-[360px]"
    viewBox="0 0 360 80"
    role="img"
    aria-label="Workflow builder: trigger, condition, and action nodes"
  >
    <defs>
      <marker
        id="workflow-arrow"
        markerWidth="6"
        markerHeight="6"
        refX="5"
        refY="3"
        orient="auto"
      >
        <path d="M0 0 L6 3 L0 6 Z" fill="var(--chapter-accent)" opacity="0.7" />
      </marker>
    </defs>

    <path
      class="fill-none stroke-[var(--chapter-accent)] stroke-[1.5] opacity-70 [stroke-dasharray:20] [stroke-dashoffset:20] transition-[stroke-dashoffset] duration-700 ease-in-out motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]"
      :class="{ '[stroke-dashoffset:0]': visible }"
      d="M112 36 H128"
      marker-end="url(#workflow-arrow)"
    />
    <path
      class="fill-none stroke-[var(--chapter-accent)] stroke-[1.5] opacity-70 [stroke-dasharray:20] [stroke-dashoffset:20] transition-[stroke-dashoffset] duration-700 ease-in-out motion-reduce:transition-none motion-reduce:[stroke-dashoffset:0]"
      :class="{ '[stroke-dashoffset:0]': visible }"
      d="M232 36 H248"
      marker-end="url(#workflow-arrow)"
    />

    <g transform="translate(8, 14)">
      <rect
        width="104"
        height="52"
        rx="8"
        fill="rgba(139, 92, 246, 0.08)"
        stroke="var(--chapter-accent)"
        stroke-width="1.5"
      />
      <rect x="12" y="14" width="24" height="24" rx="6" fill="rgba(139, 92, 246, 0.2)" />
      <path d="M24 20 L20 28 H24 L22 34 L28 26 H24 Z" fill="var(--chapter-accent)" />
      <text x="44" y="26" class="fill-slate-50 font-[inherit] text-[9px] font-semibold">
        Trigger
      </text>
      <text x="44" y="38" class="fill-slate-400 font-[inherit] text-[7.5px]">Event</text>
    </g>

    <g transform="translate(128, 14)">
      <rect
        width="104"
        height="52"
        rx="8"
        fill="rgba(139, 92, 246, 0.08)"
        stroke="var(--chapter-accent)"
        stroke-width="1.5"
        opacity="0.85"
      />
      <rect x="12" y="14" width="24" height="24" rx="6" fill="rgba(139, 92, 246, 0.2)" />
      <path
        d="M18 26 H30 M24 20 L30 26 L24 32"
        stroke="var(--chapter-accent)"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <text x="44" y="26" class="fill-slate-50 font-[inherit] text-[9px] font-semibold">
        Condition
      </text>
      <text x="44" y="38" class="fill-slate-400 font-[inherit] text-[7.5px]">If / Then</text>
    </g>

    <g transform="translate(248, 14)">
      <rect
        width="104"
        height="52"
        rx="8"
        fill="rgba(139, 92, 246, 0.08)"
        stroke="var(--chapter-accent)"
        stroke-width="1.5"
      />
      <rect x="12" y="14" width="24" height="24" rx="6" fill="rgba(139, 92, 246, 0.2)" />
      <path d="M20 22 L28 26 L20 30 Z" fill="var(--chapter-accent)" />
      <text x="44" y="26" class="fill-slate-50 font-[inherit] text-[9px] font-semibold">
        Action
      </text>
      <text x="44" y="38" class="fill-slate-400 font-[inherit] text-[7.5px]">Execute</text>
    </g>
  </svg>
</template>
