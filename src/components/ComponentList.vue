<template>
  <div
    v-for="(problem, index) in problems"
    :key="index"
    class="grid grid-flow-row auto-rows-auto"
  >
    <div>
      <SimpleToggler v-model="togglers[problem.name]" />
    </div>
    <component
      :is="problem.components[togglers[problem.name] ? 'comp' : 'opt']"
      v-bind="{ ...problem.params }"
    ></component>
    <CodeView
      :path="problem.filePath[togglers[problem.name] ? 'comp' : 'opt']"
    ></CodeView>
  </div>
</template>

<script lang="ts">
export default {
  name: "ComponentList",
};
</script>

<script setup lang="ts">
import { reactive } from "vue";
import CodeView from "./CodeView.vue";
import SimpleSumComp from "./simple-sum/SimpleSumComposition.vue";
import SimpleSumOpt from "./simple-sum/SimpleSumOption.vue";
import SimpleToggler from "./SimpleToggler.vue";

const problems = [
  {
    name: "simple-sum",
    params: {
      a: 1,
      b: 2,
    },
    components: {
      comp: SimpleSumComp,
      opt: SimpleSumOpt,
    },
    filePath: {
      comp: "SimpleSumComposition.vue",
      opt: "SimpleSumOption.vue",
    },
  },
];

const togglers = reactive<{
  [k: string | "simple-sum"]: boolean;
}>({ "simple-sum": true });
</script>

<style lang="postcss" scoped></style>
