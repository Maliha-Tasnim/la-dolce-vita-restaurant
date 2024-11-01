import {Link} from 'react-router-dom';
import './Heading.css'; // Add this import for the new CSS file
import food1 from '../../../assets/food/food1.png'; // Import the image


export default function Heading() {
    return (
        <header className="heading-header" style={{backgroundImage: `url(${food1})`}}>
            <div className="content-wrapper">
                <article className="call-to-action">
                    <section className="hero-text">
                        <h1>La Dolce Vita</h1>
                       
                        <p className="subsection">We are a family owned Italian restaurant, located in California. 
                            We focus on authentic italian recipes served with a modern twist.
                            We make all our delicious food with ultimate love & passion.</p>
                        <br></br>
                        <Link className="action-button" to="/reservations">Reserve Your Table</Link>
                    </section>

                    
                </article>
            </div>
        </header>
    );
}
