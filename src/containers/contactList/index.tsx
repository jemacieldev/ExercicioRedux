import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Card from "../../components/card";
import { ContactContainer, EmptyMessage } from "./style";
import { Container } from "../../style";

const ContactList = () => {
    const contacts = useSelector((state: RootState) => state.contact.contacts); 
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm); 

   
    const filteredContacts = contacts.filter(
        (contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm)
    );

    return (
        <div>
            <Container>
                {filteredContacts.length === 0 ? (
                    <EmptyMessage>
                        {contacts.length === 0
                            ? "Nenhum contato salvo"
                            : "Nenhum contato encontrado"}
                    </EmptyMessage>
                ) : (
                    filteredContacts.map((contact, index) => (
                        <ContactContainer key={index}>
                            <Card
                                index={index}
                                name={contact.name}
                                email={contact.email}
                                phone={contact.phone}
                            />
                        </ContactContainer>
                    ))
                )}
            </Container>
        </div>
    );
};

export default ContactList;
