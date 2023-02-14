import { ToastContainer } from 'react-toastify';
import { Phonebook, Title, TitleContacts } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { useFetchContactsQuery } from 'redux/contactSlice';
import { Loader, Error } from 'utils';

export const App = () => {
  const { data, error, isLoading } = useFetchContactsQuery();

  return (
    <>
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && !isLoading && <Error />}
        <ContactsList contacts={data} />
      </Phonebook>
      <ToastContainer autoClose={3000} />
    </>
  );
};
