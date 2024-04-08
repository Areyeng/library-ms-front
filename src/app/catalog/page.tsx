'use client';
import BookCard from "@/components/BookCard"
import FilterTable from "@/components/FilterTable"
import { Card } from "antd"
import styles from "./styles.module.css";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { BookActionContext, BookStateContext } from "@/providers/BookProvider/context";
import withAuth from "@/hocs/withAuth";

function Catalog(){
    const { GetAllBooks } = useContext(BookActionContext);
    const state = useContext(BookStateContext);
    const [bookData,setBookData]= useState();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data =  await GetAllBooks().then((res)=>res);
            
            setBookData(data.items);
            
          } catch (error) {
            console.error('Error fetching book data:', error);
          }
        };
    
        fetchData();
      }, [GetAllBooks]);

     
    return(
        <>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder="Search the catalog..."/>
                <div className={styles.searchIcon}>
                     <Image className={styles.imageStyle} src="/search.png" width="24" height="24"  alt="search-bar"  />
                </div>
            </div>
            <FilterTable/>
            <div className={styles.cards}>
            {bookData && <BookCard books={bookData}/>}
            </div>
            
        </>
    );
}
export default withAuth(Catalog);