import { createNextConfig } from '@bratislava/eslint-config-next'

export default [
  ...createNextConfig({
    ignores: [
      '.next/**',
      'next-env.d.ts',
      'node_modules/**',
      '**/*.md',
      'graphql/index.ts',
      // CommonJS tool configs
      '*.config.js',
      '.prettierrc.js',
      'tailwind-workspace-preset.js',
    ],
  }).flat(Infinity),
  {
    settings: {
      // Tailwind 3: JS config instead of a CSS entry file
      'better-tailwindcss': { tailwindConfig: 'tailwind.config.js' },
    },
    rules: {
      // This codebase predates the shared config and compiles without
      // strictNullChecks, so the type-aware "unnecessary" rules misfire and
      // their autofixes would change behaviour (e.g. `x === false` -> `!x`
      // also matches undefined). Kept off until the code moves to strict mode.
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
      '@typescript-eslint/no-useless-default-assignment': 'off',
      // GraphQL `JSON` scalars (media formats) are untyped.
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      // Slovak-only site without i18n.
      'i18next/no-literal-string': 'off',
      // Formatting is Prettier's job.
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      // Props are typed with TypeScript.
      'react/prop-types': 'off',
      // Plain CSS classes from pages/styles.css and Swiper's own classes.
      // `m-8z` and `l:whitespace-nowrap` are typos that have never applied;
      // fixing them would change the layout, so they are left as they are.
      'better-tailwindcss/no-unknown-classes': [
        'error',
        {
          ignore: [
            '^section(-.*)?$',
            '^base-input(--.*)?$',
            '^text-truncate-4$',
            '^border-black-right$',
            '^list$',
            '^flex-0$',
            '^linear-swiper$',
            '^swiper-.*',
            '^m-8z$',
            '^l:whitespace-nowrap$',
          ],
        },
      ],
      // Legacy component patterns (state synced in effects, shadowed names);
      // rewriting them is out of scope of the framework upgrade.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/immutability': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      'sonarjs/regex-complexity': 'off',
    },
  },
]
