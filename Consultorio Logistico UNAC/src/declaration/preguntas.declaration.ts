export type Query = Record<string, any>;

export interface DatabaseRepository<T> {
    List(query?: Query): Promise<T[]>;
    get(id: number, query?: Query): Promise<T>;
}