import GeneratorResult from "@/components/GeneratorResult.vue";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";

describe("GeneratorResult.vue", () => {
  const mockPassword = "mock password here";

  it("renders default password with mock object.", () => {
    const wrapper = mount(GeneratorResult, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              password: { password: mockPassword },
            },
          }),
        ],
      },
    });

    expect(wrapper.find("h2").text()).toBe(mockPassword);
  });
});
