'use client';
import React, { useState } from 'react';
import { Button, Card } from 'antd';
import Image from "next/image";
import {useStyles} from "./styles";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookRequestDetails } from '@/providers/BookRequestProvider/interface';
import { useBookRequestActions } from '@/providers/BookRequestProvider';

const { Meta } = Card;

// Define an interface representing the structure of a book object
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  publisher: string;
  isbn: number;
  image: string;
  genre: string;
  shelfNumber: number;
  like:number;
}

// // Specify the type of the 'books' parameter as an array of Book objects
interface Props {
  books: Book[];
}

const currentDate = new Date();

// Add 14 days to the current date
const twoWeeksAhead = new Date(currentDate);
twoWeeksAhead.setDate(currentDate.getDate() + 14);

export default function BookCard({books}: Props): React.ReactNode {

    const { styles, cx } = useStyles();
    const [requestDetails, setRequestDetails] = useState<BookRequestDetails>({
      bookRequestedId : '',
      requestorId :'',
      requestDate: currentDate ,
      returnDate : twoWeeksAhead ,
      collected : false,
      releasorId : ''
    });
    const {RequestBook} = useBookRequestActions();
    const handleBorrowClick = (bookId:any) => {

    const userID =localStorage.getItem('userID');
      setRequestDetails(prevState => ({
        ...prevState,
        bookRequestedId: bookId,
        requestorId: userID || '',
        releasorId : userID || ''
    }));//only updates after second click
    try{
      RequestBook(requestDetails);
      console.log("Request details: ",requestDetails);      
    }catch{

    }
    
  };
 
  
  return (
     books.map((book) => (
      <div key={book.id}>
      <Card
        key={book.id}
        hoverable
        className={styles.card}
      >
        <div style={{ position: 'relative', width: '100%', height: '200px' }}>
          <Image src="/book.png" alt="Book Cover" layout="fill" />
        </div>
        <Meta title={book.title} description={book.author} /> 
        <Button onClick={(e) => {
          e.stopPropagation(); // Prevents the click event from propagating to the parent div
          handleBorrowClick(book.id);
        }}>Borrow</Button>
      </Card>
    </div>
     ))

    
  );
}
