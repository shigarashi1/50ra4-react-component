import React from 'react';
import { ConfirmDialogContainer, InfoDialogContainer, SelectDialogContainer } from '../components/organisms/dialogs';

export const DialogProvider: React.FC = ({ children = null }) => {
  return (
    <>
      {children}
      <InfoDialogContainer />
      <ConfirmDialogContainer />
      <SelectDialogContainer />
    </>
  );
};
