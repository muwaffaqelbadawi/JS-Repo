// import { useState } from "react";
import { useContactList } from "../ContactList/useContactList";






export const removeContact = (removableContact) => {

    const [contact, removeContact] = useContactList({});





    return (
        <div>
            <h2>
                <button onClick={removeContact}></button>
            </h2>
            ;
        </div>
    );
};
