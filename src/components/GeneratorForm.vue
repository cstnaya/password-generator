<template>
  <section class="form container">
    <div class="row">
      <div>Character Length</div>
      <div class="text-primary">{{ userInput.length }}</div>
    </div>
    <input type="range" min="0" max="30" v-model.number="userInput.length" />
    <GeneratorList />
    <section class="text-danger" v-if="error">
      {{ error }}
    </section>
    <GeneratorPanel />
    <button
      class="btn btn-primary btn-generate"
      @click.prevent="onHandleGenerate"
    >
      Generate
      <font-awesome-icon icon="fas fa-arrow-right" class="btn-generate__icon" />
    </button>
  </section>
</template>

<script setup>
import GeneratorPanel from "@/components/GeneratorPanel.vue";
import GeneratorList from "@/components/GeneratorList.vue";
import { usePasswordStore } from "@/stores/passwordStore";
import { storeToRefs } from "pinia";

const passwordStore = usePasswordStore();
const { userInput, error } = storeToRefs(passwordStore);
const { onHandleGenerate } = passwordStore;
</script>

<style scoped lang="scss">
.form {
  background: $secondary;
  color: $white;
  display: grid;
  gap: 1em;
  margin-bottom: 1em;
}

.btn-generate {
  text-transform: uppercase;
  font-weight: bold;

  .btn-generate__icon {
    margin-left: 10px;
    transition: 0.4s all ease;
  }

  &:hover .btn-generate__icon,
  &:active .btn-generate__icon {
    transform: translateX(12px);
  }
}
</style>
