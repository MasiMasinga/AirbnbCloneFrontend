import { create } from 'zustand';

export const usePaymentStore = create((set) => ({
    setPaymentMethod: (method: string) => set({ paymentMethod: method }),
})); 