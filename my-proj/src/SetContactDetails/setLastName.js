import { useState } from "react";

export const setLastName = () => {
    const [lastName, setLastame] = useState(new String(""));

    return [lastName, () => setLastName()];
};
