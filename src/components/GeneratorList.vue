<template>
  <ul class="list">
    <li v-for="label in options" :key="label">
      <GeneratorOption :label="label" />
    </li>
  </ul>
</template>

<script setup>
import GeneratorOption from "@/components/GeneratorOption.vue";
import { ref } from "vue";

const options = ref([
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
]);
</script>

<style scoped lang="scss">
.list {
  margin: 0;
  padding: 0;
  list-style: none;

  li + li {
    margin-top: 0.5em;
  }
}
</style>
