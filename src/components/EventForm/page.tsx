'use client'
import { useBookActions } from "@/providers/BookProvider";
import { BookDetails } from "@/providers/BookProvider/interface";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Modal } from 'antd';
import { EventDetails } from "@/providers/EventProvider/interface";
import { useEventActions } from "@/providers/EventProvider";


export default function EventForm(): React.ReactNode {
    const [eventDetails, setEventDetails] = useState<EventDetails>({
       name: '',
       description: '',
       eventDate: new Date,
       location: ''
      });
      const [isModalVisible, setIsModalVisible] = useState(false);

      const showModal = () => {
          setIsModalVisible(true);
      };
  
      const handleCancel = () => {
          setIsModalVisible(false);
      };
      const {AddEvent} = useEventActions();
      const onFinish = async()=>{
        AddEvent(eventDetails);
      };
    return(
        <>
        <Button type="primary" onClick={showModal}>
            Add Event
        </Button>
        <Modal
            title="Add Event"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
        >
        <Form 
        layout="vertical"
        onFinish={onFinish}
        >
        <Form.Item label="Name">
          <Input  placeholder='Name' onChange={(input)=>setEventDetails({...eventDetails,name:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Description">
          <Input  placeholder='Description' onChange={(input)=>setEventDetails({...eventDetails,description:input.target.value})} />
        </Form.Item>
        <Form.Item label="Event Date">
          <Input  type="date" placeholder='Event Date' onChange={(input)=>setEventDetails({...eventDetails,eventDate:input.target.value})} />
        </Form.Item>
        <Form.Item label="Location">
          <Input placeholder='Location' onChange={(input)=>setEventDetails({...eventDetails,location:input.target.value})}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >Add Event</Button>
        </Form.Item>
      </Form>
      </Modal>
        </>
    );
}