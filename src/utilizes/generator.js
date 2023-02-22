import generator from "generate-password-browser";

function generate(options) {
  return generator.generate(options);
}

export { generate };
