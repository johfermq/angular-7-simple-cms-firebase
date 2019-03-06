export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	roles: Role;
}

export interface Role {
	suscriber?: boolean;
	admin?: boolean;
}
