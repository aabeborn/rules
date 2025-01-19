import base from './base.js'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import compiler from 'eslint-plugin-react-compiler'

/* @type {import('eslint').Linter.Config} */
const config = [
	react.configs.flat.recommended,
	{
		plugins: {
			'react-hooks': hooks,
			'react-compiler': compiler
		},
		settings: {
			react: {
				version: 'detect'
			}
		},
		rules: {
			'react-compiler/react-compiler': 'error',
			...hooks.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off'
		}
	},
	...base
]

export default config
