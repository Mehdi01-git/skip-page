import { create } from 'zustand'

type Store = {
    selectedSkip: string | null
    setSelectedSkip: (skipId: string | null) => void
}

export const useStore = create<Store>()((set) => ({
    selectedSkip: null,
    setSelectedSkip: (skipId) => set(() => ({ selectedSkip: skipId })),
}))
