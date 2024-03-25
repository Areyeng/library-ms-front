import React from 'react';
import BookCard from "@/components/BookCard";
import styles from "./styles.module.css";
import Image from "next/image";


export const metadata = {
    title: "Registered User Profile",
}
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
    {
      id: 4,
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

]
const EventList = [
    {
      "eventId": 1 ,
      "eventName": "Music Festival 2024",
      "eventDescription": "Join us for an unforgettable weekend of music, food, and fun at Music Festival 2024! Experience live performances from top artists across various genres.",
      "eventDateTime": "July 20-22, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book1.jpg"
    },
    {
      "eventId" :2 ,
      "eventName": "Science Fair: Exploring the Universe",
      "eventDescription": "Discover the wonders of science at our annual Science Fair! Explore interactive exhibits, conduct experiments, and learn about breakthroughs in astronomy, physics, and more.",
      "eventDateTime": "September 5-7, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book4.jpg"
    },
 
]
export default function Profile() :React.ReactNode{

    return(
        <>
            <div className={styles.backProfile}></div>
            <div className={styles.sideContent}>
                <div className={styles.shelfContent}>
                    <div className={styles.shelfHeading}><h1>My Shelf</h1></div>
                    {
                        BookList.map((book,i) => (
                            <div key={i} className={styles.bookDiv}>
                                <div className={styles.imageDiv}>
                                <Image src={book.image} width="80" height="80" alt="book-image" />
                                </div>
                            </div>
            
                        ))
                    }
                </div>
                <div className={styles.communityCard}>
                <div className={styles.communityHeading}><h1>My Communities</h1></div>
                    {
                         EventList.map((event) => (
     
                            <div key={event.eventId} className={styles.eventCard}>
                            
                            <div className={styles.eventDetails}>
                                <p><b>Community Name</b></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi a magna dapibus consequat at in arcu. </p>
                                <p>Every 2nd Tuesday</p>
                            </div>
                            <div className={styles.eventImage}></div>
                    
                        </div>
                         ))
                    }
                </div>
                <div className={styles.profileDetails}>
                    <div className={styles.favouriteBooks}>
                    {
                        BookList.map((book,i) => (
                            <div key={i} className={styles.bookDiv}>
                                <div className={styles.imageDiv}>
                                <Image src={book.image} width="80" height="80" alt="book-image" />
                                </div>
                            </div>
            
                        ))
                    }
                    </div>
                    <div className={styles.preferences}>
                        
                    </div>
                    <div className={styles.upcomingEvents}>
                    {
                         EventList.map((event) => (
     
                            <div key={event.eventId} className={styles.eventCard}>
                            
                            <div>
                                <p><b>Community Name</b></p>
                               
                                <p>Every 2nd Tuesday</p>
                            </div>
                            
                    
                        </div>
                         ))
                    }
                  </div>
                </div>
               
            </div>
        </>
        
    );
        
}