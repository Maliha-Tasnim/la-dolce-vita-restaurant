import HeroImage from "../../../assets/food/food4.webp";

export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      />
      <div 
        className="reserve-header-text"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px', textAlign: 'center'}}>
          <h1>About us</h1>
          <p className="about-subtext">La Dolce Vita inaugurated in 1994 by two Italian brothers, Enzo and Leonardo. 
            Despite the city's vibrant diversity, the two brothers missed the lack of authentic Italian 
            cuisine in California. Thus they inspired to bring the flavors of their hometown in Italy to 
            the people of California. The two brothers continue to oversee the La Dolce Vita restaurant, 
            nearly thirty years later.</p>
        </div>
      </div>
    </header>
  );
}
