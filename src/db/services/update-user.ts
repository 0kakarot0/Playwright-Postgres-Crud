import { UsersRepository, User } from "../users.repository";

export class UpdateUser {
    constructor(private readonly repo: UsersRepository) {}

    async executeEmailUpdate(id: number, email: string): Promise<User | null> {
        return this.repo.updateEmail(id, email);
    }
}
