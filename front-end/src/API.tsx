import { Dog } from './types/Dog';

const baseUrl = 'http://localhost:8080/api/dogs';

/**
 * Fetch all dog instances
 * @returns Promise of all dog entries
 */
export const fetchAllDogs = async (): Promise<Dog[]> => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data as Dog[];
  } catch (error) {
    console.error('Error fetching dogs: ', error);
    return [];
  }
};

/**
 * Fetch a dog instance by its id
 * @param id id of a Dog instance
 * @returns Promise of dog entry with id
 */
export const fetchDogById = async (id: string): Promise<Dog | undefined> => {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    return data as Dog;
  } catch (error) {
    console.error('Error fetching dog by id: ', error);
  }
};

/**
 * Creates a dog new instance
 * @param dog Dog type object 
 * @returns Promise of the Dog instance stored
 */
export const createDog = async (dog: Dog): Promise<Dog | undefined> => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dog),
    });
    const data = await response.json();
    return data as Dog;
  } catch (error) {
    console.error('Error creating dog: ', error);
  }
};


/**
 * Update a dog instance
 * @param dog Dog type object
 * @returns Promise of dog instance updated
 */
export const updateDog = async (dog: Dog): Promise<Dog | undefined> => {
  try {
    const response = await fetch(`${baseUrl}/${dog.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dog),
    });
    const data = await response.json();
    return data as Dog;
  } catch (error) {
    console.error('Error updating dog: ', error);
  }
};


/**
 * Deletes an isntance of dog based on its id
 * @param id Id of dog instance to delete
 */
export const deleteDog = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting dog: ', error);
  }
};
