'use client'
import Link from "next/link";
import styles from "@/components/NavBar/styles.module.css"
import { useState } from "react";
import { Button } from "antd";
import { useAuthActions } from "@/providers/AuthProvider";
import Image from 'next/image';

export default function NavBar(): React.ReactNode{
    const {logout} =useAuthActions();
    const handleLogOut = ()=>{
        console.log('about to log out');
        logout();
    }
return (
        <header>
            <nav className={styles.nav}>
                <a onClick={handleLogOut} >LOG OUT</a>
                <Link href="/dashboard"  >DASHBOARD</Link>
                {/* <Link href="/events" >EVENTS</Link> */}
                <Link href="/catalog" >CATALOG</Link>
                <Link href="/home" >HOME</Link>
                 <div className='main-back'>
                    <Image  src="/logo-no-background.png" width="50" height="50"  alt="logo"  />
                 </div> 
            </nav>
        </header>
    );
    
    
}
