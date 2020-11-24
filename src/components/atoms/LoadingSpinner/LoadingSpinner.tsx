import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

type Props = {
  isAbsolute?: boolean;
  size?: number | string;
};

const useStyles = makeStyles({
  root: (props: Props) => ({
    position: props.isAbsolute ? 'absolute' : 'fixed',
  }),
});

export const LoadingSpinner: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  return <CircularProgress className={classes.root} size={props.size} />;
};
