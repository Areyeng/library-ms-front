'use client'
import Link from "next/link";
import styles from "@/components/NavBar/styles.module.css"
import { useState } from "react";
import { Button } from "antd";
import { useAuthActions } from "@/providers/AuthProvider";
import Image from 'next/image';
import { UserOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

export default function NavBar(): React.ReactNode{
    const {logout} =useAuthActions();
    const handleLogOut = ()=>{
        console.log('about to log out');
        logout();
    }

return (
        <> 
            <header>
            <nav className={styles.nav}>
               
                <a onClick={handleLogOut} >LOG OUT</a>
                <Link href="/profile"  >PROFILE</Link>
                <Link href="/dashboard"  >DASHBOARD</Link>
                {/* <Link href="/events" >EVENTS</Link> */}
                <Link href="/catalog" >CATALOG</Link>
                <Link href="/home" >HOME</Link>
                
            </nav>
        </header>
  
        </>
        
        
    );
    
    
}
