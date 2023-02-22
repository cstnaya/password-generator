<template>
  <section class="password-panel row">
    <h3>strength</h3>
    <div :class="[scorebarStyle, 'panel__scorebar']">
      <div class="panel__scoreitem" v-for="(bit, idx) in scoreBits" :key="idx">
        {{ bit }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { usePasswordStore } from "@/stores/passwordStore";
import { storeToRefs } from "pinia";

const { strength } = storeToRefs(usePasswordStore());

const scorebarStyle = computed(() => ({
  "text-primary": strength.value >= 3,
  "text-warning": strength.value === 2,
  "text-danger": strength.value <= 1,
}));

const scoreBits = computed(() => {
  let MAX = 4;
  let score = "";

  for (let i = 0; i < strength.value; i++) {
    score += "★";
  }

  for (let i = 0; i < MAX - strength.value; i++) {
    score += "☆";
  }

  return score;
});
</script>

<style scoped lang="scss">
.password-panel {
  background: $dark;
  color: $text-grey;
  text-transform: uppercase;
  padding: 1.5em;
}

.panel__scorebar {
  display: flex;
}
</style>
