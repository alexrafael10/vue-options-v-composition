import { computed, ref } from "vue";

export const useSimpleSum = () => {
  const a = ref(0);
  const b = ref(0);

  const sum = computed(() => (a.value || 0) + (b.value || 0));

  return {
    a,
    b,
    sum,
  };
};
