module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', 'jsx-a11y'],
    rules: {
      // Configuração para indentação de 4 espaços
      'indent': ['error', 4],
  
      // Remover o uso de ponto e vírgula
      'semi': ['error', 'never'],
    },
  };
  