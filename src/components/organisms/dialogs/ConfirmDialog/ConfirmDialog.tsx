import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import { BaseDialog } from '../BaseDialog';
import { ConfirmDialog as ConfirmDialogProps, WithLanguageCodeProps } from '../../../../types';
import { closeConfirmDialog } from '../../../../events';
import { confirmDialogSelector } from '../../../../selectors';
import { useLanguageCode } from '../../../../hooks/useLanguageCode';
import { DialogContexts } from '../DialogContexts';

type Props = ConfirmDialogProps & WithLanguageCodeProps;

const useConfirmDialog = () => {
  const { languageCode } = useLanguageCode();
  const confirmDialogProps = useSelector(confirmDialogSelector, shallowEqual);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickClose = useCallback(() => closeConfirmDialog(dispatch)(undefined), []);
  return { languageCode, confirmDialogProps, onClickClose };
};

export const ConfirmDialog: React.FC<Props> = ({
  languageCode,
  isShown = false,
  title,
  contexts,
  onClickOK,
  onClickClose,
  onClickCancel,
}) => {
  const onClose = () => {
    if (onClickClose) {
      onClickClose();
    }
  };

  const onOk = () => {
    if (onClickOK) {
      onClickOK();
    }
    onClose();
  };

  const onCancel = () => {
    if (onClickCancel) {
      onClickCancel();
    }
    onClose();
  };

  const buttonChildren = (
    <>
      <Button onClick={onCancel} variant="contained" color="secondary">
        Cancel
      </Button>
      <Button onClick={onOk} variant="contained" color="primary">
        OK
      </Button>
    </>
  );

  return (
    <BaseDialog
      open={isShown}
      onClose={onClose}
      buttonChildren={buttonChildren}
      title={title}
      aria-labelledby="confirm-dialog"
    >
      <DialogContexts languageCode={languageCode} contexts={contexts} />
    </BaseDialog>
  );
};

export const ConfirmDialogContainer: React.FC = () => {
  const { confirmDialogProps, languageCode, onClickClose } = useConfirmDialog();
  return <ConfirmDialog {...confirmDialogProps} languageCode={languageCode} onClickClose={onClickClose} />;
};
