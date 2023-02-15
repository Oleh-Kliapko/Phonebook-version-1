export const selectFilter = state => state.filter.value;

export const getFilteredContacts = (contacts, filterValue) =>
  contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
