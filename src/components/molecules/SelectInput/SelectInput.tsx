import React, { ComponentProps, useMemo } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { IndexedObject, Lookup } from '50ra4-library';
import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms/I18nText';
import { styled } from '@material-ui/core/styles';

type FormControlProps = ComponentProps<typeof FormControl>;
type PickedFormControlProps = Pick<FormControlProps, 'variant' | 'size' | 'color'>;

type OwnProps = {
  ariaLabel: string;
  selectedId?: string;
  selectedValue?: string;
  options?: Lookup[];
  optionLabels?: IndexedObject<I18nObj>;
  onChange?: (id: string | undefined) => void;
  name?: string;
  label?: I18nObj;
  placeholder?: I18nObj;
  rootClassName?: string;
  optionClassName?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  hasError?: boolean;
  helperText?: string;
  htmlFor?: string;
};
type Props = OwnProps & PickedFormControlProps;

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

// eslint-disable-next-line complexity
export const SelectInput: React.FC<Props> = ({
  selectedId,
  selectedValue,
  onChange,
  name,
  options = [],
  optionLabels = {},
  rootClassName,
  optionClassName,
  label,
  placeholder,
  hasError,
  helperText,
  htmlFor,
  variant,
  size,
  color,
  isRequired,
  isDisabled,
  isReadonly,
}) => {
  const handleOnChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
  ) => {
    if (onChange) {
      const targetValue = event.target.value;
      const targetId = options.find(({ value }) => value === targetValue)?.id;
      onChange(targetId);
    }
  };

  const currentSelectedValue = useMemo(
    () =>
      getSelectedValue({
        selectedId,
        selectedValue,
        options,
      }) ?? '',
    [selectedId, selectedValue, options],
  );

  return (
    <StyledFormControl
      className={rootClassName}
      error={hasError}
      required={isRequired}
      variant={variant}
      size={size}
      color={color}
    >
      {label && (
        <InputLabel id={`select-${name}-label`} htmlFor={htmlFor}>
          <I18nText i18nObj={label} />
        </InputLabel>
      )}
      <Select
        name={name}
        inputProps={{
          name,
          'aria-label': name,
        }}
        id={`select-${name}`}
        labelId={`select-${name}`}
        value={currentSelectedValue}
        onChange={handleOnChange}
      >
        {placeholder && (
          <MenuItem value={''} disabled>
            <I18nText i18nObj={placeholder} />
          </MenuItem>
        )}
        {options.map(({ id, value }) => (
          <MenuItem className={optionClassName} key={id} id={id} value={value} disabled={isDisabled || isReadonly}>
            {optionLabels[id] ? <I18nText i18nObj={optionLabels[id]} /> : value}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)({
  width: '100%',
});
