import React, { ComponentProps, useCallback } from 'react';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import isValid from 'date-fns/isValid';

type BaseProps = ComponentProps<typeof KeyboardDatePicker>;
type ExtendsProps = {
  value: Date;
  onChange: (date: Date) => void;
  initialDate?: Date;
};
type Props = Omit<BaseProps, keyof ExtendsProps> & ExtendsProps;
type OnChangeParameters = Parameters<BaseProps['onChange']>;

const getValidDate = (initialDate: Date, ...params: OnChangeParameters): Date => {
  const [date] = params;
  if (!!date && isValid(date)) {
    return date;
  }
  return initialDate;
};

export const InputDate: React.FC<Props> = ({
  value, //
  onChange,
  format = 'yyyy-MM-dd',
  initialDate = new Date(),
  ...props
}) => {
  const onChangeDate = useCallback((...params: OnChangeParameters) => onChange(getValidDate(initialDate, ...params)), [
    initialDate,
    onChange,
  ]);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        format={format}
        KeyboardButtonProps={{
          'aria-label': 'pickers-date-input',
        }}
        mask="____-__-__"
        onChange={onChangeDate}
        value={value}
      />
    </MuiPickersUtilsProvider>
  );
};
