import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms/I18nText';

type TProps = {
  label: I18nObj;
  // isParallel?: boolean;
};

export const WithLabel: React.FC<TProps> = ({ label, children }) => {
  return (
    <div>
      <List>
        <ListItem>
          <Typography variant="body1" color="inherit">
            <I18nText i18nObj={label} />
          </Typography>
        </ListItem>
        <ListItem alignItems="flex-start">{children}</ListItem>
      </List>
    </div>
  );
};
