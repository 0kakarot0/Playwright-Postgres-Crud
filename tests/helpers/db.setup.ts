import { UsersRepository } from "../../src/db/users.repository";
import { CreateUser } from "../../src/db/services/create-user";
import { ReadUser } from "../../src/db/services/read-user";
import { UpdateUser } from "../../src/db/services/update-user";
import { DeleteUser } from "../../src/db/services/delete-user";

export function buildServices() {
    const repo = new UsersRepository();

    return {
        createUser: new CreateUser(repo),
        readUser: new ReadUser(repo),
        updateUser: new UpdateUser(repo),
        deleteUser: new DeleteUser(repo),
    };
}
