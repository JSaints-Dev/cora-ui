import { ReactNode } from 'react';

export type PrivateLayoutProps = {
  children?: ReactNode;
  onLogoClick?: () => void;
  actions?: ReactNode;
}
