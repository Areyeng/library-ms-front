import React from 'react';
import { Card } from 'antd';
import { useStyles } from "./styles";
import Image from 'next/image';
import styles from "./styles.module.css";
import Link from 'next/link';
const { Meta } = Card;

export default function BookDetails({books}): React.ReactNode {
 

    return (
        <div className={styles.card}>
    <div className={styles.content}>
        <div className={styles.imageContainer}>
            <Image src="/book4.jpg" width="250" height="370" alt="book-image" />
        </div>
        <div className={styles.detailsContainer}>
            <h2>{books.title}</h2>
            <p>{books.author}</p>
            <div className={styles.icon}>
                <Image  src="/heart.png" width="14" height="14"  alt="like-icon"  />
                <p>250</p>
            </div>
            <p className={styles.description}>{books.description}</p>
            <p>{books.genre}</p>
            <p>ISBN &nbsp;:&nbsp;9781471239915</p>
            <p><b>Publisher&nbsp;:&nbsp;</b><i>{books.publisher}</i></p>
            <div className={styles.status}>
                <h1  className={styles.availability}>Available</h1>
                <div className={styles.request}>
                    <p className={styles.order} >PLACE ORDER</p>
                </div>
                <div className={styles.bookmark}>
                    <p className={styles.order} >BOOKMARK</p>
                </div>
            </div>
            <Link href={'/catalog'}>Back</Link>
        </div>
    </div>
</div>

    );
}
