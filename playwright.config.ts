import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    workers: 1, // recommended for DB tests
    globalSetup: require.resolve("./tests/global/global-setup"),
    globalTeardown: require.resolve("./tests/global/global-teardown"),

    reporter: [
        ["line"],
        ["allure-playwright", { resultsDir: "allure-results", detail: true, suiteTitle: true }],
    ],
});
