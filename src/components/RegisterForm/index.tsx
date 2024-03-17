import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import {useStyles} from "./styles";


export default function RegisterForm(): React.ReactNode{

  const { styles, cx } = useStyles();
  return (
    <Form className={cx(styles.form)} layout={'vertical'}>
    <Form.Item label="FIRST NAME" className={cx(styles.firstNameFormItem)}>
      <Input className={cx(styles.shortInput)}/>
    </Form.Item>
    <Form.Item label="LAST NAME" className={cx(styles.lastNameFormItem)}>
      <Input className={cx(styles.shortInput)}/>
    </Form.Item>
    <Form.Item label="USERNAME">
      <Input className={cx(styles.input)} />
    </Form.Item>
    <Form.Item label="EMAIL ADDRESS">
      <Input className={cx(styles.input)}/>
    </Form.Item>
    <Form.Item label="PASSWORD">
      <Input className={cx(styles.input)}/>
    </Form.Item>
    <Form.Item>
      <Button className={cx(styles.button)} type="primary">SIGN UP</Button>
    </Form.Item>
  </Form>
  
  );
};
