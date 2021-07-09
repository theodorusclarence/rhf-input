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

                <section id='text-area' className='space-y-4'>
                  <HashLink href='#text-area'>
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

                <hr />

                <section id='date-picker' className='space-y-4'>
                  <HashLink href='#date-picker'>
                    <h2>DatePicker</h2>
                  </HashLink>

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
                      <h3 className='text-lg'>
                        DatePicker with defaultYear to 2001
                      </h3>
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
                      <h3 className='text-lg'>
                        DatePicker with defaultMonth to May
                      </h3>
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
                      <h3 className='text-lg'>
                        DatePicker with required validation
                      </h3>
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

                <Button type='submit'>Submit Button (check console)</Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </>
  );
}
