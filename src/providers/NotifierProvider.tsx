import React, { ComponentProps } from 'react';
import { SnackbarProvider } from 'notistack';

import { useNotifier } from '../hooks';

type Props = ComponentProps<typeof SnackbarProvider>;

export const NotifierProvider: React.FC<Props> = ({
  children = null,
  maxSnack = 5,
  preventDuplicate = false,
  ...rest
}) => {
  useNotifier();
  return (
    <SnackbarProvider {...rest} maxSnack={maxSnack} preventDuplicate={preventDuplicate}>
      {children}
    </SnackbarProvider>
  );
};
