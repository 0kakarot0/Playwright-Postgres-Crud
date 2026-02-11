import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    workers: 1, // DB tests are safer single-threaded
    globalSetup: require.resolve("./tests/global/global-setup"),
    globalTeardown: require.resolve("./tests/global/global-teardown"),
});