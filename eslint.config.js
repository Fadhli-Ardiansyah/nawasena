import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { ignores: ["dist"] },
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        settings: { react: { version: "18.3" } },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs["jsx-runtime"].rules,
            ...reactHooks.configs.recommended.rules,
            "react/jsx-no-target-blank": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },
    {
        name: "nawasena",
        private: true,
        version: "0.0.0",
        type: "module",
        scripts: {
            dev: "vite",
            build: "vite build",
            lint: "eslint .",
            preview: "vite preview",
        },
        dependencies: {
            bootstrap: "^5.3.3",
            react: "^18.3.1",
            "react-bootstrap": "^2.10.9",
            "react-dom": "^18.3.1",
            "react-router-dom": "^7.1.5",
        },
        devDependencies: {
            "@eslint/js": "^9.17.0",
            "@types/react": "^18.3.18",
            "@types/react-dom": "^18.3.5",
            "@vitejs/plugin-react": "^4.3.4",
            eslint: "^9.17.0",
            "eslint-plugin-react": "^7.37.2",
            "eslint-plugin-react-hooks": "^5.0.0",
            "eslint-plugin-react-refresh": "^0.4.16",
            globals: "^15.14.0",
            vite: "^6.0.5",
        },
        description:
            "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
        main: "eslint.config.js",
        author: "Fadhli Ardiansyah",
        license: "ISC",
    },
];
