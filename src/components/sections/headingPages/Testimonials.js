import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>What Our Customers Love About Us!</h1>
            </article>


            <section className="testimonials-cards">
            <TestimonialCard name="John Doe" description="This is the best Italian food that I've ever had and definitely it will be my go to place from now on!"/>
            <TestimonialCard name="Elizabeth Clark" description="My son and daughter, really loved the cozy vibes and delicious food here. Truly it was weekend worthy dinner"/>
            <TestimonialCard name="Priya Saha" description="The italian flavor and texture of their food is amazing and delicious! I will definitely recommend this place."/>
            <TestimonialCard name="Eric Pattinson" description="Great food, welcoming staff, cozy atmosphere. A great place to treat your famil"/>
            <TestimonialCard name="Zheying Zhang" description="The food here really refreshed me after a late night duty at the local hospital. I was full and satisfied."/>
            <TestimonialCard name="Martha Stewart" description="The food was just finger licking' good and I really enjoyed the vibrant ambience."/>
            <TestimonialCard name="Fahim Riaz" description="The food here was fire!! Everyone should try this place out at least once if they live in California."/>
            <TestimonialCard name="Tero Ahtee" description="The mouthwatering food and the friendly staff made my visit a memorable one."/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}