'use client';
import Image from "next/image";
import styles from "./styles.module.css";
import { Button, Form, Input, Radio } from 'antd';
import LoginForm from "@/components/LoginForm";

type LayoutType = Parameters<typeof Form>[0]['layout'];
export default function Login() :React.ReactNode{
    return<>
        <div className={styles.divContainer}>
            <div className={styles.leftDiv}>
                <Image className={styles.imageStyle} src="/signup_3.jpg" width="650" height="600"  alt="search-bar"  />
                <div className={styles.overlay}>
                    <h1 className={styles.signHeading}>Log In</h1>
                    <p className={styles.signText}>Please  enter your details  to access your tailored experience of the emporium.</p>
                    {/* <Button type="primary">LOG IN</Button> */}
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.heading}><h1>READERS' EMPORIUM</h1></div>
                <LoginForm/>
            </div>
        </div>
       
    </>
}