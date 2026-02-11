import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const env = {
    databaseUrl: process.env.DATABASE_URL ?? "",
};

if (!env.databaseUrl) {
    throw new Error("DATABASE_URL is missing. Add it in .env file.");
}
