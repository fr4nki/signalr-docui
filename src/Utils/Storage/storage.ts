import { DataRecord } from './constants';

export function readStorage<T>(key: string): (T | null) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const writeStorage = (record: DataRecord<any>): void => {
  const recordKeys = Object.keys(record);

  recordKeys.forEach((key) => {
    const current = record[key];

    if (current !== undefined && current !== null) {
      const currentNormalized = JSON.stringify(current);

      window.localStorage.setItem(key, currentNormalized);
    } else {
      window.localStorage.removeItem(key);
    }

    return record;
  });
};

export const clearStorage = (recordKeys: string[]): DataRecord<null> => {
  const record: DataRecord<null> = {};

  recordKeys.forEach((key) => {
    window.localStorage.removeItem(key);
    record[key] = null;
  });

  return record;
};
