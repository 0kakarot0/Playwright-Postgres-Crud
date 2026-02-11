import { pool } from "./client";

export type User = {
    id: number;
    name: string;
    email: string;
};

export class UsersRepository {
    async create(name: string, email: string): Promise<User> {
        const result = await pool.query(
            `INSERT INTO users (name, email)
       VALUES ($1, $2)
       RETURNING id, name, email`,
            [name, email]
        );
        return result.rows[0];
    }

    async getById(id: number): Promise<User | null> {
        const result = await pool.query(
            `SELECT id, name, email FROM users WHERE id = $1`,
            [id]
        );
        return result.rows[0] ?? null;
    }

    async updateEmail(id: number, email: string): Promise<User | null> {
        const result = await pool.query(
            `UPDATE users SET email = $2
       WHERE id = $1
       RETURNING id, name, email`,
            [id, email]
        );
        return result.rows[0] ?? null;
    }

    async delete(id: number): Promise<boolean> {
        const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
        return result.rowCount === 1;
    }
}
