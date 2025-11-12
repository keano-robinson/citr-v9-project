import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

// below comment is a trick to get proper type checking and autocompletion in IDEs for this config file
/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	prettier,
];
