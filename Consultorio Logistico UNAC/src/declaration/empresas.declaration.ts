export type Query = Record<string, any>;

export interface DatabaseRepository<T> {
    create(data: Partial<T>, query?: Query): Promise<T>;
    List(query?: Query): Promise<T[]>;
    get(id: number, query?: Query): Promise<T>;
    update(id: number, data: T, query?: Query): Promise<T>;
    remove(id: number, query?: Query): Promise<T>;
}