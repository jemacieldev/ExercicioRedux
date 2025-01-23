import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  index: number;
  name: string;
  email: string;
  phone: string;
}

interface ModalState {
  isOpen: boolean;
  contactToEdit: Contact | null;
}

const initialState: ModalState = {
  isOpen: false,
  contactToEdit: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Contact | null>) => {
      state.isOpen = true;
      state.contactToEdit = action.payload; 
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.contactToEdit = null; 
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
