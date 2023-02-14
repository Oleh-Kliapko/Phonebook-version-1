import { useSelector } from 'react-redux';
import { WrapperContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';

const getFilteredContacts = (contacts, filterValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactsList = ({ contacts = [] }) => {
  const filterValue = useSelector(state => state.filter.value);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <WrapperContacts>
      {filteredContacts.map(contacts => (
        <ContactsListItem key={contacts.id} contacts={contacts} />
      ))}
    </WrapperContacts>
  );
};
