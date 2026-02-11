import { ensureSchema } from "../../src/db/schema";

async function globalSetup() {
    await ensureSchema(); // create table once for entire run
}

export default globalSetup;
