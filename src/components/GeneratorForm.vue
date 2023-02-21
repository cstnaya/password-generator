<template>
  <section class="form container">
    <div class="row">
      <div>Character Length</div>
      <div class="text-primary">{{ length }}</div>
    </div>
    <input
      type="range"
      min="0"
      max="30"
      :value="length"
      @input="(e) => changeLength(e.target.value)"
    />
    <GeneratorList />
    <section class="password-strength row">
      <h3>strength</h3>
      <div>1234</div>
    </section>
    <button class="btn btn-primary btn-generate" @click.prevent="">
      Generate
      <font-awesome-icon icon="fas fa-arrow-right" class="btn-generate__icon" />
    </button>
  </section>
</template>

<script setup>
import GeneratorList from "@/components/GeneratorList.vue";
import { storeToRefs } from "pinia";
import { useInputStore } from "@/stores/input";

const store = useInputStore();

const { length } = storeToRefs(store);
const { changeLength } = store;
</script>

<style scoped lang="scss">
.form {
  background: $secondary;
  color: $white;
  display: grid;
  gap: 1em;
  margin-bottom: 1em;
}

.password-strength {
  background: $dark;
  color: $text-grey;
  text-transform: uppercase;
  padding: 1.5em;
}

.btn-generate {
  text-transform: uppercase;
  font-weight: bold;

  .btn-generate__icon {
    margin-left: 10px;
  }
}
</style>
