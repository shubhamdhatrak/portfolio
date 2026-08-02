import { ref, onMounted, onUnmounted } from 'vue';

const ACTIVE_MARKER_RATIO = 0.35;

export function useActiveChapter() {
  const activeChapterIndex = ref(0);
  const chapterRefs = ref<HTMLElement[]>([]);
  let rafId = 0;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateActiveChapter() {
    const marker = window.innerHeight * ACTIVE_MARKER_RATIO;
    let nextIndex = 0;

    for (let i = 0; i < chapterRefs.value.length; i++) {
      const el = chapterRefs.value[i];
      if (!el) continue;
      if (el.getBoundingClientRect().top <= marker) {
        nextIndex = i;
      }
    }

    activeChapterIndex.value = nextIndex;
  }

  function onScrollOrResize() {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateActiveChapter);
  }

  function registerChapter(el: HTMLElement | null, index: number) {
    if (!el) return;
    chapterRefs.value[index] = el;
    onScrollOrResize();
  }

  function scrollToChapter(index: number) {
    const el = chapterRefs.value[index];
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }

  onMounted(() => {
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    onScrollOrResize();
  });

  onUnmounted(() => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
  });

  return {
    activeChapterIndex,
    registerChapter,
    scrollToChapter,
  };
}
