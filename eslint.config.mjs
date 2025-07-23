import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: "eslint:recommended",
});

const eslintConfig = [
  ...compat.extends("eslint:recommended", "next/core-web-vitals", "next/typescript"),

  {
    plugins: {
      prettier: await import("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "warn",

      semi: ["error", "always"],

      indent: ["error", 2],

      "no-trailing-spaces": "error",
    },
  },
];

export default eslintConfig;
