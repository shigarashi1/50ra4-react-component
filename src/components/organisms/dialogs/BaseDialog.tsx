import React, { ComponentProps } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms';

type DialogProps = Omit<
  ComponentProps<typeof Dialog>,
  'children' | 'aria-labelledby' | 'aria-describedby' | 'onClose' | 'title' | 'id'
>;

type Props = DialogProps & {
  id?: string;
  className?: string;
  onClose: () => void;
  'aria-labelledby': string;
  title?: I18nObj;
  buttonChildren?: React.ReactNode;
};

export const BaseDialog: React.FC<Props> = ({
  id,
  className,
  open,
  'aria-labelledby': labeledBy,
  onClose,
  title,
  buttonChildren = null,
  children = null,
  fullWidth = false,
}) => {
  return (
    <Dialog
      id={id}
      className={className}
      open={open}
      onClose={onClose}
      aria-labelledby={labeledBy}
      aria-describedby={labeledBy}
      fullWidth={fullWidth}
    >
      {title && (
        <DialogTitle>
          <I18nText i18nObj={title} />
        </DialogTitle>
      )}
      <DialogContent>{children}</DialogContent>
      <DialogActions>{buttonChildren}</DialogActions>
    </Dialog>
  );
};
