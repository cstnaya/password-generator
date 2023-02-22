import { defineStore } from "pinia";
import { reactive, ref, toRaw } from "vue";
import { generate } from "@/utilizes/generator";

export const usePasswordStore = defineStore("password", () => {
  const userInput = reactive({
    length: 15,
    numbers: false,
    symbols: false,
    lowercase: false,
    uppercase: false,
  });

  const password = ref("");

  const error = ref("");

  const strength = ref(0);

  /**
   * Detect if input conditions is valid.
   */
  function inputValid() {
    if (userInput.length === 0) {
      throw "Length should be larger than 0.";
    } else if (
      !userInput.numbers &&
      !userInput.symbols &&
      !userInput.lowercase &&
      !userInput.uppercase
    ) {
      throw "At least one of the conditions should be selected!";
    }
    return true;
  }

  /**
   * Calling generate function.
   */
  function passwordGenerate() {
    password.value = generate(toRaw(userInput));
  }

  function calculateStrength() {
    const total =
      userInput.length * 2 +
      (userInput.numbers ? 10 : 0) +
      (userInput.symbols ? 10 : 0) +
      (userInput.uppercase ? 10 : 0) +
      (userInput.lowercase ? 10 : 0);

    strength.value = Math.round(total / 25);
  }

  /**
   * Generate button event handler.
   */
  function onHandleGenerate() {
    try {
      inputValid();
      passwordGenerate();
      calculateStrength();
      error.value = "";
    } catch (e) {
      error.value = e;
      strength.value = 0;
    }
  }

  return {
    userInput,
    password,
    error,
    strength,
    onHandleGenerate,
  };
});
