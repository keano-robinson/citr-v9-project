import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

// below comment is a trick to get proper type checking and autocompletion in IDEs for this config file
/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		...reactPlugin.configs.flat.recommended,
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	reactPlugin.configs.flat.jsxRuntime,
	{
		files: ["**/*.js", "**/*.jsx"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			// your custom rules here
			"react/no-unescaped-entities": "off",
			"react/prop-types": "off",
		},
	},
	prettier,
];
