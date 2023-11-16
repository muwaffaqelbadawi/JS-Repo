import { useState } from "react";
import { addContact } from "../Functionality/createNewContact";
import { createNewContact } from "../Functionality/createNewContact";

export const useContactList = () => {

    const [newContact, setNewContact] = createNewContact(initialState);



    const [contacts, setContacts] = useState({
        contacts: new Array(),
    });

    return [
        contacts,
        () =>
            setContacts({
                contacts: [...contacts,

                    createNewContact(),
                ],
            }),
    ];
};
