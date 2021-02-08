import { Role } from "./role"

export class User {
    username: string
    password: string
    name: string
    lastname: string
    checkbox1: boolean
    checkbox2: boolean
    checkbox3: boolean
    enabled: boolean
    roles: Role
}
