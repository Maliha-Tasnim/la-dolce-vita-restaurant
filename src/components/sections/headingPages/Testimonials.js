import Carousel from './TestimonialCarousel';
import TestimonialCard from './CardInfo/TestimonialCard';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>What Our Customers Love About Us</h1>
            </article>

            <div className="testimonials-content">
                <section className="testimonials-cards">
                    <TestimonialCard 
                        name="John Doe" 
                        description="This is the best Italian food that I've ever had and definitely it will be my go to place from now on!"
                    />
                    <TestimonialCard 
                        name="Elizabeth Clark" 
                        description="My son and daughter, really loved the cozy vibes and delicious food here."
                    />
                    <TestimonialCard 
                        name="Priya Saha" 
                        description="The italian flavor and texture of their food is amazing and delicious!"
                    />
                    <TestimonialCard 
                        name="Eric Pattinson" 
                        description="Great food, welcoming staff, cozy atmosphere.A great place to treat your family."
                    />
                    <TestimonialCard 
                        name="Fahim Riaz" 
                        description="The food here was fire!! Everyone should try this place out at least once if they live in California."
                    />
                    <TestimonialCard 
                        name="Zheying Zhang" 
                        description="The food here really refreshed me after a late night duty at the local hospital."
                    />
                </section>

                <section className="testimonials-carousel">
                    <Carousel />
                </section>
            </div>
        </section>
    );
}