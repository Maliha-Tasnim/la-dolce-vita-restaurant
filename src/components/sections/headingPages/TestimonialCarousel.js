import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from './CardInfo/TestimonialCard';

export default function CarouselPage() {
    return (
        <Carousel 
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            showArrows={true}
            swipeable={true}
            emulateTouch={true}
            centerMode={false}
            className="testimonials-carousel-container"
        >
            <div className="carousel-slide">
                <TestimonialCard 
                    name="John Doe" 
                    description="This is the best Italian food that I've ever had and definitely it will be my go to place from now on!"
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Elizabeth Clark" 
                    description="My son and daughter, really loved the cozy vibes and delicious food here."
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Priya Saha" 
                    description="The italian flavor and texture of their food is amazing and delicious!"
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Eric Pattinson" 
                    description="Great food, welcoming staff, cozy atmosphere. A great place to treat your family"
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Zheying Zhang" 
                    description="The food here really refreshed me after a late night duty at the local hospital."
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Martha Stewart" 
                    description="The food was just finger licking' good and I really enjoyed the vibrant ambience."
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Fahim Riaz" 
                    description="The food here was fire!! Everyone should try this place out at least once if they live in California."
                />
            </div>
            <div className="carousel-slide">
                <TestimonialCard 
                    name="Tero Ahtee" 
                    description="The mouthwatering food and the friendly staff made my visit a memorable one."
                />
            </div>
        </Carousel>
    );
}