# React Application Template

![React](https://img.shields.io/badge/React-18.3.1-blue) ![Webpack](https://img.shields.io/badge/Webpack-5.98.0-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blueviolet) ![License](https://img.shields.io/badge/license-ISC-lightgrey)

A customizable React application template built with Webpack, TypeScript, ESLint, Prettier, Jest, and Husky. Designed for developers who want a robust starting point for modern React applications with a tailored Webpack setup.

## Features

- **React 18** with automatic JSX runtime
- **Custom Webpack** configuration (dev & prod)
- **TypeScript** support with path aliases
- **ESLint & Prettier** for code quality and formatting
- **Jest** for testing with coverage
- **Husky & lint-staged** for pre-commit hooks
- **SCSS/SASS** support with CSS optimization
- **Bundle Analyzer** for build insights
- **Environment Variables** with `.env` support
- **Hot Module Replacement (HMR)** in development

## Prerequisites

- **Node.js**: v16 or higher
- **npm**: v8 or higher

## Installation

## Installation

1. Clone the repository from GitLab:

```bash
git clone https://github.com/Vokoloven/react-application-template
```

2. Open the repository

```bash
cd react-application-template
```

3. Install dependencies:

```bash
npm install
```

## Scripts

| Command                 | Description                            |
|-------------------------|----------------------------------------|
| `npm start`             | Starts the development server          |
| `npm run build`         | Builds the app for production          |
| `npm run lint`          | Runs ESLint on the `src` directory     |
| `npm run lint:fix`      | Fixes linting issues in `src`          |
| `npm run format`        | Formats all files with Prettier        |
| `npm test`              | Runs Jest tests                        |
| `npm run test:coverage` | Runs tests with coverage report        |

## Usage

- To start development, run `npm start` — this opens `http://localhost:3000` (or the next available port) with Hot Module Replacement enabled.
- For a production build, use `npm run build` to output the optimized bundle to the `build/` directory.
- To run tests, execute `npm test` for unit tests or `npm run test:coverage` for a detailed coverage report.

## Specific Notes

- **Pre-Commit Hooks**: Husky and lint-staged enforce code quality on every commit. See [`.husky`](./.husky/) and [`commitlint.config.mjs`](./commitlint.config.mjs) for branch naming and commit message conventions.
- **Merge Requests**: Contributions should follow GitLab’s Merge Request workflow. Refer to the [contribution guidelines](#) (add link if applicable).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Ruslan Volovenko
