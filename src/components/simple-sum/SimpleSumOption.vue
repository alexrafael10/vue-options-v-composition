<template>
  <input type="number" v-model.number="localA" />
  <input type="number" v-model.number="localB" />
  <div>{{ sum }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SimpleSumComposition",

  props: {
    a: {
      type: Number,
      default: 0,
    },
    b: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      localA: 0,
      localB: 0,
    };
  },

  computed: {
    sum() {
      return this.localA + this.localB;
    },
  },

  mounted() {
    if (this.a) this.localA = this.a;
    if (this.b) this.localB = this.b;
  },
});
</script>
