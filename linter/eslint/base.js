import eslint from '@eslint/js'
import ts from 'typescript-eslint'
import unicorn from 'eslint-plugin-unicorn'
import prettier from 'eslint-plugin-prettier/recommended'
import vitest from '@vitest/eslint-plugin'

/* @type {import('eslint').Linter.Config} */
const config = [
	eslint.configs.recommended,
	...ts.configs.strictTypeChecked,
	...ts.configs.stylisticTypeChecked,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.js'],
					defaultProject: true
				},
				tsconfigRootDir: import.meta.dirname
			}
		}
	},
	{
		files: ['**/*.js'],
		...ts.configs.disableTypeChecked
	},
	unicorn.configs['flat/recommended'],
	{
		rules: {
			'unicorn/prevent-abbreviations': 'off'
		}
	},
	{
		ignores: ['dist/', 'node_modules/']
	},
	{
		files: ['**/*.test.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
		...vitest.configs.recommended,
		settings: {
			vitest: {
				typecheck: true
			}
		},
		languageOptions: {
			globals: {
				...vitest.environments.env.globals
			}
		}
	},
	prettier
]

export default config
