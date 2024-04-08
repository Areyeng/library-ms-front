'use client'
import EventCard from "@/components/EventCard";
import styles from "./styles.module.css";
import withAuth from "@/hocs/withAuth";


// export const metadata = {
//     title: "Events",
// }
const EventList = [
    {
      "eventId": 1 ,
      "eventName": "Music Festival 2024",
      "eventDescription": "Join us for an unforgettable weekend of music, food, and fun at Music Festival 2024! Experience live performances from top artists across various genres.",
      "eventDateTime": "July 20-22, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book1.jpg"
    },
    {
      "eventId" :2 ,
      "eventName": "Science Fair: Exploring the Universe",
      "eventDescription": "Discover the wonders of science at our annual Science Fair! Explore interactive exhibits, conduct experiments, and learn about breakthroughs in astronomy, physics, and more.",
      "eventDateTime": "September 5-7, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book4.jpg"
    },
    {
      "eventId" :3,
      "eventName": "Fashion Week 2024",
      "eventDescription": "Experience the glamour and creativity of the fashion industry at Fashion Week 2024! Witness dazzling runway shows, discover emerging designers, and explore the latest trends.",
      "eventDateTime": "October 15-20, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book3.jpg"
    },
    {
     "eventId":5 ,
      "eventName": "Film Festival: Cinematic Journey",
      "eventDescription": "Embark on a cinematic journey at our Film Festival! Watch captivating films from around the world, attend Q&A sessions with directors, and celebrate the art of storytelling.",
      "eventDateTime": "November 10-15, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book2.jpg"
    },
    {
      "eventId": 6 ,
      "eventName": "Food Expo: Culinary Delights",
      "eventDescription": "Savor the flavors of the world at our Food Expo! Sample delicious dishes, watch cooking demonstrations by renowned chefs, and explore the latest culinary trends.",
      "eventDateTime": "December 1-3, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book3.jpg"
    },
    {
      "eventId": 7 ,
      "eventName": "Sports Summit 2024",
      "eventDescription": "Join us for insightful discussions and exciting sports events at Sports Summit 2024! Hear from industry experts, participate in workshops, and celebrate the spirit of sportsmanship.",
      "eventDateTime": "February 8-10, 2024",
      "eventLocation": "Readers' Emporium Conference Hall",
      "image": "book1.jpg"
    }
  ]
  
function Events() :React.ReactNode{
    return(
        <>
            <h1 className={styles.eventsHeading}>Events</h1>
            <div className={styles.eventsDiv}>
                <div className={styles.imageDiv}></div>
                <div className={styles.detailsDiv}></div>
            </div>
            <EventCard events={EventList}/>
        </>
            
      
    );

        
    
}
export default withAuth(Events);