import Link from "next/link";
import styles from "@/components/EventCard/styles.module.css"

interface Event {
    eventId: number;
    eventName: string;
    eventDescription: string;
    eventDateTime: string;
    eventLocation: string;
    image: string;
  }
  interface Props {
    events: Event[];
  } 
export default function EventCard({ events }: Props): React.ReactNode{

return (
    events.map((event) => (
     
        <div key={event.eventId} className={styles.eventCard}>
        <div className={styles.eventDate}>
            <p className={styles.date}>MAR<br/> 19</p>
        </div>
        <div className={styles.eventDetails}>
            <h1>Event Name</h1>
            <p>Event description</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id nisi a magna dapibus consequat at in arcu. </p>
            <p>March 19, 2024 12:00 PM-13:00 PM</p>
        </div>
        <div className={styles.eventImage}></div>

    </div>
    ))
 );
    
}
