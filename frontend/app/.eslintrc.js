module.exports = {
	plugins: ["prettier", "@typescript-eslint"],
	extends: ["airbnb-typescript", "react-app"],
	parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
settings: {
	"import/resolver": {
		"node": {
			"extensions": [".js", ".jsx", ".ts", ".tsx"]
		}
	}
},
rules: {
  "class-methods-use-this": "off",
  "no-alert": "off",
  "no-console": "off",
	"import/extensions": [
		"error",
		"ignorePackages",
		{
			"js": "never",
			"jsx": "never",
			"ts": "never",
			"tsx": "never",
			"": "never"
		}
	],
	"object-curly-spacing": ["warn", "always"],
	"no-unused-vars": [
		"warn",
		{
			"vars": "all",
			"args": "none"
		}
	],
	"@typescript-eslint/no-unused-vars": [
		"warn",
		{
			"vars": "all",
			"args": "none"
		}
	],
	"@typescript-eslint/no-explicit-any": [
		"error",
		{
			"ignoreRestArgs": true
		}
	],
	"no-plusplus": [
		"error",
		{
			"allowForLoopAfterthoughts": true
		}
	],
	"react/jsx-key": "error",
	"import/no-extraneous-dependencies": [
		"error",
		{
			"devDependencies": [
				"**/*.test.js",
				"**/*.test.jsx",
				"**/*.test.ts",
				"**/*.test.tsx",
				"src/tests/**/*"
			]
		}
	],
	"react/jsx-props-no-spreading": "off",
	"import/prefer-default-export": "off",
	"react/jsx-boolean-value": "off",
	"react/prop-types": "off",
	"react/no-unescaped-entities": "off",
	"react/jsx-one-expression-per-line": "off",
	"react/jsx-wrap-multilines": "off",
	"react/destructuring-assignment": "off"
  },
};
