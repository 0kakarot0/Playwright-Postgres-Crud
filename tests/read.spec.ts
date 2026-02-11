import {test, expect} from "@playwright/test";
import {buildServices} from "./helpers/db.setup";

test.describe("DB CRUD - READ", () => {
    const api = buildServices();


    test("should read a user by id", async () => {
        const created = await api.createUser.execute("Ahtisham", `read_${Date.now()}@mail.com`);

        const fetched = await api.readUser.execute(created.id);
        expect(fetched).not.toBeNull();
        expect(fetched?.email).toBe(created.email);

        await api.deleteUser.execute(created.id);
    });
});
