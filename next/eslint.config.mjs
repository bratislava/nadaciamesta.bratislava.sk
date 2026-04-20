import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('plugin:tailwindcss/recommended'),
  eslintConfigPrettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/require-default-props': 'off',
      'arrow-body-style': 'off',
      'no-underscore-dangle': [
        'error',
        { allow: ['__NEXT_DATA__', '__NEXT_LOADED_PAGES__', '__typename'] },
      ],
      'tailwindcss/no-custom-classname': ['warn', { whitelist: ['.*dw.*', '.*dh.*'] }],
      '@typescript-eslint/no-use-before-define': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    ignores: ['*.config.*', 'graphql/', '.eslintrc.js', '.next/', 'node_modules/'],
  },
)
