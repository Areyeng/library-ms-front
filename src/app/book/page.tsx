'use client';
import BookCard from "@/components/BookCard"
import FilterTable from "@/components/FilterTable"
import BookDetails from "@/components/BookDetails";
import { Card } from "antd"
import styles from "./styles.module.css";
import Image from "next/image";
import BookCarousel from "@/components/Carousel";

const BookList = [
    {
        id: 1,
        title: "Book 1",
        author: "Author 1",
        description: "description 1",
        publisher: "publisher 1",
        isbn: 0,
        image: "/book1.jpg",
        genre: "genre 1",
        shelfNumber: 1,
        like: 1
    },
    {
        id: 2,
        title: "Book 2",
        author: "Author 2",
        description: "description 2",
        publisher: "publisher 2",
        isbn: 0,
        image: "/book2.jpg",
        genre: "genre 2",
        shelfNumber: 2,
        like: 2
    },
    {
        id: 3,
        title: "Book 3",
        author: "Author 3",
        description: "description 3",
        publisher: "publisher 3",
        isbn: 0,
        image: "/book3.jpg",
        genre: "genre 3",
        shelfNumber: 3,
        like: 3
    },
]
export default function Book(){
    
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
                <BookDetails/>
            </div>
           
        </div>
        {/* <div>
                <BookCarousel/>
            </div> */}
        </>
        
    );
}