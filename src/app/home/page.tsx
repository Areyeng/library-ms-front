'use client'
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import BookCarousel from "@/components/Carousel";
import { Button } from 'antd';
import withAuth from "@/hocs/withAuth";
// import {useStyles} from "./styles";
 function Home() :React.ReactNode{
    return <>
           
           <Image className={styles.imageStyle} src="/landing_bg.jpg" width="1920" height="1080" alt="next-logo"  />
            <h1 className={styles.libraryName}>READERS&apos; EMPORIUM</h1>
            <h3 className={styles.librarySlogan}>Unveiling Worlds, One Page at a Time.</h3>
            <div className={styles.searchContainer}>
              <input type="text" className={styles.searchInput} placeholder="Search the catalog..."/>
                <div className={styles.searchIcon}>
                     <Image className={styles.imageStyle} src="/search.png" width="24" height="24"  alt="search-bar"  />
                </div>
            </div>
            <h3 className={styles.communityHeading}>POPULAR READS</h3>
            <BookCarousel/>
            <Button><Link href="/catalog">View More Books</Link></Button>
            <h3 className={styles.communityHeading}>READERS&apos; COMMUNITIES</h3>
            <div className={styles.community}>
               <Image className={styles.communityImage} src="/community.png" width="350" height="350"  alt="people-reading"  />
               <p className={styles.communityText}>Join our dynamic library community! Connect with fellow book lovers, share recommendations, and engage in inspiring discussions. Discover new literary treasures and fuel your passion for reading. Join us today and be part of a vibrant world of books!</p>
            </div>
            <h3 className={styles.communityHeading}>UPCOMING EVENTS</h3>
            <BookCarousel/>
           </>
}
export default withAuth(Home);