import { create } from 'zustand';

export const useSupportStore = create((set) => ({
    setSupportTicket: (ticket: any) => set({ supportTicket: ticket }),
})); 