export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1 style={{ marginTop: '5rem', marginBottom: '0.5rem',fontStyle: 'italic', color: 'black', fontSize: '2rem', textAlign: 'center'}}>"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish."</h1>
                <div style={{ height: '20px' }}></div> 
                <h2 style={{ marginTop: '0.5rem', textAlign: 'center' }}>- Mark Bittman</h2>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpeg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../../../assets/food/food2.jpeg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
        </article>
    );
}
