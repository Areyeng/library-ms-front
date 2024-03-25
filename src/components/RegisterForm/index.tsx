import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios, {isCancel, AxiosError} from 'axios';
import { useStyles } from "./styles";

export default function RegisterForm(): React.ReactNode {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: 30,
    email: '',
    roleId: 1,
    occupation: "Developer",
    idNumber:"123456789012",
    passport:"123456033355"
  });
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const createUser = () => {
    axios.post('/api/services/app/Person/CreatePerson', formData)
      .then(response => {
        console.log('User created successfully!', response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch(error => {
        console.error('Error creating user:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  const { styles, cx } = useStyles();

  return (
    <Form className={cx(styles.form)} layout="vertical">
      <Form.Item label="FIRST NAME" className={cx(styles.firstNameFormItem)}>
        <Input name="name" value={formData.name} onChange={handleChange} className={cx(styles.shortInput)} />
      </Form.Item>
      <Form.Item label="LAST NAME" className={cx(styles.lastNameFormItem)}>
        <Input name="surname" value={formData.surname} onChange={handleChange} className={cx(styles.shortInput)} />
      </Form.Item>
      <Form.Item label="EMAIL ADDRESS">
        <Input name="email" value={formData.email} onChange={handleChange} className={cx(styles.input)} />
      </Form.Item>
      <Form.Item label="PASSWORD">
        <Input.Password name="password"  onChange={handleChange} className={cx(styles.input)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={createUser} className={cx(styles.button)}>SIGN UP</Button>
      </Form.Item>
    </Form>
  );
}
