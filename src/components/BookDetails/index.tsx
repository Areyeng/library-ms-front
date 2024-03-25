import React from 'react';
import { Card } from 'antd';
import { useStyles } from "./styles";
import Image from 'next/image';
import styles from "./styles.module.css";
const { Meta } = Card;

export default function BookDetails(): React.ReactNode {
   

    return (
        <div className={styles.card}>
    <div className={styles.content}>
        <div className={styles.imageContainer}>
            <Image src="/book4.jpg" width="250" height="370" alt="book-image" />
        </div>
        <div className={styles.detailsContainer}>
            <h2>You, Follow Me.</h2>
            <p>Oscar Diaz</p>
            <div className={styles.icon}>
                <Image  src="/heart.png" width="14" height="14"  alt="like-icon"  />
                <p>250</p>
            </div>
            <p className={styles.description}>A young woman from Nigeria leaves behind her home and her first love to start a new life in America, only to find her dreams are not all she expected</p>
            <p>Fiction</p>
            <p>ISBN &nbsp;:&nbsp;9781471239915</p>
            <p><b>Publisher&nbsp;:&nbsp;</b><i>New York, New York : Anchor Books, a division of Random House LLC</i></p>
            <div className={styles.status}>
                <h1  className={styles.availability}>Available</h1>{/*Change color and text depending fetch response */}
                <div className={styles.request}>
                    <p className={styles.order} >PLACE ORDER</p>
                </div>
                <div className={styles.bookmark}>
                    <p className={styles.order} >BOOKMARK</p>{/*Change color and text depending fetch response */}
                </div>
            </div>
        </div>
    </div>
</div>

    );
}
