import { Children, cloneElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

import { classNames } from '@/lib/helper';

// ? For readonly, add this to css
/*
select[readonly] option,
select[readonly] optgroup {
  display: none;
}
*/

export default function Select({
  label,
  helperText,
  id,
  placeholder,
  readOnly = false,
  children,
  validation,
  ...rest
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // Add disabled and selected attribute to option, will be used if readonly
  const readOnlyChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      disabled: child.props.value !== rest?.defaultValue,
      selected: child.props.value === rest?.defaultValue,
    });
  });

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-normal text-gray-700'>
        {label}
      </label>
      <div className='relative mt-1'>
        <select
          {...register(id, validation)}
          // defaultValue to value blank, will get overriden by ...rest if needed
          defaultValue=''
          {...rest}
          name={id}
          id={id}
          className={classNames(
            errors[id]
              ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
              : 'focus:ring-primary-500 border-gray-300 focus:border-primary-500',
            'block w-full rounded-md shadow-sm'
          )}
          aria-describedby={id}
        >
          {placeholder && (
            <option value='' disabled hidden>
              {placeholder}
            </option>
          )}
          {readOnly ? readOnlyChildren : children}
        </select>

        {errors[id] && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
            <HiExclamationCircle className='text-xl text-red-500' />
          </div>
        )}
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {errors[id] && (
          <span className='text-sm text-red-500'>{errors[id].message}</span>
        )}
      </div>
    </div>
  );
}
