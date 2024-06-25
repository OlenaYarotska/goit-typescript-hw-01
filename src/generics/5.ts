export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}

type RoleDescription = Record<UserRole, string>
const RoleDescription: RoleDescription = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};
