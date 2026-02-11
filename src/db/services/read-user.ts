import { UsersRepository, User } from "../users.repository";

export class ReadUser {
    constructor(private readonly repo: UsersRepository) {}

    async execute(id: number): Promise<User | null> {
        return this.repo.getById(id);
    }
}