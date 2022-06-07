module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {},
		},
		'import/external-module-folders': ['node_modules', 'node_modules/@types'],
		'import/internal-regex': '^@src/',
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'import/named': 'error', // eslint-plugin-import 2.20.3 나오면 지우기
			},
		},
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'next/core-web-vitals',
	],
	plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		// prettier
		'prettier/prettier': [
			'error',
			{
				formatOnSave: true,
				printWidth: 80,
				semi: true,
				trailingComma: 'es5',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: 'avoid',
				tabWidth: 2,
				bracketSameLine: false,
				singleQuote: true,
			},
		],
		// Diable config to avoid conflict with prettier config
		'max-len': 'off',
		semi: 'off',
		quotes: 'off',
		'comma-dangle': 'off',
		'object-curly-spacing': 'off',
		'array-bracket-spacing': 'off',
		// import
		'import/order': [
			'error',
			{
				groups: [
					['builtin', 'external'],
					'internal',
					['parent', 'sibling', 'index'],
				],
				'newlines-between': 'always',
			},
		],
		'import/default': 'off',
		'import/no-unresolved': 'error',
		'import/no-named-as-default-member': 'off',
		'import/no-named-as-default': 'off',
		// react-hooks
		'react-hooks/rules-of-hooks': 'error',
		// react
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/no-unescaped-entities': 'off',
		'no-undef': 'error',
		// "no-unused-vars": "error",
		'no-use-before-define': 'off',
		'no-warning-comments': [
			'warn',
			{
				terms: ['fixme'],
				location: 'anywhere',
			},
		],
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true,
			},
		],
		// Tslint
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{ ignoreRestSiblings: true },
		],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
