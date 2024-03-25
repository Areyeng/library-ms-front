'use client';
import BookCard from "@/components/BookCard"

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const BookList = [
  {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      description: "description 1",
      publisher: "publisher 1",
      isbn: 0,
      image: "/book1.jpg",
      genre: "genre 1",
      shelfNumber: 1,
      like: 1
  },
  {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      description: "description 2",
      publisher: "publisher 2",
      isbn: 0,
      image: "/book2.jpg",
      genre: "genre 2",
      shelfNumber: 2,
      like: 2
  },
  {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      description: "description 3",
      publisher: "publisher 3",
      isbn: 0,
      image: "/book3.jpg",
      genre: "genre 3",
      shelfNumber: 3,
      like: 3
  },
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    description: "description 1",
    publisher: "publisher 1",
    isbn: 0,
    image: "/book1.jpg",
    genre: "genre 1",
    shelfNumber: 1,
    like: 1
},
{
    id: 2,
    title: "Book 2",
    author: "Author 2",
    description: "description 2",
    publisher: "publisher 2",
    isbn: 0,
    image: "/book2.jpg",
    genre: "genre 2",
    shelfNumber: 2,
    like: 2
},
{
    id: 3,
    title: "Book 3",
    author: "Author 3",
    description: "description 3",
    publisher: "publisher 3",
    isbn: 0,
    image: "/book3.jpg",
    genre: "genre 3",
    shelfNumber: 3,
    like: 3
},
{
  id: 1,
  title: "Book 1",
  author: "Author 1",
  description: "description 1",
  publisher: "publisher 1",
  isbn: 0,
  image: "/book1.jpg",
  genre: "genre 1",
  shelfNumber: 1,
  like: 1
},
{
  id: 2,
  title: "Book 2",
  author: "Author 2",
  description: "description 2",
  publisher: "publisher 2",
  isbn: 0,
  image: "/book2.jpg",
  genre: "genre 2",
  shelfNumber: 2,
  like: 2
},
{
  id: 3,
  title: "Book 3",
  author: "Author 3",
  description: "description 3",
  publisher: "publisher 3",
  isbn: 0,
  image: "/book3.jpg",
  genre: "genre 3",
  shelfNumber: 3,
  like: 3
},
]
export default function BookCarousel() :React.ReactNode{
return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="transform 600ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px,carousel-item-margin-100-px"
            
            >
              
            {BookList.map(book => (
              <div key={book.id}>
                <Image src={book.image} width="240" height="300" alt="book-image" style={{borderRadius:'10px'}}/>
              </div>
            ))}
            
        </Carousel>
    );
    
    
}
