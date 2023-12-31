// src/domain/hooks.ts
import { useState, useEffect } from 'react';
import { Dog } from '../types/Dog';
import { fetchAllDogs, fetchDogById } from '../API';

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

export const useDog = (id: string | undefined) => {
    const [dog, setDog] = useState<Dog | null>(null);
    const [state, setState] = useState<FetchState>('initial');
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchDog = async () => {
        if (!id) throw error;
        setState('loading');
        try {
          const fetchedDog = await fetchDogById(id);
          if (fetchedDog) {
            setDog(fetchedDog);
            setState('success');
          }
        } catch (err) {
          setError(err as Error);
          setState('error');
        }
      };
  
      fetchDog();
    }, [id]);
  
    return { dog, state, error };
  };