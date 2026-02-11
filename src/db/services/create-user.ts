import { UsersRepository, User } from "../users.repository";

export class CreateUser {
    constructor(private readonly repo: UsersRepository) {}

    async execute(name: string, email: string): Promise<User> {
        return this.repo.create(name, email);
    }
}
