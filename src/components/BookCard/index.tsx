'use client';
import React from 'react';
import { Card } from 'antd';
import Image from "next/image";
import {useStyles} from "./styles";
import Link from 'next/link';

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

// Specify the type of the 'books' parameter as an array of Book objects
interface Props {
  books: Book[];
}

export default function BookCard({ books }: Props): React.ReactNode {
  const { styles, cx } = useStyles();
  return (
     books.map((book) => (
      
      <Card
        className={cx(styles.card)}
        key={book.id}
        hoverable
        // style={{ width: 240 }}
        cover={<Image src={book.image} width="240" height="300" alt="book-image" />}
      >
        <Meta title={book.title} description={book.author} />
      </Card>
      
    ))
  );
}
