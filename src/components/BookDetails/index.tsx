import React from 'react';
import { Card } from 'antd';
import {useStyles} from "./styles";
import Image from 'next/image';

const { Meta } = Card;
export default function BookDetails() :React.ReactNode{
    const { styles, cx } = useStyles();
    return(
        <Card className={cx(styles.card)}>
            <Image src="/book4.jpg" width="240" height="300" alt="book-image" />
            {/* <Meta 
                className={cx(styles.details)}
                title="Book Title" 
                description="This is the description"
            /> */}
            <Card className={cx(styles.secondCard)}>
            
            </Card>
        </Card>
    );

    
}