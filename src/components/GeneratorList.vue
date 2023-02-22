<template>
  <ul class="list">
    <li>
      <GeneratorOption
        label="Include Uppercase Letters"
        v-model="userInput.uppercase"
      />
    </li>
    <li>
      <GeneratorOption
        label="Include Lowercase Letters"
        v-model="userInput.lowercase"
      />
    </li>
    <li>
      <GeneratorOption label="Include Numbers" v-model="userInput.numbers" />
    </li>
    <li>
      <GeneratorOption label="Include Symbols" v-model="userInput.symbols" />
    </li>
  </ul>
</template>

<script setup>
import GeneratorOption from "@/components/GeneratorOption.vue";
import { usePasswordStore } from "@/stores/passwordStore.js";
import { storeToRefs } from "pinia";

const { userInput } = storeToRefs(usePasswordStore());
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
