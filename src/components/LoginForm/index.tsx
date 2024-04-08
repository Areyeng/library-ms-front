import React, { useState } from 'react';
import Link from "next/link";
import { Button, Form, Input, Radio, message } from 'antd';
import {useStyles} from "./styles";
import { useAuthActions,useAuthState } from '@/providers/AuthProvider/index';
import { Details } from '@/providers/AuthProvider/interface';

export default function LoginForm(): React.ReactNode{
  const {login} =useAuthActions();
  const [details,setDetails]=useState<Details>({
    userNameOrEmailAddress: "",
    password: ""
  });
  const { styles, cx } = useStyles();
  let authToken: string | null;
  const onFinish = async()=>{
    try{
        login(details);
        authToken=localStorage.getItem("token");
    }catch{
        message.error("Unsuccessful login")
    }
  };
  return (
    <Form 
      className={cx(styles.form)} 
      layout={'vertical'}
      onFinish={onFinish}
      >
      <Form.Item label="EMAIL ADDRESS">
        <Input className={cx(styles.input)} placeholder='Email Address' onChange={(input)=>setDetails({...details,userNameOrEmailAddress:input.target.value})}/>
      </Form.Item>
      <Form.Item label="PASSWORD">
        <Input.Password className={cx(styles.input)} placeholder='Password' onChange={(input)=>setDetails({...details,password:input.target.value})} />
      </Form.Item>
      <Form.Item>
        <Button className={cx(styles.button)} htmlType="submit" type="primary">LOGIN</Button>
        <div className={cx(styles.register)}><p>Not registered yet?<Link href="/register"> Create an account</Link></p></div>
      </Form.Item>
    </Form>
  );
};
