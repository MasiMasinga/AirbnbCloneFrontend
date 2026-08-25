import { create } from 'zustand';

export const useUserStore = create((set) => ({
    setUser: (user: any) => set({ user }),
})); 