<template>
  <label class="option">
    <input
      type="checkbox"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="option__title">{{ label }}</span>
  </label>
</template>

<script setup>
defineProps(["modelValue", "label"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.option__title {
  margin-left: 0.5rem;
}
</style>
