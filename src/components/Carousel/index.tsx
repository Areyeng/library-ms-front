'use client';
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
            <div><Image  src="/book1.jpg" width="250" height="250"  alt="book"  /></div>
            <div><Image  src="/book2.jpg" width="250" height="250"  alt="book"  /></div>
            <div><Image  src="/book3.jpg" width="250" height="250"  alt="book"  /></div>
            <div><Image  src="/book4.jpg" width="250" height="250"  alt="book"  /></div>
        </Carousel>
    );
    
    
}
