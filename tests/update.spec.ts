import {test, expect} from "@playwright/test";
import {buildServices} from "./helpers/db.setup";

test.describe("DB CRUD - UPDATE", () => {
    const api = buildServices();


    test("should update user email", async () => {
        const created = await api.createUser.execute("Ahtisham", `update_${Date.now()}@mail.com`);

        const newEmail = `updated_${Date.now()}@mail.com`;
        const updated = await api.updateUser.executeEmailUpdate(created.id, newEmail);

        expect(updated).not.toBeNull();
        expect(updated?.email).toBe(newEmail);

        const verify = await api.readUser.execute(created.id);
        expect(verify?.email).toBe(newEmail);

        await api.deleteUser.execute(created.id);
    });
});
