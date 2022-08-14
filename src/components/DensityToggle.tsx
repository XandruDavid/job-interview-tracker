import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { faAlignJustify, faBars, faEquals } from "@fortawesome/free-solid-svg-icons";
import { usePreferencesStore } from "../store/usePreferencesStore";
import { Density } from "../models/Preferences";

type DensityToggleProps = {
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

const densityIcon: Record<Density, IconDefinition> = {
    Compact: faAlignJustify,
    Normal: faBars,
    Comfortable: faEquals,
};

const nextDensity: Record<Density, Density> = {
    Compact: "Normal",
    Normal: "Comfortable",
    Comfortable: "Compact",
};

export const DensityToggle = ({ className }: DensityToggleProps) => {
    const [density, setDensity] = usePreferencesStore((state) => [state.prefernces.density, state.setDensity]);

    return <FontAwesomeIcon icon={densityIcon[density]} onClick={() => setDensity(nextDensity[density])} className={className} />;
};
