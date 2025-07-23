import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "next/typescript", "prettier"),

  {
    rules: {
      semi: ["error", "always"],

      indent: ["error", 2],

      "no-trailing-spaces": "error",
    },
  },
];

export default eslintConfig;
