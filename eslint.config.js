import eslint from "@eslint/js"
import pluginVue from 'eslint-plugin-vue'

const FILES = ["**/*.ts"]
const IGNORES = ["dist/*"]

export default [
    ...pluginVue.configs["flat/essential"],
    eslint.configs.recommended,
    {
        rules: {
            "no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ],
        }
    },
].map(config => ({
    ...config,
    files: FILES,
    ignores: IGNORES
}))
