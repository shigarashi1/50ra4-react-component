import React, { ComponentProps, useMemo } from 'react';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import { IndexedObject, Lookup } from '50ra4-library';
import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms';

type CheckboxProps = ComponentProps<typeof Checkbox>;
type PickedCheckboxProps = {
  checkboxColor?: CheckboxProps['color'];
};
type FormControlLabelProps = ComponentProps<typeof FormControlLabel>;
type PickedFormControlLabelProps = Pick<FormControlLabelProps, 'labelPlacement'>;

type OwnProps = {
  ariaLabel: string;
  selectedIds?: string[];
  selectedValues?: string[];
  options?: Lookup[];
  label?: I18nObj;
  checkboxLabels?: IndexedObject<I18nObj>;
  onChange?: (ids?: string[]) => void;
  isRow?: boolean;
  rootClassName?: string;
  labelClassName?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  hasError?: boolean;
  helperText?: string;
};
type Props = OwnProps & PickedCheckboxProps & PickedFormControlLabelProps;

const toSelectedIds = ({
  selectedIds,
  selectedValues = [],
  options = [],
}: Pick<OwnProps, 'selectedIds' | 'selectedValues' | 'options'>): string[] => {
  if (selectedIds) {
    return selectedIds;
  }
  return options.filter(({ value }) => selectedValues.includes(value)).map(({ id }) => id) ?? [];
};

export const CheckboxGroupInput: React.FC<Props> = ({
  selectedIds,
  selectedValues,
  onChange,
  rootClassName,
  labelClassName,
  labelPlacement,
  ariaLabel,
  checkboxColor,
  label,
  hasError,
  helperText,
  isRequired,
  isDisabled,
  isReadonly,
  isRow = true,
  options = [],
  checkboxLabels = {},
}) => {
  const currentSelectedIds = useMemo(() => toSelectedIds({ selectedIds, selectedValues, options }), [
    selectedIds,
    selectedValues,
    options,
  ]);

  const hasChecked = (id: string) => currentSelectedIds.includes(id) ?? false;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const targetId = event.currentTarget.id;
      const hasCheckedTarget = event.currentTarget.checked;
      const ids = hasCheckedTarget
        ? [...currentSelectedIds, targetId]
        : currentSelectedIds.filter((id) => id !== targetId);
      onChange(ids);
    }
  };
  return (
    <FormControl className={rootClassName} required={isRequired} error={hasError} component="fieldset">
      {label && (
        <FormLabel component="legend">
          <I18nText i18nObj={label} />
        </FormLabel>
      )}
      <FormGroup aria-label={ariaLabel} row={isRow}>
        {options.map(({ id, value }) => (
          <FormControlLabel
            key={id}
            id={id}
            value={value}
            className={labelClassName}
            label={checkboxLabels[id] ? <I18nText i18nObj={checkboxLabels[id]} /> : value}
            labelPlacement={labelPlacement}
            control={
              <Checkbox
                color={checkboxColor}
                id={id}
                name={value}
                value={value}
                disabled={isDisabled || isReadonly}
                inputProps={{ 'aria-label': `checkbox ${value}` }}
                onChange={handleOnChange}
                checked={hasChecked(id)}
              />
            }
          />
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
