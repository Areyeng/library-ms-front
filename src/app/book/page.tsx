'use client';
import BookCard from "@/components/BookCard"
import FilterTable from "@/components/FilterTable"
import BookDetails from "@/components/BookDetails";
import { Card } from "antd"
import styles from "./styles.module.css";
import Image from "next/image";
import BookCarousel from "@/components/Carousel";
import withAuth from "@/hocs/withAuth";
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { BookActionsContext } from "@/providers/BookProvider/context";


function Book(){
    const router = useRouter();
    const { GetBook } = useContext(BookActionsContext);
    const searchParams = new URLSearchParams(window.location.search);
    const bookId = searchParams.get('bookID');
    const [books,setBooks] = useState();

    useEffect(() => {
      
    const fetchBook = async () => {
        try {
                if(bookId!=null){
                    const data3= await GetBook(bookId);
                     setBooks(data3);
                }
                
        } catch (error) {
          console.error('Error fetching all books:', error);
        }
       
        
      };
    fetchBook();
    }, []);
    return(
        <>
        <div>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder="Search the catalog..."/>
                <div className={styles.searchIcon}>
                     <Image className={styles.imageStyle} src="/search.png" width="24" height="24"  alt="search-bar"  />
                </div>
            </div>
            <div className={styles.cards}>
                {books && <BookDetails books={books}/>}
            </div>
        </div>
        </>
    );
}
export default withAuth(Book)