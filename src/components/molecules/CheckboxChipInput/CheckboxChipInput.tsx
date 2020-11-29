import React, { ComponentProps, useCallback, useMemo } from 'react';

import styled from 'styled-components';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Chip from '@material-ui/core/Chip';
import FormHelperText from '@material-ui/core/FormHelperText';

import { IndexedObject, Lookup } from '50ra4-library';
import { I18nObj } from '../../../types';
import { I18nText } from '../../atoms';

type ChipProps = ComponentProps<typeof Chip>;
type PickedChipProps = Pick<ChipProps, 'variant' | 'size'>;
type Color = Exclude<ChipProps['color'], 'default'>;

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
  color?: Color;
};
type Props = OwnProps & PickedChipProps;

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

export const CheckboxChipInput: React.FC<Props> = ({
  selectedIds,
  selectedValues,
  onChange,
  rootClassName,
  labelClassName,
  ariaLabel,
  label,
  hasError,
  helperText,
  isRequired,
  isDisabled,
  isReadonly,
  color = 'primary',
  variant,
  size,
  isRow = true,
  options = [],
  checkboxLabels = {},
}) => {
  const currentSelectedIds = useMemo(() => toSelectedIds({ selectedIds, selectedValues, options }), [
    selectedIds,
    selectedValues,
    options,
  ]);

  const disabled = !!isDisabled || !!isReadonly;
  const hasChecked = useCallback((id: string) => currentSelectedIds.includes(id) ?? false, [currentSelectedIds]);

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onChange) {
      const targetId = event.currentTarget.id;
      const hasCheckedTarget = hasChecked(targetId);
      const ids = !hasCheckedTarget
        ? [...currentSelectedIds, targetId]
        : currentSelectedIds.filter((id) => id !== targetId);
      onChange(ids);
    }
  };
  return (
    <FormControl className={rootClassName} required={isRequired} error={hasError} component="fieldset">
      {label && (
        <FormLabel component="legend" className={labelClassName}>
          <I18nText i18nObj={label} />
        </FormLabel>
      )}
      <StyledFormGroup aria-label={ariaLabel} row={isRow}>
        {options.map(({ id, value }) => (
          <Chip
            key={id}
            id={id}
            onClick={handleOnClick}
            color={hasChecked(id) ? color : 'default'}
            size={size}
            variant={variant}
            label={checkboxLabels[id] ? <I18nText i18nObj={checkboxLabels[id]} /> : value}
            clickable={!disabled}
            disabled={disabled}
          />
        ))}
      </StyledFormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

const StyledFormGroup = styled(FormGroup)`
  & > div {
    margin: 3px;
  }
`;
