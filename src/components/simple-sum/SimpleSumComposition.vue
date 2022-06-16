<template>
  <input type="number" v-model="localA" />
  <input type="number" v-model="localB" />
  <div>{{ sum }}</div>
</template>

<script lang="ts">
export default {
  name: "SimpleSumComposition",
};
</script>

<script setup lang="ts">
import { useSimpleSum } from "@/composables/useSimpleSum";
import { onMounted } from "vue";

const props = defineProps<{
  a: number;
  b: number;
}>();

// In script setup declaring a variable makes it available in the <template> scope
const { a: localA, b: localB, sum } = useSimpleSum();

onMounted(() => {
  if (props.a) localA.value = props.a;
  if (props.b) localB.value = props.b;
});
</script>

<style lang="postcss"></style>
