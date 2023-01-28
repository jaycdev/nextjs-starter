# NextJS Typescript starter

This is a NextJS Typescript starter with a few extra features.

## Features

- NextJS
- Typescript and ESLint
- TailwindCSS with DaisyUI
- Jest (unit testing)
- Cypress (e2e and integration/component testing)

## Getting started

1. Clone the repo and install dependencies.
2. Run `npm run dev` to start the development server.
3. Jest and Cypress are already configured, you can run `npm run test` and `npm cypress` to run the appropriate test runners.
4. You can run `npm run build` to build the project for production.
5. You can run `npm run start` to start the production server.

## Notes

- Cypress is configured for globals. So when you write tests you can use `cy` and `Cypress` without importing them.
- For Jest, you must import functions via @jest/globals. See the lib/components/example test for more details.
