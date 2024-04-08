'use client';
import React from 'react';
import { Table, Checkbox } from 'antd';
import {useStyles} from "./styles";

const CheckboxGroup = Checkbox.Group;

interface DataItem {
  key: string;
  category: string;
  options: string[];
}

const data: DataItem[] = [
  {
    key: '1',
    category: 'Format',
    options: ['eBook', 'Print']
  },
  {
    key: '2',
    category: 'Genre',
    options: ['Thriller', 'Fiction', 'Biography']
  },

];

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (text: string, record: DataItem) => (
      <div>
        <p>{record.category}</p>
        <CheckboxGroup options={record.options.map(option => ({ label: option, value: option }))} />
      </div>
    )
  }
];

export default function CheckboxTable() {
    const { styles, cx } = useStyles();
    return (
        <Table
        className={cx(styles.table)}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        showHeader={false}
        />
    );
}
