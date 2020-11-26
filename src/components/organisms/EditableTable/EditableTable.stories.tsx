import React, { useCallback, useState } from 'react';
import { EditableTable, EditableTableProps, EditableTableColumnConfig } from './EditableTable';

import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';
import { toPairs } from '50ra4-library';
import { COLOR_NAME_MASTER, FruitData, FRUIT_DATA } from '../../../mocks';

const COLUMN_CONFIG: EditableTableColumnConfig<FruitData> = {
  id: {
    title: { jp: 'ID' },
  },
  name: {
    title: { jp: '名前', en: 'Name' },
  },
  weight: {
    title: { jp: '重量', en: 'Weight' },
  },
  color: {
    title: { jp: '色', en: 'Color' },
    lookup: Object.fromEntries(toPairs(COLOR_NAME_MASTER).map(([key, value]) => [key, value.jp])),
  },
};

type Props = EditableTableProps<FruitData>;
const Component: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState(FRUIT_DATA);
  const onRowAdd = useCallback(
    (v: FruitData) => {
      setData([...data, v]);
    },
    [setData, data],
  );
  const onRowUpdate = useCallback(
    (v: FruitData) => {
      const newData = data.map((d) => (d.id !== v.id ? d : v));
      setData([...newData]);
    },
    [setData, data],
  );
  const onRowDelete = useCallback(
    (v: FruitData) => {
      const newData = data.filter(({ id }) => id !== v.id);
      setData([...newData]);
    },
    [setData, data],
  );
  return (
    <EditableTable<FruitData>
      {...props}
      data={data}
      onRowAdd={onRowAdd}
      onRowUpdate={onRowUpdate}
      onRowDelete={onRowDelete}
    />
  );
};

export default createStoryMeta(EditableTable, {
  title: 'Organisms/EditableTable',
  decorators: [withReduxProvider],
});
const DefaultProps: Partial<Props> = {
  title: {
    jp: '果物一覧',
    en: 'Fruit List',
  },
  columnConfig: COLUMN_CONFIG,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
