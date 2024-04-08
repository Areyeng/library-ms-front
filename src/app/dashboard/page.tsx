'use client'
import { Button, Form, Input, Layout, Menu, Table, message } from "antd";
import styles from "./styles.module.css";
import { useContext,useEffect, useRef, useState } from "react";
import BookForm from "@/components/BookForm";
import withAuth from "@/hocs/withAuth";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import {UserActionContext } from "@/providers/UserProvider/context";
import {BookActionContext } from "@/providers/BookProvider/context";
import { BookRequestActionContext } from "@/providers/BookRequestProvider/context";
import EventForm from "@/components/EventForm/page";


function Dashboard() :React.ReactNode{
    
    //   var data1 = [
    //     {
    //       key: '1',
    //       name: 'John',
    //       surname: 'Doe',
    //       email: 'john.doe@example.com',
    //       phoneNumber: '123-456-7890',
    //       bookBorrowed: 'Harry Potter and the Sorcerer\'s Stone'
    //     },
    //     {
    //       key: '2',
    //       name: 'Jane',
    //       surname: 'Smith',
    //       email: 'jane.smith@example.com',
    //       phoneNumber: '987-654-3210',
    //       bookBorrowed: 'To Kill a Mockingbird'
    //     }
    //   ];
      
      const data2 = [
        {
          key: '1',
          name: 'Alice',
          surname: 'Johnson',
          email: 'alice.johnson@example.com',
          phoneNumber: '111-222-3333',
          bookBorrowed: 'The Great Gatsby'
        },
        {
          key: '2',
          name: 'Bob',
          surname: 'Brown',
          email: 'bob.brown@example.com',
          phoneNumber: '444-555-6666',
          bookBorrowed: 'Pride and Prejudice'
        }
      ];

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
      const bookColumns = [
        {
          title: 'Book Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Author',
          dataIndex: 'author',
          key: 'author',
        },
        {
          title: 'Publisher ',
          dataIndex: 'publisher',
          key: 'publisher',
        },
        {
          title: 'ISBN',
          dataIndex: 'isbn',
          key: 'isbn',
        },
        {
          title: 'Shelf Number',
          dataIndex: 'shelfNumber',
          key: 'shelfNumber',
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
          },
      ];
      const [selectedMenuKey, setSelectedMenuKey] = useState('1');
      const { GetAllUsers } = useContext(UserActionContext);
      const { GetAllRequests } = useContext(BookRequestActionContext);
      const { GetAllBooks } = useContext(BookActionContext);
      const { GetBook } = useContext(BookActionContext);
      const [tableColumns,setColumns] = useState([{}]);
      const [memberDetails,setMemberDetails] = useState();
      const [bookRequests,setBookRequests] = useState();
      const [book,setBook] = useState();
      const booksRef = useRef([]);
      let tableData;
      let columns1;
      let data3;
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
          const fetchAllBooks = async () => {
            try {
               data3=  await GetAllBooks();
               booksRef.current = data3.items;
               
              
               
            } catch (error) {
              console.error('Error fetching all books:', error);
            }
           
          };
        fetchAllBooks();
        const fetchBook = async () =>{
            try {
                const data4=  await GetAllRequests(); 
                setBook(data4);
             
               console.log('book requests: ',bookRequests)
             } catch (error) {
               console.error('Error fetching member:', error);
             }
        }
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
      
    
        const handleMenuSelect = (e:any) => {
            setSelectedMenuKey(e.key);
        };

        
        
        if (selectedMenuKey === '1') {
            tableData = memberDetails;
            columns1 = memberColumns;
        } else if (selectedMenuKey === '2') {
           
            tableData = bookRequests;
            columns1 = requestColumns;
        }
        else if (selectedMenuKey ==='3') {
           
            tableData =  booksRef.current;
            columns1 = bookColumns;
        }
    
        return (
            <>
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
                <Table dataSource={tableData} columns={columns1} />
              </Content>
            </Layout>
          </Layout>
          <BookForm/>
          {/* <EventForm/> */}
          </>
           
        );
}
export default withAuth(Dashboard);