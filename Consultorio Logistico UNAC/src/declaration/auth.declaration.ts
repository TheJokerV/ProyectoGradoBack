export type Query = Record<string, any>;

export interface DatabaseRepository<T> {
    auth(email: string, contraseña: string, query?: Query): Promise<T>;
}