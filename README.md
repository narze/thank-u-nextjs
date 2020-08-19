# Thank u, Next.js

Bootstrap a developer-friendly (?) NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [Husky](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Tailwind CSS](https://tailwindcss.com)
- [Emotion](https://emotion.sh)
- [`@tailwindcssinjs/macro`](https://github.com/Arthie/tailwindcssinjs) It injects Tailwind CSS into Emotion styled component, so PurgeCSS is not needed in this setup.
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [Cypress](http://cypress.io/) and [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library)
- [Storybook](https://storybook.js.org)

This template is built from [examples/with-tailwindcss-emotion](https://github.com/vercel/next.js/blob/canary/examples/with-tailwindcss-emotion/README.md) & [examples/with-typescript-eslint-jest](https://github.com/vercel/next.js/blob/canary/examples/with-typescript-eslint-jest/README.md) then added some more sensible packages.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/narze/thank-u-nextjs)

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/narze/thank-u-nextjs my-app
# or
yarn create next-app --example https://github.com/narze/thank-u-nextjs my-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
