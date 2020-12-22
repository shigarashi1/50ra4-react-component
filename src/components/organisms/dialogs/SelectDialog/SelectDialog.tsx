import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';

import { BaseDialog } from '../BaseDialog';
import { SelectDialog as SelectDialogProps, WithLanguageCodeProps } from '../../../../types';
import { closeSelectDialog } from '../../../../events';
import { selectDialogSelector } from '../../../../selectors';
import { useLanguageCode } from '../../../../hooks/useLanguageCode';
import { DialogContexts } from '../DialogContexts';

type Props = SelectDialogProps & WithLanguageCodeProps;

const useSelectDialog = () => {
  const { languageCode } = useLanguageCode();
  const selectDialogProps = useSelector(selectDialogSelector, shallowEqual);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClickClose = useCallback(() => closeSelectDialog(dispatch)(undefined), []);
  return { languageCode, selectDialogProps, onClickClose };
};

export const SelectDialog: React.FC<Props> = ({
  languageCode,
  isShown = false,
  title,
  contexts,
  onClickYes,
  onClickNo,
  onClickClose,
}) => {
  const onClose = () => {
    if (onClickClose) {
      onClickClose();
    }
  };

  const onYes = () => {
    if (onClickYes) {
      onClickYes();
    }
    onClose();
  };

  const onNo = () => {
    if (onClickNo) {
      onClickNo();
    }
    onClose();
  };

  const buttonChildren = (
    <>
      <Button onClick={onNo} variant="contained" color="secondary">
        No
      </Button>
      <Button onClick={onYes} variant="contained" color="primary">
        Yes
      </Button>
    </>
  );

  return (
    <BaseDialog
      open={isShown}
      onClose={onClose}
      buttonChildren={buttonChildren}
      title={title}
      aria-labelledby="select-dialog"
    >
      <DialogContexts languageCode={languageCode} contexts={contexts} />
    </BaseDialog>
  );
};

export const SelectDialogContainer: React.FC = () => {
  const { selectDialogProps, languageCode, onClickClose } = useSelectDialog();
  return <SelectDialog {...selectDialogProps} languageCode={languageCode} onClickClose={onClickClose} />;
};
