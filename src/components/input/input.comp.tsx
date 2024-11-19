import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from './input.types';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error,variant='default', ...props }, ref) => {
    return (
      <div className="flex w-full flex-col align-top">
        {label && (
          <label
            className={cn(
              'text-sm text-primary mx-3 mb-1',
              variant === 'white' && 'text-secondary',
            )}>
            {label}
          </label>
        )}
        <input
          type={type}
          data-error={!!error}
          className={cn(
            'flex h-16 w-96 rounded-2xl border border-input data-[error=true]:border-destructive bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            variant === 'white' && 'bg-input',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p
            data-error={!!error}
            className={
              cn(
                'text-sm mx-3 mt-1 text-destructive',
                variant === 'white' && 'text-secondary',
              )
            }>
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
