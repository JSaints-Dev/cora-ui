import { Logo } from '../logo';
import { PrivateLayoutProps } from './private-layout.types';

export function PrivateLayout({children, onLogoClick, actions}: PrivateLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className='flex w-full bg-brand-primary h-16 justify-center'>
        <div className='flex items-center w-full justify-between px-5 max-w-screen-lg'>
          <div data-logo-click={onLogoClick} className='py-2 w-28 data-[logo-click]:cursor-pointer'>
            <Logo variant='full'/>
          </div>
          {actions}
        </div>
      </div>
      <main className="flex-1 overflow-y-auto bg-background">
        {children}
      </main>
    </div>
  );
}
