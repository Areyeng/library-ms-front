import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import {useStyles} from "./styles";


export default function LoginForm(): React.ReactNode{

  const { styles, cx } = useStyles();
  return (
    <Form className={cx(styles.form)} layout={'vertical'}>
      <Form.Item label="EMAIL ADDRESS">
        <Input className={cx(styles.input)}/>
      </Form.Item>
      <Form.Item label="PASSWORD">
        <Input className={cx(styles.input)}/>
      </Form.Item>
      <Form.Item>
        <Button className={cx(styles.button)} type="primary">LOGIN</Button>
      </Form.Item>
    </Form>
  );
};
