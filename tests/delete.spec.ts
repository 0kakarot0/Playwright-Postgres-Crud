import { test, expect } from "@playwright/test";
import {buildServices} from "./helpers/db.setup";

test.describe("DB CRUD - DELETE", () => {
    const api = buildServices();


    test("should delete a user", async () => {
        const created = await api.createUser.execute("Ahtisham", `delete_${Date.now()}@mail.com`);

        const deleted = await api.deleteUser.execute(created.id);
        expect(deleted).toBeTruthy();

        const verify = await api.readUser.execute(created.id);
        expect(verify).toBeNull();
    });
});
