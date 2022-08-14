import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePreferencesStore } from "../store/usePreferencesStore";

type DensityToggleProps = {
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
};

export const DensityToggle = ({ className }: DensityToggleProps) => {
    const [density, setDensity] = usePreferencesStore((state) => [state.prefernces.density, state.setDensity]);

    return (
        <FontAwesomeIcon
            icon={density === "Comfortable" ? faAlignJustify : faBars}
            onClick={() => (density === "Comfortable" ? setDensity("Compact") : setDensity("Comfortable"))}
            className={className}
        />
    );
};
