import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Input, Button, Label, ErrorInput } from './ContactForm.styled';
import { patternName, patternNumber, errorName, errorNumber } from 'utils';
import {
  useFetchContactsQuery,
  useAddContactsMutation,
} from 'redux/contactSlice';
import { Notification, LoaderSave } from 'utils';

export const ContactForm = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      phone: yup.number().positive().integer().required(),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();

  const onFormSubmit = async ({ name, phone }) => {
    const isFindName = contacts.find(state => state.name === name);
    if (isFindName) {
      Notification(name);
      reset();
      return;
    }

    await addContact({ name, phone });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)}>
      <Label htmlFor="name">
        Name
        <Input
          {...register('name', { required: true, pattern: patternName })}
        />
        {formState.errors.name && <ErrorInput>{errorName}</ErrorInput>}
      </Label>
      <Label htmlFor="phone">
        Phone number
        <Input
          {...register('phone', { required: true, pattern: patternNumber })}
        />
        {formState.errors.phone && <ErrorInput>{errorNumber}</ErrorInput>}
      </Label>
      <Button type="submit" disabled={isLoading}>
        {isLoading && <LoaderSave />}
        {!isLoading && 'Save contact'}
      </Button>
    </Form>
  );
};
