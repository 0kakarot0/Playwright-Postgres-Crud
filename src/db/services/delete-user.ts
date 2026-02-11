import { UsersRepository } from "../users.repository";

export class DeleteUser {
    constructor(private readonly repo: UsersRepository) {}

    async execute(id: number): Promise<boolean> {
        return this.repo.delete(id);
    }
}
