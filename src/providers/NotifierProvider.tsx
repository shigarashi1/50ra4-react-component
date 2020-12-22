import React, { ComponentProps, useMemo } from 'react';
import { SnackbarProvider } from 'notistack';

import { useNotifier } from '../hooks/useNotifier';

type Props = ComponentProps<typeof SnackbarProvider>;

const Notifier: React.FC = () => {
  useNotifier();
  return null;
};

export const NotifierProvider: React.FC<Props> = ({
  children = null,
  maxSnack = 5,
  preventDuplicate = false,
  ...rest
}) => {
  const notifier = useMemo(() => <Notifier />, []);
  return (
    <SnackbarProvider {...rest} maxSnack={maxSnack} preventDuplicate={preventDuplicate}>
      {children}
      {notifier}
    </SnackbarProvider>
  );
};
