import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import { BaseDialog } from '../BaseDialog';
import { InfoDialog as InfoDialogProps, WithLanguageCodeProps } from '../../../../types';
import { closeInfoDialog, infoDialogSelector } from '../../../..';
import { useLanguageCode } from '../../../../hooks/useLanguageCode';
import { DialogContexts } from '../DialogContexts';

type Props = InfoDialogProps & WithLanguageCodeProps;

const useInfoDialog = () => {
  const { languageCode } = useLanguageCode();
  const infoDialogProps = useSelector(infoDialogSelector, shallowEqual);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickClose = useCallback(() => closeInfoDialog(dispatch)(undefined), []);
  return { languageCode, infoDialogProps, onClickClose };
};

export const InfoDialog: React.FC<Props> = ({
  languageCode,
  isShown = false,
  title,
  contexts,
  onClickOK,
  onClickClose,
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

  const buttonChildren = (
    <Button onClick={onOk} variant="contained">
      OK
    </Button>
  );

  return (
    <BaseDialog
      open={isShown}
      onClose={onClose}
      buttonChildren={buttonChildren}
      title={title}
      aria-labelledby="info-dialog"
    >
      <DialogContexts languageCode={languageCode} contexts={contexts} />
    </BaseDialog>
  );
};

export const InfoDialogContainer: React.FC = () => {
  const { infoDialogProps, languageCode, onClickClose } = useInfoDialog();
  return <InfoDialog {...infoDialogProps} languageCode={languageCode} onClickClose={onClickClose} />;
};
