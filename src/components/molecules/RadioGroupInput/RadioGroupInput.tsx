import React, { ComponentProps, useMemo } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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
  radioLabels?: IndexedObject<I18nObj>;
  onChange?: (id: string) => void;
  isRow?: boolean;
  rootClassName?: string;
  labelClassName?: string;
  label?: I18nObj;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  hasError?: boolean;
  helperText?: string;
};
type Props = OwnProps & PickedRadioProps & PickedRadioGroupProps & PickedFormControlLabelProps;

const getSelectedValue = ({
  selectedId,
  selectedValue,
  options = [],
}: Pick<OwnProps, 'selectedId' | 'selectedValue' | 'options'>): string | undefined => {
  if (!selectedId) {
    return selectedValue;
  }
  return options.find(({ id }) => id === selectedId)?.value;
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
  radioLabels = {},
  label,
  hasError,
  helperText,
  isRequired,
  isDisabled,
  isReadonly,
}) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const currentId = event.currentTarget.id;
      onChange(currentId);
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
    <FormControl className={rootClassName} component="fieldset" error={hasError} required={isRequired}>
      {label && (
        <FormLabel component="legend">
          <I18nText i18nObj={label} />
        </FormLabel>
      )}
      <RadioGroup name={name} value={_selectedValue} row={isRow} aria-label={ariaLabel} onChange={handleOnChange}>
        {options.map(({ id, value }) => (
          <FormControlLabel
            className={labelClassName}
            key={id}
            id={id}
            value={value}
            control={<Radio id={id} color={radioColor} disabled={isDisabled || isReadonly} />}
            label={radioLabels[id] ? <I18nText i18nObj={radioLabels[id]} /> : value}
            labelPlacement={labelPlacement}
          />
        ))}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
