// src/domain/hooks.ts
import { useState, useEffect } from 'react';
import { Dog } from '../types/Dog';
import { fetchAllDogs } from '../API';

type FetchState = 'initial' | 'loading' | 'success' | 'error';

export const useDogs = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [state, setState] = useState<FetchState>('initial');
  const [error, setError] = useState<Error | null>(null);

  const fetchDogs = async () => {
    setState('loading');
    try {
      const fetchedDogs = await fetchAllDogs();
      setDogs(fetchedDogs);
      setState('success');
    } catch (err) {
      setError(err as Error);
      setState('error');
    }
  };

  useEffect(() => {
    fetchDogs();

    const interval = setInterval(fetchDogs, 60000);
    return () => clearInterval(interval);
  }, []);

  return { dogs, state, error, refresh: fetchDogs };
};
