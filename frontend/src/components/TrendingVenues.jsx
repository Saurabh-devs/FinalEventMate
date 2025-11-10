// import React from 'react';

// const venues = [
//   { id: 1, name: 'Palace Mayfair', rating: 4.8, img: '/images/trending1.jpg' },
//   { id: 2, name: 'Festsaal Königspalast', rating: 4.9, img: '/images/trending2.jpeg' },
//   { id: 3, name: 'Asse Tap Room', rating: 4.7, img: '/images/trending4.jpeg' },
//   { id: 4, name: 'Penton Park', rating: 4.8, img: '/images/trending5.jpeg' },
//   { id: 5, name: 'Titanic Town Hall', rating: 4.9, img: '/images/trending3.jpeg' },
// ];

// const VenueCard = ({ venue }) => (
//   <div className="venue-card">
//     <img src={venue.img} alt={venue.name} />
//     <div className="venue-card-info">
//       <h3>{venue.name}</h3>
//       <p>⭐ {venue.rating}</p>
//     </div>
//   </div>
// );

// const TrendingVenues = () => {
//   return (
//     <section className="trending-section">
//       <div className="container">
//         <h2 className="section-title">Trending Venues</h2>
//         <div className="venues-slider">
//           {venues.map(venue => (
//             <VenueCard key={venue.id} venue={venue} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingVenues;


























import React, { useEffect, useRef } from "react";

const venues = [
  { id: 1, name: "Palace Mayfair", rating: 4.8, img: "https://images.pexels.com/photos/3835638/pexels-photo-3835638.jpeg" },
  { id: 2, name: "Festsaal Königspalast", rating: 4.9, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, name: "Asse Tap Room", rating: 4.7, img: "https://media.istockphoto.com/id/450955083/photo/wedding.jpg?s=1024x1024&w=is&k=20&c=NrSTxwM01CQ6k5z_R_EJ0cEjHAZ4c8essmpIzRNwdnM=" },
  { id: 4, name: "Penton Park", rating: 4.8, img: "https://media.istockphoto.com/id/2034042466/photo/beautiful-table-decorated-for-15th-birthday.jpg?s=2048x2048&w=is&k=20&c=5l-j8nDFAuLiFAhGDs2-T-OFz3DgwOguQqUkaSMd6zI=" },
  { id: 5, name: "Titanic Town Hall", rating: 4.9, img: "https://media.istockphoto.com/id/1059441412/photo/abstract-blurred-event-exhibition-with-people-background-business-convention-show-concept.jpg?s=2048x2048&w=is&k=20&c=sO7rKJhCkCOqP94c4_Jut3BC4e2vpUI8_SwwNLwTXgs=" },
];

const VenueCard = ({ venue }) => (
  <div
    style={{
      minWidth: "250px",
      margin: "0 12px",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      backgroundColor: "#fff",
      display: "inline-block",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <img
      src={venue.img}
      alt={venue.name}
      style={{
        width: "100%",
        height: "160px",
        objectFit: "cover",
      }}
    />
    <div style={{ padding: "12px" }}>
      <h3 style={{ fontWeight: "600", fontSize: "18px", marginBottom: "4px" }}>
        {venue.name}
      </h3>
      <p style={{ color: "#666", fontSize: "15px" }}>⭐ {venue.rating}</p>
    </div>
  </div>
);

const TrendingVenues = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const speed = 1.2;

    const scrollStep = () => {
      if (container) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <section style={{ padding: "50px 0", backgroundColor: "#fff8ef" }}>
      <div style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "30px",
            color: "#1f2937",
          }}
        >
          Trending Venues
        </h2>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: "10px 0",
          }}
        >
          {[...venues, ...venues].map((venue, index) => (
            <VenueCard key={index} venue={venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingVenues;
