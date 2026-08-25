import { create } from 'zustand';

export const useReviewStore = create((set) => ({
    setReview: (review: any) => set({ review }),
})); 