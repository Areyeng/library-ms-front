'use client'
import { useBookAction, useBookActions } from "@/providers/BookProviders";
import { BookDetails } from "@/providers/BookProvider/interface";
import { Button, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { Modal } from 'antd';
import { IBook } from "@/providers/BookProviders/context";
import { BookActionsContext } from "@/providers/BookProvider/context";


export default function BookFormEdit({record,hideModal,isModalVisible,updateDetails}): React.ReactNode {
    const [bookDetails, setBookDetails] = useState<BookDetails>(record);
    const [book,setBook] = useState([]);
    const [isVisible, setVisible] = useState(true);
    
    const { GetAllBooks } = useContext(BookActionsContext);
      const showModal = () => {
          //setIsModalVisible(true);
      };
  
    
     const {updateBook} = useBookAction();
     const onFinish = async () => {
        try {
            console.log("Record received: ",record);
            console.log("Details before await: ", bookDetails);
            if (updateBook) {
                await updateBook({id:record.id,...bookDetails});
                const updatedBooks = await GetAllBooks();//fix
                updateDetails(updatedBooks.items);
                hideModal();
            }
           
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };
    

    // console.log("record ::",record)
    return(
        <>
        {/* <Button type="primary" onClick={showModal}>
          Edit
        </Button> */}
        <Modal
                title="Edit Book"
                visible={isModalVisible}
                //  onCancel={}
                footer={null}
        >
        <Form 
        layout="vertical"
        onFinish={onFinish}
        initialValues={{...record}}
        >
        <Form.Item label="Title" name="title">
          <Input   placeholder='Title' onChange={(input)=>setBookDetails({...bookDetails,title:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Author"  name="author">
          <Input  placeholder='Author' onChange={(input)=>setBookDetails({...bookDetails,author:input.target.value})} />
        </Form.Item>
        <Form.Item label="Description" name={'description'}>
          <Input  placeholder='Description' onChange={(input)=>setBookDetails({...bookDetails,description:input.target.value})} />
        </Form.Item>
        <Form.Item label="Publisher" name='publisher'>
          <Input placeholder='Publisher' onChange={(input)=>setBookDetails({...bookDetails,publisher:input.target.value})} />
        </Form.Item>
        <Form.Item label="ISBN" name={'isbn'}>
          <Input  placeholder='ISBN'/>
        </Form.Item>
        <Form.Item label="Image">
          <Input   placeholder='Image'  onChange={(input)=>setBookDetails({...bookDetails,image:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Genre" name={'genre'}>
          <Input  placeholder='Genre'  onChange={(input)=>setBookDetails({...bookDetails,genre:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Shelf Number" name={'shelfNumber'}>
          <Input  placeholder='Shelf Number' />
        </Form.Item>
        <Form.Item>
        <Button type='default'>Cancel</Button>
          <Button type="primary" htmlType="submit" >Save</Button>
          
        </Form.Item>
      </Form>
      </Modal>

      
      </>
    );
}