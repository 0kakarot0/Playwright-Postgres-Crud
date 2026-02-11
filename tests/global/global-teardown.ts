import { closeDb } from "../../src/db/client";

async function globalTeardown() {
    await closeDb(); // close pool once for entire run
}

export default globalTeardown;
