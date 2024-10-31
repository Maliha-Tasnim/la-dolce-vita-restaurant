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
        <h1 style={{ position: 'relative', zIndex: 1 }}>Order Online</h1>
      </div>
    </header>
  );
}
