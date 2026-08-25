import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    setAuthToken: (token: string) => set({ authToken: token }),
}));