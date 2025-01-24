import base from './base.js'
import next from '@next/eslint-plugin-next'
import compiler from 'eslint-plugin-react-compiler'
/* @type {import('eslint').Linter.Config} */
const config = [
	{
		plugins: {
			'@next/next': next
		},
		rules: {
			...next.configs.recommended.rules,
			...next.configs['core-web-vitals'].rules
		}
	},
	{
		plugins: {
			'react-compiler': compiler
		},
		rules: {
			'react-compiler/react-compiler': 'error'
		}
	},
    {
        ignores: ['.next/*']
    }
	...base
]

export default config
