import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import id from 'date-fns/locale/id';

import Seo from '@/components/Seo';
import Input from '@/components/Input';
import Button from '@/components/Button';
import HashLink from '@/components/HashLink';
import TextArea from '@/components/TextArea';
import DatePicker from '@/components/DatePicker';
import CustomLink from '@/components/CustomLink';
import Select from '@/components/Select';
import PasswordInput from '@/components/PasswordInput';
import Dropzone from '@/components/Dropzone';

export default function InputsPage() {
  const methods = useForm({ mode: 'onTouched' });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Seo title='Inputs' />

      <main>
        <div className=''>
          <div className='py-16 layout'>
            <CustomLink href='/' className='mb-2'>
              ← Back to Home
            </CustomLink>
            <h1>List of Inputs</h1>
            <CustomLink
              href='https://github.com/theodorusclarence/rhf-input/blob/main/pages/inputs.jsx'
              className='mt-2 font-medium text-gray-700'
            >
              See the source code
            </CustomLink>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-sm mt-12 space-y-12'
              >
                <InputSection />
                <hr />
                <PasswordInputSection />
                <hr />
                <TextAreaSection />
                <hr />
                <DatePickerSection />
                <hr />
                <SelectSection />
                <hr />
                <DropzoneSection />

                <Button type='submit'>Submit Button (check console)</Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </>
  );
}

function InputSection() {
  return (
    <section id='text-input' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#text-input'>
            <h2>Text Input</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/Input.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>

      <div className='space-y-2' id='text-input-normal'>
        <HashLink href='#text-input-normal'>
          <h3 className='text-lg'>Normal Text Input</h3>
        </HashLink>
        <Input id='input' label='Label' helperText='Helper text' />
      </div>
      <div className='space-y-2' id='text-input-required'>
        <HashLink href='#text-input-required'>
          <h3 className='text-lg'>
            Text Input with required validation (onTouched)
          </h3>
        </HashLink>
        <Input
          id='input2'
          label='Label'
          helperText='Helper text'
          validation={{ required: 'Custom error message' }}
        />
      </div>
      <div className='space-y-2' id='text-input-readonly'>
        <HashLink href='#text-input-readonly'>
          <h3 className='text-lg'>Text Input Read Only</h3>
        </HashLink>
        <Input
          id='input3'
          label='Label'
          helperText='Helper text'
          readOnly
          defaultValue='Default Value'
        />
      </div>
    </section>
  );
}

function PasswordInputSection() {
  return (
    <section id='password-input' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#password-input'>
            <h2>Password Input</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/PasswordInput.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>

      <div className='space-y-2' id='password-input-normal'>
        <HashLink href='#password-input-normal'>
          <h3 className='text-lg'>Normal Password Input</h3>
        </HashLink>
        <PasswordInput id='password' label='Label' helperText='Helper text' />
      </div>
      <div className='space-y-2' id='password-input-required'>
        <HashLink href='#password-input-required'>
          <h3 className='text-lg'>Password Input with required validation</h3>
        </HashLink>
        <PasswordInput
          id='input2'
          label='Label'
          helperText='Helper text'
          validation={{ required: 'Custom error message' }}
        />
      </div>
      <div className='space-y-2' id='password-input-readonly'>
        <HashLink href='#password-input-readonly'>
          <h3 className='text-lg'>Text Input Read Only</h3>
        </HashLink>
        <PasswordInput
          id='input3'
          label='Label'
          helperText='Helper text'
          readOnly
          defaultValue='Default Value'
        />
      </div>
    </section>
  );
}

function TextAreaSection() {
  return (
    <section id='text-area' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#text-area'>
            <h2>Text Area</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/TextArea.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>
      <div className='space-y-2' id='default-textarea'>
        <HashLink href='#default-textarea'>
          <h3 className='text-lg'>Default Text Area</h3>
        </HashLink>
        <TextArea id='textarea' label='Label' helperText='Helper text' />
      </div>

      <div className='space-y-2' id='textarea-required'>
        <HashLink href='#textarea-required'>
          <h3 className='text-lg'>
            Text Area with required validation (onTouched)
          </h3>
        </HashLink>
        <TextArea
          id='textarea2'
          label='Label'
          helperText='Helper text'
          validation={{ required: 'Custom error message' }}
        />
      </div>

      <div className='space-y-2' id='textarea-readonly'>
        <HashLink href='#textarea-readonly'>
          <h3 className='text-lg'>Text Area Read Only</h3>
        </HashLink>
        <TextArea
          id='textarea3'
          label='Label'
          helperText='Helper text'
          readOnly
          defaultValue='Default Value'
        />
      </div>
    </section>
  );
}

function DatePickerSection() {
  return (
    <section id='date-picker' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#date-picker'>
            <h2>DatePicker</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/DatePicker.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>

      <div className='space-y-2' id='default-datepick'>
        <HashLink href='#default-datepick'>
          <h3 className='text-lg'>Default DatePicker</h3>
        </HashLink>
        <DatePicker
          id='datepicker'
          label='Label'
          placeholder='Placeholder'
          helperText='Helper text'
        />
      </div>

      <div className='space-y-2' id='datepicker-defaultyear'>
        <HashLink href='#datepicker-defaultyear'>
          <h3 className='text-lg'>DatePicker with defaultYear to 2001</h3>
        </HashLink>
        <DatePicker
          id='datepicker2'
          label='Label'
          helperText='Helper text'
          defaultYear='2001'
        />
      </div>

      <div className='space-y-2' id='datepicker-defaultmonth'>
        <HashLink href='#datepicker-defaultmonth'>
          <h3 className='text-lg'>DatePicker with defaultMonth to May</h3>
        </HashLink>
        {/* Month starts from 0 */}
        <DatePicker
          id='datepicker2'
          label='Label'
          helperText='Helper text'
          defaultMonth='4'
        />
      </div>

      <div className='space-y-2' id='datepicker-locale'>
        <HashLink href='#datepicker-locale'>
          <h3 className='text-lg'>DatePicker with ID Locale</h3>
        </HashLink>
        {/* import id from date-fns/locale/id */}
        <DatePicker
          id='datepicker3'
          label='Label'
          helperText='Helper text'
          locale={id}
        />
      </div>

      <div className='space-y-2' id='datepicker-required'>
        <HashLink href='#datepicker-required'>
          <h3 className='text-lg'>DatePicker with required validation</h3>
        </HashLink>
        <DatePicker
          id='datepicker4'
          label='Label'
          helperText='Helper text'
          validation={{ required: 'Custom error message' }}
        />
      </div>

      <div className='space-y-2' id='datepicker-readonly'>
        <HashLink href='#datepicker-readonly'>
          <h3 className='text-lg'>DatePicker Read Only</h3>
        </HashLink>
        <DatePicker
          id='datepicker5'
          label='Label'
          helperText='Helper text'
          defaultValue={new Date()}
          readOnly
        />
      </div>
    </section>
  );
}

function SelectSection() {
  return (
    <section id='select-native' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#select-native'>
            <h2>Select (Native)</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/Select.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>

      <div className='space-y-2' id='select-native-normal'>
        <HashLink href='#select-native-normal'>
          <h3 className='text-lg'>Normal Select</h3>
        </HashLink>
        <Select id='select' label='Label' helperText='Helper text'>
          <option disabled selected hidden value=''>
            Placeholder using option composition
          </option>
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </Select>
      </div>
      <div className='space-y-2' id='select-native-required'>
        <HashLink href='#select-native-required'>
          <h3 className='text-lg'>Select with required validation</h3>
        </HashLink>
        <Select
          id='select2'
          label='Label'
          helperText='Helper text'
          placeholder='Placeholder using props'
          validation={{ required: 'Custom error message' }}
        >
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </Select>
      </div>
      <div className='space-y-2' id='select-native-default'>
        <HashLink href='#select-native-default'>
          <h3 className='text-lg'>Select with default value</h3>
        </HashLink>
        <Select
          id='select3'
          label='Label'
          helperText='Helper text'
          placeholder='Placeholder using props'
          defaultValue='Option 3'
        >
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </Select>
      </div>
      <div className='space-y-2' id='select-native-readonly'>
        <HashLink href='#select-native-readonly'>
          <h3 className='text-lg'>Select Read Only</h3>
        </HashLink>
        <Select
          id='select4'
          label='Label'
          helperText='Helper text'
          defaultValue='Option 2'
          readOnly
        >
          <option value='Option 1'>Option 1</option>
          <option value='Option 2'>Option 2</option>
          <option value='Option 3'>Option 3</option>
        </Select>
      </div>
    </section>
  );
}

function DropzoneSection() {
  return (
    <section id='dropzone-input' className='space-y-4'>
      <header className='space-y-1'>
        <div>
          <HashLink href='#dropzone-input'>
            <h2>Dropzone Input</h2>
          </HashLink>
        </div>
        <div>
          <CustomLink
            href='https://github.com/theodorusclarence/rhf-input/blob/main/components/Dropzone.jsx'
            className='inline-block font-medium text-gray-700'
          >
            Component source code
          </CustomLink>
        </div>
      </header>

      <div className='space-y-2' id='dropzone-input-normal'>
        <HashLink href='#dropzone-input-normal'>
          <h3 className='text-lg'>Normal Dropzone Input</h3>
        </HashLink>
        <Dropzone label='Label' id='dropzone1' helperText='Helper text' />
      </div>
      <div className='space-y-2' id='dropzone-input-required'>
        <HashLink href='#dropzone-input-required'>
          <h3 className='text-lg'>Dropzone Input with required validation</h3>
        </HashLink>
        <Dropzone
          label='Label'
          id='dropzone2'
          helperText='Helper text'
          validation={{
            required: 'Custom error message',
          }}
        />
      </div>
      <div className='space-y-2' id='dropzone-input-max-files'>
        <HashLink href='#dropzone-input-max-files'>
          <h3 className='text-lg'>Dropzone Input with max files</h3>
        </HashLink>
        <Dropzone
          label='Label'
          id='dropzone3'
          helperText='You can only drop 3 files here'
          maxFiles={3}
        />
      </div>
      <div className='space-y-2' id='dropzone-input-accept'>
        <HashLink href='#dropzone-input-accept'>
          <h3 className='text-lg'>Dropzone Input with certain accepted file</h3>
        </HashLink>
        <Dropzone
          label='Label'
          id='dropzone4'
          accept='image/png, image/jpg, image/jpeg'
          helperText='You can only drop .jpg, .jpeg, and .png image here'
        />
      </div>
    </section>
  );
}
