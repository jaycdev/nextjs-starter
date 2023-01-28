import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "**/*.e2e.ts",
  },

  component: {
    specPattern: ["**/*.cy.ts", "**/*.cy.tsx"],
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
