<template>
  <span :class="{ 'bg-indigo-500': modelValue }">{{ onLabel }}</span>
  <input type="checkbox" :checked="modelValue" @change="handleInput" />
  <span :class="{ 'bg-indigo-500': !modelValue }">{{ offLabel }}</span>
</template>

<script lang="ts">
export default {
  name: "SimpleToggler",
};
</script>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  onLabel: {
    type: String,
    default: "on",
  },
  offLabel: {
    type: String,
    default: "off",
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const handleInput = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
};
</script>
