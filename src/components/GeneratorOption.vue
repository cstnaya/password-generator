<template>
  <label class="option">
    <input type="checkbox" />
    <span class="option__title">{{ props.label }}</span>
  </label>
</template>

<script setup>
const props = defineProps(["label"]);
</script>

<style scoped lang="scss">
.option__title {
  margin-left: 0.5rem;
}
</style>
