import { create } from 'zustand';

export const useListingsStore = create((set) => ({
    setListings: (listings: any) => set({ listings }),
})); 