import React, { memo, useMemo } from 'react';
import styled from 'styled-components';
import { shallowEqual, useSelector } from 'react-redux';
import MaterialTable, { Column, MaterialTableProps } from 'material-table';
import { ObjectType, PromiseType, toPairs, isUndefined, omit } from '50ra4-library';

import { I18nText } from '../../atoms/I18nText/I18nText';
import { I18nObj, LanguageCode } from '../../../types';
import { languageCodeSelector } from '../../..';

// Editable Action
type MaterialTableEditableProps<T extends ObjectType> = Required<MaterialTableProps<T>>['editable'];
type EditableActionKey = 'onRowAdd' | 'onRowUpdate' | 'onRowDelete';
type EditableAction<T extends ObjectType> = Pick<Required<MaterialTableEditableProps<T>>, EditableActionKey>;
type EditableActionProps<T extends ObjectType> = {
  [K in keyof EditableAction<T>]?: (
    ...args: Parameters<EditableAction<T>[K]>
  ) => PromiseType<ReturnType<EditableAction<T>[K]>>;
};
// Column
type ColumnCustomConfig = {
  title: I18nObj;
  lookup?: ObjectType<string, string>;
};
type ColumnConfigProps<T extends ObjectType> = Omit<Column<T>, 'field' | keyof ColumnCustomConfig> & ColumnCustomConfig;
export type EditableTableColumnConfig<T extends ObjectType> = Record<keyof T, ColumnConfigProps<T>>;

export type EditableTableProps<T extends ObjectType> = {
  className?: string;
  title: I18nObj;
  data: T[];
  columnConfig: EditableTableColumnConfig<T>;
} & EditableActionProps<T>;

const toColumns = <T extends ObjectType>(
  columnConfig: EditableTableColumnConfig<T>,
  languageCode: LanguageCode,
): Column<T>[] =>
  toPairs(columnConfig).reduce(
    (acc, [key, config]) => [
      ...acc,
      {
        ...config,
        field: key,
        title: config.title[languageCode] ?? config.title.jp,
      },
    ],
    [] as Column<T>[],
  );
const toPromise = <T extends ReadonlyArray<unknown>, U>(fn: (...args: T) => U) => (...args: T) =>
  new Promise<ReturnType<typeof fn>>((res) => res(fn(...args)));
const toEditable = <T extends ObjectType>(actionProps: EditableActionProps<T>): Partial<EditableAction<T>> => {
  const { onRowAdd, onRowUpdate, onRowDelete } = actionProps;
  const editable = {
    onRowAdd: onRowAdd ? toPromise(onRowAdd) : undefined,
    onRowUpdate: onRowUpdate ? toPromise(onRowUpdate) : undefined,
    onRowDelete: onRowDelete ? toPromise(onRowDelete) : undefined,
  };
  const undefinedKeys = toPairs(editable)
    .filter(([_, value]) => isUndefined(value))
    .map(([key]) => key);
  return omit(undefinedKeys, editable);
};

const Component = <T extends ObjectType>(props: EditableTableProps<T>) => {
  const languageCode = useSelector(languageCodeSelector, shallowEqual);
  const { className, data, columnConfig, onRowAdd, onRowUpdate, onRowDelete } = props;
  const title = useMemo(() => <I18nText languageCode={languageCode} i18nObj={props.title} />, [
    props.title,
    languageCode,
  ]);
  const columns = useMemo(() => toColumns(columnConfig, languageCode), [columnConfig, languageCode]);
  const editable = useMemo(() => toEditable({ onRowAdd, onRowUpdate, onRowDelete }), [
    onRowAdd,
    onRowUpdate,
    onRowDelete,
  ]);
  return (
    <StyledRoot className={className}>
      <MaterialTable title={title} data={data} columns={columns} editable={editable} />
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
`;

export const EditableTable = memo(Component) as typeof Component;
