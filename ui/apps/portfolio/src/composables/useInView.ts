import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useInView(threshold = 0.3): {
  isVisible: Ref<boolean>;
  rootRef: Ref<HTMLElement | null>;
} {
  const isVisible = ref(false);
  const rootRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold }
    );

    if (rootRef.value) {
      observer.observe(rootRef.value);
    }
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isVisible, rootRef };
}
