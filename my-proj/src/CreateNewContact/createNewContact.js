import { useState } from "react";
import { setFirstName } from "../SetNewContact/setFirstName";
import { setLastName } from "../SetNewContact/setLastName";
import { setPhoneNumber } from "./setPhoneNumber";

export const createNewContact = ({setFirstName, setLastName, setPhoneNumber}) => {
    const [newContact, setNewContact] = useState(new Object());

    return [
        newContact,
        () =>
            setNewContact({
                firstName: setFirstName,
                lastName: setLastName,
                phoneNumber: setPhoneNumber,
                id: Math.random(),
            }),
    ];
};
