import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Seo from '@/components/Seo';
import Input from '@/components/Input';
import Button from '@/components/Button';
import HashLink from '@/components/HashLink';
import TextArea from '@/components/TextArea';

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
            <h1>List of Inputs</h1>

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-sm mt-12 space-y-12'
              >
                <section id='text-input' className='space-y-4'>
                  <HashLink href='#text-input'>
                    <h2>Text Input</h2>
                  </HashLink>
                  <div className='space-y-2' id='text-input-normal'>
                    <HashLink href='#normal-input'>
                      <h3 className='text-lg'>Normal Text Input</h3>
                    </HashLink>
                    <Input id='input' label='Label' helperText='Helper text' />
                  </div>
                  <div className='space-y-2' id='text-input-required'>
                    <HashLink href='#input-required'>
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

                <hr />

                <section id='text-input' className='space-y-4'>
                  <HashLink href='#text-input'>
                    <h2>Text Area</h2>
                  </HashLink>
                  <div className='space-y-2' id='default-textarea'>
                    <HashLink href='#default-textarea'>
                      <h3 className='text-lg'>Default Text Area</h3>
                    </HashLink>
                    <TextArea
                      id='textarea'
                      label='Label'
                      helperText='Helper text'
                    />
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

                <Button type='submit'>Submit Button</Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </>
  );
}
