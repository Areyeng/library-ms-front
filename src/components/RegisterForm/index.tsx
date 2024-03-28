import React, { useReducer, useState } from 'react';
import { Button, Form, Input } from 'antd';
// import {useUsers} from '.../providers/users';
import { useStyles } from "./styles";
import {Register} from '../../providers/RegisterAuth/interface';
import axios from 'axios';
import { useRegisterActions } from '@/providers/RegisterAuth';


export default function RegisterForm(): React.ReactNode {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   surname: '',
  //   age: 30,
  //   email: '',
  //   roleId: 1,
  //   occupation: "Developer",
  //   idNumber:"123456789012",
  //   passport:"123456033355"
  // });
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
  const onFinish = async()=>{//value must inherit IUser
    try{
      
      console.log("Details before await: ",userDetails);
       Register(userDetails);
       console.log("D: ",userDetails);

      
    }catch{

    }
    
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
      <Form.Item label="PASSWORD">
        <Input.Password  className={cx(styles.input)} placeholder='Password' onChange={(input)=>setUserDetails({...userDetails,password:input.target.value})}/>
      </Form.Item>
      <Form.Item label="Member ID">
        <Input.Password  className={cx(styles.input)} placeholder='Member Id' onChange={(input)=>setUserDetails({...userDetails,memberID:input.target.value})}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={cx(styles.button)}>SIGN UP</Button>
      </Form.Item>
    </Form>
  );
}
