import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

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
            className="specials-carousel-container"
        >
            <div className="carousel-slide">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            </div>
            <div className="carousel-slide">
                <SpecialCard image={Bruschetta} name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            </div>
            <div className="carousel-slide">
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
            </div>
        </Carousel>
    );
}