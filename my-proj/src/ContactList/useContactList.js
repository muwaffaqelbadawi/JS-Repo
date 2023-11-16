import { useState } from "react";
import { addContact } from "../Functionality/createNewContact";
import { createNewContact } from "../Functionality/createNewContact";

export const useContactList = () => {
    const [contacts, setContacts] = useState({
        contacts: new Array(),
    });

    return [
        contacts,
        () =>
            setContacts({
                contacts: [...contacts,
                    createNewContact()
                ],
            }),
    ];
};
