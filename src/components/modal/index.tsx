import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addContact, editContact } from "../../store/slices/contactSlice";
import { closeModal } from "../../store/slices/modalSlice";
import { ContainerButton, ErrorInputMensage, ModalContent, ModalInput, ModalOverlay, ModalTitle } from "./style";
import { Button } from "../button";
import InputMask from "react-input-mask";

const ContactModal = () => {
    const dispatch = useDispatch();
    const { isOpen, contactToEdit } = useSelector((state: RootState) => state.modal);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    useEffect(() => {
        if (contactToEdit) {
            setName(contactToEdit.name);
            setEmail(contactToEdit.email);
            setPhone(contactToEdit.phone);
        } else {
            setName("");
            setEmail("");
            setPhone("");
        }
    }, [contactToEdit]);

    const validateInputs = () => {
        let isValid = true;

        if (!name.trim()) {
            setNameError("O nome é obrigatório.");
            isValid = false;
        } else {
            setNameError("");
        }

        if (!email.trim()) {
            setEmailError("O e-mail é obrigatório.");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!phone.trim() || phone.includes("_")) {
            setPhoneError("O número é obrigatório e deve estar completo.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        return isValid;
    };

    const handleSubmit = () => {
        if (!validateInputs()) return;

        if (contactToEdit) {
            dispatch(
                editContact({
                    index: contactToEdit.index,
                    updatedContact: { name, email, phone },
                })
            );
        } else {
            dispatch(addContact({ name, email, phone }));
        }

        resetFields(); // Limpa os campos
        handleClose();
    };

    const resetFields = () => {
        setName("");
        setEmail("");
        setPhone("");
    };

    const handleClose = () => {
        resetFields();
        setNameError("");
        setEmailError("");
        setPhoneError("");
        dispatch(closeModal());
    };

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={handleClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalTitle>{contactToEdit ? "Editar Contato" : "Cadastrar Contato"}</ModalTitle>

                <ModalInput
                    placeholder="Digite o nome"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {nameError && <ErrorInputMensage>{nameError}</ErrorInputMensage>}

                <ModalInput
                    placeholder="Digite o e-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <ErrorInputMensage>{emailError}</ErrorInputMensage>}

                <InputMask
                    mask="(99) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                >
                    {(inputProps) => (
                        <ModalInput
                            {...inputProps}
                            placeholder="Digite o número"
                            type="tel"
                        />
                    )}
                </InputMask>
                {phoneError && <ErrorInputMensage>{phoneError}</ErrorInputMensage>}

                <ContainerButton>
                    <Button variant="edit" onClick={handleSubmit}>
                        {contactToEdit ? "Salvar" : "Adicionar"}
                    </Button>
                    <Button variant="remove" onClick={handleClose}>
                        Cancelar
                    </Button>
                </ContainerButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default ContactModal;
