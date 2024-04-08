import React from 'react';
import { message } from 'antd';
import Login from '@/app/login/page';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import PageFooter from '@/components/PageFooter';


const withAuth = (Protected: any) => {
    const WithAuth = (props: any) => {
        const router = useRouter();
        const token= localStorage.getItem('token');
        console.log("token: ",token)
        if (!token) {
            router.push('/login')
        }
        return (
            <>
              <NavBar />
              <Protected {...props}/>
              <PageFooter/>
            </>
        
        );;
    };

    return WithAuth;
}

export default withAuth;
