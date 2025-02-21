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

1. Clone the repository:

   ```bash
   git clone https://github.com/Vokoloven/react-application-template
   cd react-application-template
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

| Command                 | Description                        |
| ----------------------- | ---------------------------------- |
| `npm start`             | Starts the development server      |
| `npm run build`         | Builds the app for production      |
| `npm run lint`          | Runs ESLint on the `src` directory |
| `npm run lint:fix`      | Fixes linting issues in `src`      |
| `npm run format`        | Formats all files with Prettier    |
| `npm test`              | Runs Jest tests                    |
| `npm run test:coverage` | Runs tests with coverage report    |

## Usage

1. Development:

```bash
npm start
```

Opens http://localhost:3000 (or the next available port).

2. Production Build:

```bash
npm run build
```

Outputs to the build/ directory.

3. Testing

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

Husky and lint-staged are configured to enforce code quality on commits. For details on branch naming and commit message conventions, please refer to the configuration files (e.g., [`.husky`](./.husky) and [`commitlint.config.mjs`](./commitlint.config.mjs)).

Husky and lint-staged will enforce code quality on commits.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

Ruslan Volovenko
