import { ReactNode } from 'react';

export interface LayoutWrapperInterface {
  children?: ReactNode | ReactNode[];
  startAnimation?: boolean;
  backHandler?: () => void;
  currentStep: number;
}
