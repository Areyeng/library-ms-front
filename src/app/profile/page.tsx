"use client";
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from '@/providers/AuthProvider';
import styles from "./styles.module.css";
import Image from "next/image";
import { Details } from '@/providers/AuthProvider/interface';
import { AuthStateContext } from '@/providers/AuthProvider';
import axios from 'axios';
import { message } from 'antd';
import withAuth from '@/hocs/withAuth';

// export const metadata = {
//     title: "Registered User Profile",
// }
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
function Profile() :React.ReactNode{
    // const { authToken } = useContext(AuthStateContext); // Accessing the authentication state including the token
    // console.log("token after logging in: ", authToken);
    const [userDetails, setUserDetails] = useState(null);
    let authToken: string | null;
    let userID: string | null;
    authToken = localStorage.getItem("token");
    userID = localStorage.getItem("userID");
    console.log("UserID: ", userID);

useEffect(() => {
    const fetchUserDetails = async () => {
        try {
            if (!authToken) {
                // Handle case when authToken is not available
                throw new Error("Authentication token not found");
            }

            // Make a GET request to your backend API endpoint to fetch user details
            const response = await axios.get(`https://localhost:44311/api/services/app/User/Get?Id=${userID}`, {
                headers: {
                    Authorization: `Bearer ${authToken}`, // Include token in the authorization header
                },
            });

            setUserDetails(response.data); // Update userDetails state with the fetched user details
            console.log("Returned profile data: ", response.data);
        } catch (error) {
           
            message.error("Unsuccessful fetch"); // Set error state if request fails
        }
    };

    fetchUserDetails(); // Call the fetchUserDetails function when the component mounts
}, [authToken]);

    return(
        <>
        <div className={styles.profileCard}>
            <div className={styles.profileImage}>
            </div>
            <div>
                <p><b>Name: </b></p>
            </div>
        </div>
        
        </>
    );
        
}
export default withAuth(Profile);