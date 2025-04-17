import { Entertainer } from "../types/Entertainer";

// Type for the summary list
export type EntertainerSummary = {
    entertainerID: number;
    entStageName: string;
    bookingCount: number;
    lastBookedDate: string;
  };

const API_URL=`https://final-wilson-backend.azurewebsites.net/Entertainer`;
// const API_URL=`https://localhost:5000/Entertainer`;

// Get summary list: stage name, booking count, and last booking date
export const fetchEntertainerSummaries = async (): Promise<EntertainerSummary[]> => {
    const response = await fetch(API_URL+"/summaries");
    if (!response.ok) {
      throw new Error("Failed to fetch entertainer summaries");
    }
    return await response.json();
  };


// Get detailed entertainer info by ID
export const fetchEntertainerById = async (id: number): Promise<Entertainer> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch entertainer details");
    }
    return await response.json();
  };

export const addEntertainer = async (newEntertainer: Entertainer): Promise<Entertainer> => {
    try {
        const response=await fetch(`${API_URL}/AddEntertainer`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',

            },
            body: JSON.stringify(newEntertainer),
        });
        if (!response.ok) {
            throw new Error('Failed to add entertainer');
        }
        return await response.json();

    } catch (error) {
        console.error('Error adding entertainer',error);
        throw error;
    }
};

// src/api/EntertainersAPI.ts
export const updateEntertainer = async (entertainer: Entertainer): Promise<Entertainer> => {
  const response = await fetch(`${API_URL}/UpdateEntertainer/${entertainer.entertainerID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entertainer),
  });

  if (!response.ok) {
    throw new Error('Failed to update entertainer');
  }

  return await response.json();
};


export const deleteEntertainer = async (entertainerID: number): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}/DeleteEntertainer/${entertainerID}`, 
        {
            method: "DELETE",
        })
    

    if (!response.ok) {
        throw new Error('Failed to delete entertainer');
    }
    } catch (error) {
        console.error('Error deleting project:',error);
        throw error;

    }
};