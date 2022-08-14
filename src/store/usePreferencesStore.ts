import create from "zustand";
import { persist } from "zustand/middleware";
import { Density, Preferences } from "../models/Preferences";

const LOCAL_STOREAGE_KEY = "preferences";

const getDefaultPreferences: () => Preferences = () => ({
    density: "Compact",
});

type PreferencesState = {
    prefernces: Preferences;
    setDensity: (density: Density) => void;
};

export const usePreferencesStore = create<PreferencesState>()(
    persist(
        (set) => ({
            prefernces: getDefaultPreferences(),
            setDensity: (density) => set((state) => ({ prefernces: { ...state.prefernces, density: density } })),
        }),
        { name: LOCAL_STOREAGE_KEY },
    ),
);
