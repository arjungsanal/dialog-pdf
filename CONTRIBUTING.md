# Contributing Guidelines

## Welcome! 

Thank you for considering contributing to the Dialog-PDF project. This document outlines the guidelines for contributing to make the process smooth and effective.

## Code Standards

### TypeScript and Documentation

- Follow TypeScript best practices
- Use JSDoc comments for documentation
- Document all functions, classes, and interfaces

Example of expected documentation:

```typescript
/**
 * Processes a PDF document and extracts text content
 * @param {string} filePath - Path to the PDF file
 * @param {ProcessOptions} options - Processing configuration options
 * @returns {Promise<string>} Extracted text content
 * @throws {FileNotFoundError} When the PDF file doesn't exist
 */
async function processPDF(filePath: string, options: ProcessOptions): Promise<string> {
  // Implementation
}
```

### Code Style

- Use 2 spaces for indentation
- Follow consistent naming conventions:
  - camelCase for variables and functions
  - PascalCase for classes and interfaces
- Add type definitions where applicable
- Keep functions small and focused
- Use meaningful variable and function names

## How to Contribute

1. **Fork the Repository**
   - Fork the repository to your GitHub account
   - Clone your fork locally

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, documented code with JSDoc comments
   - Follow TypeScript best practices
   - Test your changes thoroughly

4. **Commit Your Changes**
   - Use clear and meaningful commit messages
   - Follow conventional commits format
   ```bash
   git commit -m "feat: add new feature"
   ```

5. **Submit a Pull Request**
   - Push your changes to your fork
   - Create a pull request from your branch to our main branch
   - Ensure all documentation is complete
   - Reference any related issues

## Testing

- Write unit tests for new features
- Ensure all existing tests pass
- Run tests locally before submitting PR
```bash
npm run test
```

## Bug Reports

When filing an issue, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node.js version, TypeScript version, OS)

## Feature Requests

- Use the issue tracker with the "enhancement" label
- Clearly describe the feature and its use case
- Include proposed TypeScript interfaces if applicable

## Questions?

Feel free to open an issue for any questions about contributing.

## License

By contributing, you agree that your contributions will be licensed under the project's existing license.