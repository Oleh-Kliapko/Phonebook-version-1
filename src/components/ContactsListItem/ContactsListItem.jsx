import { Item, DeleteButton } from './ContactsListItem.styled';
import { useDeleteContactMutation } from 'redux/contactSlice';
import { LoaderDelete } from 'utils';

export const ContactsListItem = ({ contacts }) => {
  const { id, name, phone } = contacts;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      {name}: {phone}
      <DeleteButton
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading && <LoaderDelete />}
        {!isLoading && 'Delete'}
      </DeleteButton>
    </Item>
  );
};
