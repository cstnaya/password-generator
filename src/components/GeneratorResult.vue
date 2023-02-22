<template>
  <div class="container row result">
    <h2 class="result__title text-grey">{{ password }}</h2>
    <button class="btn text-primary result__button" @click.prevent="onCopy">
      <font-awesome-icon icon="fas fa-paste" />
    </button>
  </div>
</template>

<script setup>
import { usePasswordStore } from "@/stores/passwordStore";
import { storeToRefs } from "pinia";

const { password } = storeToRefs(usePasswordStore());

function onCopy() {
  navigator.clipboard.writeText(password.value);
}
</script>

<style scoped lang="scss">
.result {
  margin-bottom: 1em;
  background: $secondary;
}

.result__title {
  font-size: 1.5rem;
  word-break: break-all;
}

.result__button {
  font-size: 1.8rem;
  padding: 0;
  background: transparent;
}
</style>
