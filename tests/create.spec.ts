import { test, expect } from "@playwright/test";
import {buildServices} from "./helpers/db.setup";

test.describe("DB CRUD - CREATE", () => {
    const api = buildServices();


    test("should create a user", async () => {
        const user = await api.createUser.execute("Ahtisham", `create_${Date.now()}@mail.com`);
        expect(user.id).toBeTruthy();
        expect(user.name).toBe("Ahtisham");

        // cleanup
        await api.deleteUser.execute(user.id);
    });
});
