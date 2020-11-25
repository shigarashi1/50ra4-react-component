import React, { useCallback, useState } from 'react';
import { EditableTable, EditableTableProps, EditableTableColumnConfig } from './EditableTable';

import { createStoryMeta, createStoryTemplate, withReduxProvider } from '../../../utils/storybook';

type Sample = {
  id: string;
  name: string;
  age: number;
  sex: string;
};

const SAMPLE_TITLE = {
  jp: 'ホゲホゲ',
  en: 'hogehoge',
};

const SAMPLE_DATA: Sample[] = [
  {
    id: '1',
    name: 'john',
    age: 22,
    sex: '1',
  },
  {
    id: '2',
    name: 'apple star',
    age: 22,
    sex: '2',
  },
];

const COLUMN_CONFIG: EditableTableColumnConfig<Sample> = {
  id: {
    title: { jp: 'ID' },
  },
  name: {
    title: { jp: '名前', en: 'Name' },
  },
  age: {
    title: { jp: '年齢', en: 'Age' },
  },
  sex: {
    title: { jp: '性別', en: 'Sex' },
    lookup: {
      '1': 'MEN',
      '2': 'WOMEN',
    },
  },
};

type Props = EditableTableProps<Sample>;
const Component: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState(SAMPLE_DATA);
  const onRowAdd = useCallback(
    (v: Sample) => {
      setData([...data, v]);
    },
    [setData, data],
  );
  const onRowUpdate = useCallback(
    (v: Sample) => {
      const newData = data.map((d) => (d.id !== v.id ? d : v));
      setData([...newData]);
    },
    [setData, data],
  );
  const onRowDelete = useCallback(
    (v: Sample) => {
      const newData = data.filter(({ id }) => id !== v.id);
      setData([...newData]);
    },
    [setData, data],
  );
  return (
    <EditableTable<Sample>
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
  title: SAMPLE_TITLE,
  columnConfig: COLUMN_CONFIG,
};

const Template = createStoryTemplate(Component);

export const Default = Template.bind({});
Default.args = {
  ...DefaultProps,
};
