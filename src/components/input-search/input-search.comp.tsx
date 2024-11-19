import { forwardRef } from 'react';
import { InputSearchProps } from './input-search.types';

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ handleSubmit, ...props }, ref) => {
    return (
      <form className="flex w-full" onSubmit={handleSubmit}>
        <input ref={ref} className="w-full text-base p-4 rounded-l-md rounded-r-none border" {...props} />
        <button type="submit" className="p-4 text-base bg-border font-semibold uppercase rounded-r-md rounded-l-none">
          buscar
        </button>
      </form>
    );
  }
);

InputSearch.displayName = 'InputSearch';
