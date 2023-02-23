import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import GeneratorPanel from "../GeneratorPanel.vue";

describe("GeneratorPanel.vue", () => {
  it("renders corresponding classList.", () => {
    const strength = 2;
    const expectedClass = "text-warning";

    const wrapper = shallowMount(GeneratorPanel, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              password: {
                strength: strength,
              },
            },
          }),
        ],
      },
    });

    const expectedResult = JSON.stringify({
      "text-primary": strength >= 3,
      "text-warning": strength === 2,
      "text-danger": strength <= 1,
    });

    expect(JSON.stringify(wrapper.vm.scorebarStyle)).toBe(expectedResult);
    expect(wrapper.find(".panel__scorebar").classes()).toContain(expectedClass);
  });
});
