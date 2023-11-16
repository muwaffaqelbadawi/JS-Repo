import { useState } from "react";

export const setFirstName = () => {
    const [firstName, setfirstName] = useState(new String(""));

    return [firstName, () => setfirstName()];
};
