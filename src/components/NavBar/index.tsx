import Link from "next/link";
import styles from "@/components/NavBar/styles.module.css"

export default function NavBar(): React.ReactNode{
return (
        <header>
            <nav className={styles.nav}>
                <Link href="/login" >LOG IN</Link>
                <Link href="/events" >EVENTS</Link>
                <Link href="/profile" >RESERVE A ROOM</Link>
                <Link href="/catalog" >CATALOG</Link>
                <Link href="/" >HOME</Link>
                {/* <div className='main-back'>
                  <img src={cc_logo} alt='crafty-cuisine-logo' className='logo'/>
                </div> */}
            </nav>
        </header>
    );
    
    
}
