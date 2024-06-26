import React, { useReducer, useState } from 'react';
import { Button, Form, Input } from 'antd';
// import {useUsers} from '.../providers/users';
import { useStyles } from "./styles";
import {Register} from '../../providers/RegisterAuth/interface';
import axios from 'axios';
import { useRegisterActions } from '@/providers/RegisterAuth';


export default function RegisterForm(): React.ReactNode {

  const [userDetails, setUserDetails] = useState<Register>({
    name: "",
    surname: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    memberID: ""
  });
  const {Register} = useRegisterActions();
  const { styles, cx } = useStyles();
  const onFinish = async()=>{
    Register(userDetails);
    
  };
  return (
    <Form 
      className={cx(styles.form)} 
      layout="vertical"
      onFinish={onFinish}
      >
      <Form.Item label="FIRST NAME" className={cx(styles.firstNameFormItem)} >
        <Input  className={cx(styles.shortInput)} placeholder='First Name' onChange={(input)=>setUserDetails({...userDetails,name:input.target.value})}/>
      </Form.Item>
      <Form.Item label="LAST NAME" className={cx(styles.lastNameFormItem)} >
        <Input  className={cx(styles.shortInput)} placeholder='Last Name' onChange={(input)=>setUserDetails({...userDetails,surname:input.target.value})} />
      </Form.Item>
      <Form.Item label="EMAIL ADDRESS">
        <Input className={cx(styles.input)} placeholder='Email Address' onChange={(input)=>setUserDetails({...userDetails,emailAddress:input.target.value})} />
      </Form.Item>
      <Form.Item label="PHONE NUMBER">
        <Input className={cx(styles.input)} placeholder='Phone Number' onChange={(input)=>setUserDetails({...userDetails,phoneNumber:input.target.value})} />
      </Form.Item>
      <Form.Item label="MEMBER ID">
        <Input className={cx(styles.input)} placeholder='Member Id' onChange={(input)=>setUserDetails({...userDetails,memberID:input.target.value})}/>
      </Form.Item>
      <Form.Item label="PASSWORD">
        <Input.Password  className={cx(styles.input)} placeholder='Password' onChange={(input)=>setUserDetails({...userDetails,password:input.target.value})}/>
      </Form.Item>
     
      <Form.Item>
        <Button type="primary" htmlType="submit" className={cx(styles.button)}>SIGN UP</Button>
      </Form.Item>
    </Form>
  );
}
