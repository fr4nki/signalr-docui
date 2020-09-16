export interface DataRecord<T> {
  [key: string]: T | null;
}

export interface UseStorage<T> {
  key: keyof T;
}
