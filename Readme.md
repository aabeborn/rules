# My personal Linting and formatting rules

## Introduction

The configuration supports linting via `eslint` (**flat configuration**) and formatting via `prettier`. As 2025 I will only write **typescript**, so base configuration fits my personal needs. Maybe in future I will add a specific js configuration only.

### Supported frameworks and libraries

    - Frontend
        - React
        - NextJs
        - Tailwind (on prettier, waiting for eslint plugin to add supports for v4)

    - Utilities
        - Vitest

### Installation

Add to your `.npmrc` file the following lines to use github registry:
```bash
@aabeborn:registry=https://npm.pkg.github.com
```

Use your preferred package manager to install the dependencies.

```bash
pnpm install -D @aabeborn/rules
```

Then you can import the configuration in your `eslint.config.js` and `prettier.config.js` files:

```javascript
/* ESLint configuration file */
/* Available configurations 
    - base
    - next
    - react

    Utilities are added automatically.
*/
import config from '@aabeborn/rules/eslint/[your-preferred-config]'

export default config
```

```javascript
/* Prettier configuration file */
import config from '@aabeborn/rules/prettier'

export default config
```
