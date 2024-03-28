import styles from "./styles.module.css";




export default function Events() :React.ReactNode{
    return(
        <>
        <div className={styles.navigation}>
            <div className={styles.mainDiv}>
                <div className={styles.rowStats}>
                    <div className={styles.firstRow}>
                        <div className={styles.firstDiv}>
                            <p className={styles.numbers}>223</p>
                            <p className={styles.stats}>Visitors</p>
                        </div>
                        <div className={styles.secondDiv}>
                            <p className={styles.numbers}>190</p>
                            <p className={styles.stats}>Borrowed Books</p>
                        </div>
                        <div className={styles.thirdDiv}>
                            <p className={styles.numbers}>17</p>
                            <p className={styles.stats}>Overdue Books</p>
                        </div>
                        <div className={styles.fourthDiv}>
                        <p className={styles.numbers}>90</p>
                            <p className={styles.stats}>New Members</p>
                        </div>
                    </div>
                    <div className={styles.secondRow}>
                        <div className={styles.usersDiv}>
                        <table className={styles.customTable}>
                            <thead>
                                <tr>
                                <th>User ID</th>
                                <th>Username</th>
                                <th>Book Issued</th>
                                <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>JohnDoe</td>
                                <td>Book Title 1</td>
                                <td>2024-03-24</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>JaneSmith</td>
                                <td>Book Title 2</td>
                                <td>2024-03-25</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className={styles.booksDiv}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        

        </>
            
      
    );

}