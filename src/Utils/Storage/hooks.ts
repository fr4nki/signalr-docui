import { useState } from 'react';

import { readStorage, writeStorage } from './storage';

export function useStorage<T>(key: string): [
  T | null,
  (newValues: T) => void,
] {
  const defaultVals = readStorage<T>(key);
  const [vals, setVals] = useState<T | null>(defaultVals);

  return [
    vals,
    (newValues) => {
      setVals(newValues);
      writeStorage({ [key]: newValues });
    },
  ];
}
