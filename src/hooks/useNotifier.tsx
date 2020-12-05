import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useSnackbar, CloseReason } from 'notistack';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { dismissSnackbar, notifierSelector, enqueueSnackbar as enqueueSnackbarState } from '../store';
import { Notifier } from '../types';

const toNotifierProps = (id: string, option: Notifier['option'], dismiss: (id: string) => void) => {
  const onDismiss = (id: string) => () => dismiss(id);
  return {
    key: id,
    variant: option?.variant || 'default',
    autoHideDuration: option?.autoHideDuration || 2000,
    onClose: (event: React.SyntheticEvent<unknown> | null, reason: CloseReason) => {
      if (option?.onClose) {
        option.onClose(event, reason, id);
      }
    },
    onExit: (_: unknown) => {
      dismiss(id);
    },
    action: (_: unknown) => <Button onClick={onDismiss(id)}>OK</Button>,
  };
};

/**
 * NOTE: Call only one times
 */
export const useNotifier = () => {
  const [displayedIds, setDisplayedIds] = useState<string[]>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const notifierState = useSelector(notifierSelector, shallowEqual);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dismiss = useCallback(dismissSnackbar(dispatch), []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const enqueue = useCallback(enqueueSnackbarState(dispatch), []);

  useEffect(() => {
    notifierState.forEach(({ id, message, hasDismissed, option }) => {
      if (hasDismissed) {
        closeSnackbar(id);
        return;
      }

      // Do nothing if snackbar is already displayed
      if (displayedIds.includes(id)) {
        return;
      }

      // Keep track of snackbar that we've displayed
      setDisplayedIds([...displayedIds, id]);

      // Display snackbar using notistack
      enqueueSnackbar(message, toNotifierProps(id, option, dismiss));
    });
    // NOTE: execute only when notifierState was updated
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifierState]);

  return { __enqueueSnackbar: enqueue };
};
