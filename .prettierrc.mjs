// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	semi: false,
	singleQuote: false,
	jsxSingleQuote: false,
	quoteProps: "consistent",
	tabWidth: 1,
	trailingComma: "es5",
	useTabs: true,
	endOfLine: "lf",
	arrowParens: "always",
	overrides: [
		{
			files: "*.txs",
			options: {
				parser: "txs",
			},
		},
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
	],
}
