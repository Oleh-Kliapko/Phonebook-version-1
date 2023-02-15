import { useSelector } from 'react-redux';
import { WrapperContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { selectFilter, getFilteredContacts } from 'redux/selectors';

export const ContactsList = ({ contacts = [] }) => {
  const filterValue = useSelector(selectFilter);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <WrapperContacts>
      {filteredContacts.map(contacts => (
        <ContactsListItem key={contacts.id} contacts={contacts} />
      ))}
    </WrapperContacts>
  );
};
