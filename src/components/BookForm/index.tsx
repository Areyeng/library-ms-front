'use client'
import { useBookActions } from "@/providers/BookProvider";
import { useBookAction } from "@/providers/BookProviders";
import { BookDetails } from "@/providers/BookProvider/interface";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Modal } from 'antd';
import { PlusCircleFilled } from "@ant-design/icons";


export default function BookForm(updateDetails): React.ReactNode {
    const [bookDetails, setBookDetails] = useState<BookDetails>({
        title : '',
        author : '',
        description : '',
        publisher : '',
        isbn : 0,
        image : '',
        genre : '',
        shelfNumber : 0,
        like:0
      });
      const [isModalVisible, setIsModalVisible] = useState(false);

      
      const {AddBook,GetAllBooks} = useBookActions();
      const {addBook,getAllBooks} = useBookAction();//New BookProviders
      const {updateBook} = useBookAction();
      const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
     
        setIsModalVisible(false);
    };
      const onFinish = async()=>{
        try{
          
          console.log("Details before await: ",bookDetails);
          addBook(bookDetails);
          const books =  GetAllBooks();
          updateDetails(books);
          console.log("New Book details after: ",books);
          handleCancel();
          
        }catch{

        }
        
      };
    return(
        <>
        <Button onClick={showModal}>
           <PlusCircleFilled />
          Add Book 
        </Button>
        <Modal
                title="Add Book"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
        >
        <Form 
        layout="vertical"
        onFinish={onFinish}
        >
        <Form.Item label="Title">
          <Input  placeholder='Title' onChange={(input)=>setBookDetails({...bookDetails,title:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Author">
          <Input  placeholder='Author' onChange={(input)=>setBookDetails({...bookDetails,author:input.target.value})} />
        </Form.Item>
        <Form.Item label="Description">
          <Input  placeholder='Description' onChange={(input)=>setBookDetails({...bookDetails,description:input.target.value})} />
        </Form.Item>
        <Form.Item label="Publisher">
          <Input placeholder='Publisher' onChange={(input)=>setBookDetails({...bookDetails,publisher:input.target.value})}/>
        </Form.Item>
        <Form.Item label="ISBN">
          <Input  placeholder='ISBN' onChange={(input)=>{
            const value = parseInt(input.target.value);
            setBookDetails({...bookDetails,isbn:value})}}/>
        </Form.Item>
        <Form.Item label="Image">
          <Input   placeholder='Image' onChange={(input)=>setBookDetails({...bookDetails,image:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Genre">
          <Input  placeholder='Genre' onChange={(input)=>setBookDetails({...bookDetails,genre:input.target.value})}/>
        </Form.Item>
        <Form.Item label="Shelf Number">
          <Input  placeholder='Shelf Number' onChange={(input)=>{
            const value = parseInt(input.target.value);
            setBookDetails({...bookDetails,shelfNumber:value})}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >Add Book</Button>
        </Form.Item>
      </Form>
      </Modal>

      
      </>
    );
}