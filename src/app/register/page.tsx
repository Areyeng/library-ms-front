'use client';
import RegisterForm from "@/components/RegisterForm";
import styles from "./styles.module.css";
import Image from "next/image";
import { Button } from 'antd';

export default function Register() :React.ReactNode{
    return <>
            <div className={styles.divContainer}>
            <div className={styles.leftDiv}>
                <Image className={styles.imageStyle} src="/signup_3.jpg" width="650" height="600"  alt="search-bar"  />
                <div className={styles.overlay}>
                    <h1 className={styles.signHeading}>Sign Up</h1>
                    <p className={styles.signText}>Please enter your details to sign up and be part of our great community.</p>
                    {/* <Button type="primary">LOG IN</Button> */}
                </div>
            </div>
            <div className={styles.rightDiv}>
                <RegisterForm/>
            </div>
        </div>
    </>
}