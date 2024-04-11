'use client'
import { Button, Form, Input, Layout, Menu, Table, message,Popconfirm } from "antd";
import type { GetRef, InputRef } from 'antd';
import styles from "./styles.module.css";
import { useContext,useEffect, useRef, useState } from "react";
import BookForm from "@/components/BookForm";
import withAuth from "@/hocs/withAuth";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import {DeleteFilled, EditOutlined} from '@ant-design/icons';
import {UserActionContext } from "@/providers/UserProvider/context";
import {BookActionContext, IBook } from "@/providers/BookProviders/context";
import {BookActionsContext } from "@/providers/BookProvider/context";
import { BookRequestActionContext } from "@/providers/BookRequestProvider/context";
import EventForm from "@/components/EventForm/page";
import React from "react";
import BookFormEdit from "@/components/BookFormEdit";


function Dashboard() :React.ReactNode{
  interface DataType {
    key: React.Key;
    name: string;
    age: string;
    address: string;
  }

      const memberColumns = [
        {
          title: 'Member Id',
          dataIndex: 'memberID',
          key: 'memberID',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Surname',
          dataIndex: 'surname',
          key: 'surname',
        },
        {
          title: 'Email Address',
          dataIndex: 'emailAddress',
          key: 'emailAddress',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
      ];
      const requestColumns = [
        {
          title: 'Book Requested',
          dataIndex: 'bookRequestedId',
          key: 'bookRequestedId',
        },
        {
          title: 'Requested By',
          dataIndex: 'requestorId',
          key: 'requestorId',
        },
        {
          title: 'Date Book Ordered ',
          dataIndex: 'requestDate',
          key: 'requestDate',
        },
        {
          title: 'Date Book Collected',
          dataIndex: 'returnDate',
          key: 'returnDate',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phoneNumber',
          key: 'phoneNumber',
        },
      ];
 
      const [selectedMenuKey, setSelectedMenuKey] = useState('1');
      const { GetAllUsers } = useContext(UserActionContext);
      const { GetAllRequests } = useContext(BookRequestActionContext);
      const { GetAllBooks } = useContext(BookActionsContext);
      const { GetBook } = useContext(BookActionsContext);
      const { DeleteBook } = useContext(BookActionsContext);
      const [tableColumns,setColumns] = useState([{}]);
      const [memberDetails,setMemberDetails] = useState();
      const [bookRequests,setBookRequests] = useState();
      const [editDialog,setEditDialog] = useState(false);
      const [showEditDialog, setShowEditDialog] = useState(false);
      const [editRecord, setEditRecord] = useState<any>(null);
    
      const [book,setBook] = useState([]);
      let tableData;
      let columns:any[] =[];
      let data3;

    
    

      useEffect(()=>{
        const fetchAllBooks = async () => {
          try {
             data3=  await GetAllBooks();
             setBook(data3.items);
             console.log('setbooks:' ,data3.items)
             
          } catch (error) {
            console.error('Error fetching all books:', error);
          }
         
          
        };
      fetchAllBooks();

      },[])

       useEffect(() => {
       
        const fetchRequests = async () => {
            try {
               const data2=  await GetAllRequests(); 
               setBookRequests(data2);//get each book and update array with book title
            
              
            } catch (error) {
              console.error('Error fetching member:', error);
            }
          };
          fetchRequests();
          

        const fetchMembers = async () => {
            try {
              const data1 =  await GetAllUsers() 
              setMemberDetails(data1);
              
            } catch (error) {
              console.error('Error fetching member:', error);
            }
          };
        fetchMembers();  
      },[]);

      const handleEddy = (rec: any) => {
        setEditRecord(rec);
        setShowEditDialog(true);
      };
      
      const updateDetails = (updatedDetails) =>{
        setBook(updatedDetails);
      }
      const handleMenuSelect = (e:any) => {
            setSelectedMenuKey(e.key);
      };
       //delete
       const handleDelete = async (id:string) => {
          
        console.log('delete key: ',id);
        DeleteBook(id);
        
        const updatedBooks = await GetAllBooks();
        console.log('updatedBooks: ',updatedBooks);
        setBook(updatedBooks.items);
      };
   
      const handleCancel = () => {
        setShowEditDialog(false);
      };

     
    
     

      const [bookColumns, setBookColumns] = useState([
        {
          title: 'Book Title',
          dataIndex: 'title',
          key: 'title',
          editable: true,
        },
        {
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
          editable: true,
        },
        {
          title: 'Publisher ',
          dataIndex: 'publisher',
          key: 'publisher',
          editable: true,
        },
        {
          title: 'ISBN',
          dataIndex: 'isbn',
          key: 'isbn',
          editable: true,
        },
        {
          title: 'Shelf Number',
          dataIndex: 'shelfNumber',
          key: 'shelfNumber',
          editable: true,
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            editable:true,
          },
          {
            title: 'Action',
            dataIndex: 'action',
            render: (_: any, record: any) => (
              <span>
                <Button type="primary" onClick={() => handleEddy(record)}>
                  <EditOutlined />
                </Button>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                  <Button>
                    <DeleteFilled />
                  </Button>
                </Popconfirm>
                {/* { record.id && (
                  <BookFormEdit record={record} />
                )} */}
              </span>
            ),
          },
          
      ]);
        
        if (selectedMenuKey === '1') {
            tableData = memberDetails;
            columns = memberColumns;
        } else if (selectedMenuKey === '2') {
           
            tableData = bookRequests;
            columns = requestColumns;
        }
        else if (selectedMenuKey ==='3') {
           
            tableData = book;
            columns = bookColumns;
        }
     
       
        return (
            <>
          <BookForm updateDetails = {updateDetails}/>

            <Layout style={{ minHeight: '100vh' }}>
            <Sider>
              <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" onSelect={handleMenuSelect}>
                <Menu.Item key="1">Members</Menu.Item>
                <Menu.Item key="2">Book Requests</Menu.Item>
                <Menu.Item key="3">Available Books</Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: '16px' }}>
                <Table 
                dataSource={tableData} 
                columns={columns}
                rowClassName="editable-row"
                bordered
                />
              </Content>
            </Layout>
          </Layout>
          
          
      {showEditDialog && <BookFormEdit record={editRecord} hideModal={()=>setShowEditDialog(false)}  isModalVisible={showEditDialog} updateDetails = {updateDetails} />}
          
          </>
           
        );
}

export default withAuth(Dashboard);