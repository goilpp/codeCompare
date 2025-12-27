# Code Comparison

A learning tool for developers to compare syntax across programming languages using HTML, CSS, JavaScript, and Prism.js.

## Overview

The Code Comparison Project is an interactive website that helps users learn a new programming language by comparing it to a language they already know. Using `<code>` and `<pre>` tags along with Prism.js for syntax highlighting, the site allows users to visually scan differences and similarities between languages.

> **_Note (as of 12/27/2025)_**:
> _The HTML content for this project is currently hard-coded. This version is primarily focused on layout and styling. Dynamic generation of code sections and comparisons will be added later using JavaScript and data files (such as JSON). Anyone reviewing the project at this stage will see the visual design but not the full functionality._

## Features

### Page 1 – Syntax Highlights

- Select your primary language and 1–3 languages to compare.
- Side-by-side column layout showing language syntax for:
  - Strings
  - Arrays
  - Numbers
  - Conditionals
  - Loops
  - Functions
- Inline `<code>` tags for simple methods or functions.
- `<pre>` + `<code>` blocks for structural code (loops, conditionals, function declarations) to maintain line alignment.
- Notes section below each list highlights important or unique language-specific features.

### Page 2 – Full Example Implementations

- Displays full code blocks for practical examples.
- Users can select a specific method or function (e.g., forEach) in their primary language.
- Matching implementations in other selected languages appear in corresponding columns.
- Supports comparisons between 1–3 languages per example.

## Technologies Used

- HTML, CSS, JavaScript
- [Prism.js](https://prismjs.com/) for syntax highlighting: `css/prism.js` and `js/prism.js`
- `<code>` and `<pre>` tags for semantic and styled code representation
- `localStorage` for retaining user selections across sessions

## Usage

1. Open the project in a browser.
2. On Page 1, select your primary language and 1–3 languages to compare.
3. Scan the side-by-side columns to view syntax comparisons.
4. On Page 2, choose a method or function to see full example implementations for each selected language.

## Notes

- Inline code uses `<code>` elements; multi-line blocks use `<pre><code>` for proper formatting.
- Only `<` and `&` need escaping when rendering dynamic code blocks. Quotes and > are safe in text nodes.
- Default light background ensures readability with Prism’s dark inline code backgrounds.

## Contributing

Contributions are welcome! If you'd like to help improve this project, please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get started, our workflow, and code style expectations.

## License

This project is licensed under the [MIT License](./LICENSE). This project is open source and free to use for educational purposes.
