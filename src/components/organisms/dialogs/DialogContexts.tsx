import React, { useMemo } from 'react';

import Typography from '@material-ui/core/Typography';

import { I18nObj, WithLanguageCodeProps } from '../../../types';
import { i18nObj2string, splitByLineFeedStrings } from '../../../utils';

type Props = WithLanguageCodeProps & {
  contexts?: I18nObj;
};

export const DialogContexts: React.FC<Props> = ({ languageCode, contexts }) => {
  const text = useMemo(() => i18nObj2string(languageCode, contexts), [contexts, languageCode]);
  return (
    <>
      {splitByLineFeedStrings(text).map((elm, index) => (
        <Typography key={`DialogContexts-${index}`} variant="h6" gutterBottom={true}>
          {elm}
        </Typography>
      ))}
    </>
  );
};
