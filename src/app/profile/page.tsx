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
import { UserActionContext } from '@/providers/UserProvider/context';

function Profile() :React.ReactNode{
    // const { authToken } = useContext(AuthStateContext); // Accessing the authentication state including the token
    // console.log("token after logging in: ", authToken);
    const [userDetails, setUserDetails] = useState(null);
    const { GetAllUsers} = useContext(UserActionContext);
    const [user,setUser] = useState({
        name: '',
        surname: '',
        emailAddress: '',
        phoneNumber: '',
        password: '',
        memberID: ''
    });
    let authToken: string | null;
    let email: string | null;
    authToken = localStorage.getItem("token");
    email= localStorage.getItem("email");
    console.log("email: ",email);
    let matchingUser;
    let data:{}
    useEffect(() => {
        const fetchUserDetails = async () =>{
            try {
                 data =  await GetAllUsers().then((res)=>res);
                 matchingUser = data.find(user => user.emailAddress === email);
                 setUser(matchingUser);
                console.log('matching user:',user)
                
              } catch (error) {
                console.error('Error fetching book data:', error);
              }
              
        }
        fetchUserDetails();
    }, []);

    return(
        <>
        {user && <div className={styles.profileCard}>
           
            <div>
                <p><b>Name:{user.name}</b></p>
            </div>
        </div>}
        
        
        </>
    );
        
}
export default withAuth(Profile);