import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

import { HiX } from 'react-icons/hi';

import { classNames } from '@/lib/helper';

const FilePreview = ({ file, deleteFile }) => {
  return (
    <div key={file.name} className='relative aspect-w-3 aspect-h-2'>
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        className='object-cover rounded-lg shadow-lg'
      />
      <button
        onClick={(e) => deleteFile(e, file)}
        className='absolute top-0 right-0 flex p-2 leading-none'
      >
        <HiX size={24} className='text-red-500 cursor-pointer' />
      </button>
    </div>
  );
};

export default function DragnDropInput({
  accept,
  id,
  label,
  helperText = '',
  maxFiles = 1,
  validation,
}) {
  const {
    register,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useFormContext();

  const files = watch(id);
  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, []);
        setError(id, {
          type: 'manual',
          message: rejectedFiles && rejectedFiles[0].errors[0].message,
        });
      } else {
        setValue(id, acceptedFiles, { shouldValidate: true });
        clearErrors(id);
      }
    },
    [id, setValue, setError, clearErrors]
  );

  const deleteFile = (e, file) => {
    e.preventDefault();
    const newFiles = [...files];

    newFiles.splice(newFiles.indexOf(file), 1);

    if (newFiles.length > 0) {
      setValue(id, newFiles);
    } else {
      setValue(id, []);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
  });

  return (
    <>
      <label className='block text-sm font-normal text-gray-700' htmlFor={id}>
        {label}
      </label>

      {files?.length >= maxFiles ? (
        <div className='grid grid-cols-1 gap-2 mt-1'>
          {files.map((file) => (
            <FilePreview key={file} file={file} deleteFile={deleteFile} />
          ))}
        </div>
      ) : (
        <>
          <div className='mt-1' {...getRootProps()}>
            <input {...register(id, validation)} id={id} {...getInputProps()} />
            <div
              className={classNames(
                'w-full p-2 bg-gray-100 border border-gray-300 border-dashed rounded cursor-pointer',
                errors[id]
                  ? 'focus:ring-red-500 border-red-500 focus:border-red-500'
                  : 'focus:ring-dark-400 focus:border-dark-400'
              )}
            >
              <p className='my-20 text-center text-gray-500'>
                Drag &apos;n&apos; drop some files here, or click to select
                files
              </p>

              {!!files?.length && (
                <div className='grid grid-cols-1 gap-1 mt-2'>
                  {files.map((file) => (
                    <FilePreview
                      key={file}
                      file={file}
                      deleteFile={deleteFile}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className='mt-1'>
            {helperText !== '' && (
              <p className='text-xs text-gray-500'>{helperText}</p>
            )}
            {errors[id] && (
              <p className='text-sm text-red-500'>{errors[id].message}</p>
            )}
          </div>
        </>
      )}
    </>
  );
}
