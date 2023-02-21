import { defineStore } from "pinia";

export const useInputStore = defineStore("input", {
  state: () => ({
    length: 0,
    numbers: false,
    symbols: false,
    lowercase: false,
    uppercase: false,
  }),
  actions: {
    changeLength(newLength) {
      this.length = newLength;
    },
    toggleNumbers() {
      this.numbers = !this.numbers;
    },
    toggleSymbols() {
      this.symbols = !this.symbols;
    },
    toggleLowercase() {
      this.lowercase = !this.lowercase;
    },
    toggleUppercase() {
      console.log("uppercase!");
      this.uppercase = !this.uppercase;
    },
  },
});
