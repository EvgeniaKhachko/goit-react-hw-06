
import { createSlice } from "@reduxjs/toolkit";

const initialContactsState = {
    items: [
        { "id": "id-1", "name": "Rosie Simpson", "phone": "459-12-56" },
        { "id": "id-2", "name": "German Kline", "phone": "443-89-12" },
        { "id": "id-3", "name": "Eden Clements", "phone": "645-17-79" },
        { "id": "id-3-1", "name": "Elite taxi", "phone": "238-8-238" },
        { "id": "id-4", "name": "Annie Copeland", "phone": "227-91-26" }
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContactsState,
    reducers: {
        addContact(state, actions) {
            state.items.push(actions.payload);
        },
        deleteContact(state, actions) {
            state.items = state.items.filter(item => item.id !== actions.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;
export default contactsSlice.reducer;





