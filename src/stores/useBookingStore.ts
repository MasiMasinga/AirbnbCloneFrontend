import { create } from 'zustand';

export const useBookingStore = create((set) => ({
    setBookingDetails: (details: any) => set({ bookingDetails: details }),
})); 