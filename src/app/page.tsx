import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import BookCarousel from "@/components/Carousel";
import { Button } from 'antd';
import Login from "./login/page";
// import {useStyles} from "./styles";
export default function Log() :React.ReactNode{
    return(
      <>
        <Login/>
      </>
    )
}