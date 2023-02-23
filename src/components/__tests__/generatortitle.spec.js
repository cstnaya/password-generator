import GeneratorTitle from "@/components/GeneratorTitle.vue";
import { mount } from "@vue/test-utils";
import { expect } from "chai";

describe("GeneratorTitle", () => {
  it("reneders h1 title", () => {
    const wrapper = mount(GeneratorTitle);
    const h1 = wrapper.find("h1");

    expect(h1.text()).toBe("Password Generator");
  });
});
