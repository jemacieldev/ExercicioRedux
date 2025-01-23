import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload); 
    },
    editContact: (
      state,
      action: PayloadAction<{ index: number; updatedContact: Contact }>
    ) => {
      const { index, updatedContact } = action.payload;

      if (state.contacts[index]) {
        state.contacts[index] = { ...state.contacts[index], ...updatedContact }; 
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((_, i) => i !== action.payload); 
    },
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
