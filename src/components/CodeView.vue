<template>
  <div class="code-view">
    <highlightjs language="vue" :code="source" />
  </div>
</template>

<script lang="ts">
export default {
  name: "CodeView",
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const error = ref(false);
const source = ref("");

const fetchSource = async () => {
  error.value = false;

  try {
    const result = await (await fetch("/code-files/" + props.path)).text();
    source.value = result;
  } catch (err) {
    console.error(err);
    error.value = true;
    source.value = "";
  }
};

watch(
  () => props.path,
  path => {
    if (path) {
      fetchSource();
    }
  },
  { immediate: true }
);

watch(
  () => props.path,
  path => {
    if (path) {
      fetchSource();
    }
  },
  { immediate: true }
);
</script>

<style lang="postcss"></style>
