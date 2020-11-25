import React, { ComponentProps, useMemo } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { IndexedObject, Lookup } from '50ra4-library';
import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms';

type RadioProps = ComponentProps<typeof Radio>;
type PickedRadioProps = {
  radioColor?: RadioProps['color'];
};
type RadioGroupProps = ComponentProps<typeof RadioGroup>;
type PickedRadioGroupProps = Pick<RadioGroupProps, 'name'>;
type FormControlLabelProps = ComponentProps<typeof FormControlLabel>;
type PickedFormControlLabelProps = Pick<FormControlLabelProps, 'labelPlacement'>;

type OwnProps = {
  ariaLabel: string;
  selectedId?: string;
  selectedValue?: string;
  options?: Lookup[];
  labels?: IndexedObject<I18nObj>;
  onChange?: (id: string | undefined) => void;
  isRow?: boolean;
  rootClassName?: string;
  labelClassName?: string;
};
type Props = OwnProps & PickedRadioProps & PickedRadioGroupProps & PickedFormControlLabelProps;

const getSelectedValue = (props: Pick<OwnProps, 'selectedId' | 'selectedValue' | 'options'>): string | undefined => {
  if (!props.selectedId) {
    return props.selectedValue;
  }
  return props.options?.find(({ id }) => id === props.selectedId)?.value;
};

export const RadioGroupInput: React.FC<Props> = ({
  selectedId,
  selectedValue,
  onChange,
  rootClassName,
  labelClassName,
  name,
  labelPlacement,
  ariaLabel,
  radioColor,
  isRow = true,
  options = [],
  labels = {},
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const currentValue = event.currentTarget.value;
      const id = options?.find(({ value }) => value === currentValue)?.id;
      onChange(id);
    }
  };
  const _selectedValue = useMemo(
    () =>
      getSelectedValue({
        selectedId,
        selectedValue,
        options,
      }),
    [selectedId, selectedValue, options],
  );
  return (
    <RadioGroup
      className={rootClassName}
      name={name}
      value={_selectedValue}
      row={isRow}
      aria-label={ariaLabel}
      onChange={handleOnChange}
    >
      {options.map(({ id, value }) => (
        <FormControlLabel
          className={labelClassName}
          key={id}
          id={id}
          value={value}
          control={<Radio color={radioColor} />}
          label={labels[id] ? <I18nText i18nObj={labels[id]} /> : value}
          labelPlacement={labelPlacement}
        />
      ))}
    </RadioGroup>
  );
};
