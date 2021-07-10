/* eslint-disable no-useless-escape */
import * as yup from 'yup';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Seo from '@/components/Seo';
import Input from '@/components/Input';
import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';
import DatePicker from '@/components/DatePicker';
import PasswordInput from '@/components/PasswordInput';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Need to be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  age: yup
    .number('Must be a number')
    .typeError('Must be a number')
    .positive('Must be a positive value')
    .integer('Must be a number')
    .required('Age is required'),
  phone: yup
    .string()
    .matches(/^\+628[1-9][0-9]{8,11}$/, 'Must use +62 format')
    .required('Phone is required'),
  personalsite: yup
    .string()
    .url('Must be a url')
    .required('Personal Site is required'),
  date: yup
    .date()
    .min(new Date('2020-08-15'), 'Date must be greater than 15/08/2020')
    .required('Date is required'),
});

export default function YupPage() {
  const methods = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });
  const { handleSubmit } = methods;

  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Seo title='Yup' />

      <main>
        <section className=''>
          <div className='py-16 layout'>
            <CustomLink href='/' className='mb-2'>
              ← Back to Home
            </CustomLink>
            <h1>Form Using Yup Validation</h1>
            <CustomLink
              href='https://github.com/theodorusclarence/rhf-input/blob/main/pages/yup.jsx'
              className='mt-2'
            >
              See the source code
            </CustomLink>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-lg mt-4 space-y-4'
              >
                <Input id='name' label='Name' />
                <Input id='email' label='Email' />
                <PasswordInput id='password' label='Password' />
                <Input id='age' label='Age' />
                <Input id='phone' label='Phone' helperText='Use +62 format' />
                <Input id='personalsite' label='Personal Site' />
                <DatePicker
                  id='date'
                  label='Date'
                  helperText='Choose date greater than 15/08/2020'
                />
                <Button type='submit'>Submit Button</Button>
              </form>
            </FormProvider>
            <div className='mt-8'>
              <h3>Yup Schema:</h3>
              <pre className='overflow-auto'>{schemaString}</pre>
            </div>
            <div className='mt-8'>
              <h3>Result:</h3>
              <pre className='overflow-auto'>
                {JSON.stringify(formData, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const schemaString = `
{
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Need to be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  age: yup
    .number('Must be a number')
    .typeError('Must be a number')
    .positive('Must be a positive value')
    .integer('Must be a number')
    .required('Age is required'),
  phone: yup
    .string()
    .matches(/^\+628[1-9][0-9]{8,11}$/, 'Must use +62 format')
    .required('Phone is required'),
  personalsite: yup
    .string()
    .url('Must be a url')
    .required('Personal Site is required'),
  date: yup
    .date()
    .min(new Date('2020-08-15'), 'Date must be greater than 15/08/2020')
    .required('Date is required'),
}
`;
