import React from "react";
import "./Catalog.css";

const dresses = [
  {
    id: 1,
    name: "Elegant Black Dress",
    price: 45,
    image:
     "/images/5b51602c2912c11fb979497625b46809478ecda3.png"
  },
  {
    id: 2,
    name: "Classic White Dress",
    price: 55,
    image:
      "/images/05ecbe33bbb5c74a8a8db4b2fc46c04b2e31b127.png",
  },
  {
    id: 3,
    name: "Red Evening Dress",
    price: 60,
    image:
      "/images/6e934df49e8edb545e40a149ca25c75d478d08e9.png",
  },
  {
    id: 4,
    name: "Elegant Summer Dress",
    price: 40,
    image:
      "/images/25b0c18edeffc38a9f64430b5678f05cb57d707a.png",
  },
  {
    id: 5,
    name: "Pink Party Dress",
    price: 50,
    image:
      "/images/502b1440d25192e86b3a9daffc5ef0e479b4735e.png",
  },
  {
    id: 6,
    name: "Luxury Evening Dress",
    price: 75,
    image:
      "/images/816e99585b97023b66d7024534a55863b74ad0c0.png",
  },
  {
    id: 7,
    name: "Modern Beige Dress",
    price: 48,
    image:
      "/images/8431b46072673ace7229c4dfd196d3a6fa93ea8e.png",
  },
  {
    id: 8,
    name: "Chic Black Outfit",
    price: 65,
    image:
      "/images/66415e7d7f9d9613cf17d160ae828a88baa27a97.png",
  },
  {
    id: 9,
    name: "Minimal White Outfit",
    price: 52,
    image:
      "/images/a31851b3354334a0bbccc914f6c1472dd7415136.png",
  },
  {
    id:10,
    name: "Puff Sleeve Bodycon Print Dress",
    price: 78,
    image:
    "/images/b73b96f68bad51fbb331bf7ec3b737eeec12c453.png"
  },
  {
    id:11,
    name:"Buffalo Plaid Tartan Swing Dress",
    price: 24,
    image:
    "/images/c00c353a4462d9f95f34da92157825b8368b1bc0.png"
  },
  {
    id:12,
    name:"Drop Shoulder With Saist Tie Belted Dress",
    price: 89,
    images:
    "/images/c5778151d5142f61b9ccce32283f8ce476864b08.png"
  }
];

function Catalog() {
  return (
    <section className="catalog">
      <div className="catalog-heading">
        <p className="catalog-subtitle">OUR COLLECTION</p>
        <h1>Discover Your Style</h1>
        <p className="catalog-description">
          Find the perfect dress for every occasion.
        </p>
      </div>

      <div className="catalog-filters">
        <button className="filter-button active">All Dresses</button>
        <button className="filter-button">Evening</button>
        <button className="filter-button">Casual</button>
        <button className="filter-button">Party</button>
      </div>

      <div className="product-grid">
        {dresses.map((dress) => (
          <div className="product-card" key={dress.id}>
            <div className="product-image">
              <img src={dress.image} alt={dress.name} />
              <button className="wishlist-button" aria-label="Add to wishlist">
                ♡
              </button>
            </div>

            <div className="product-info">
              <h3>{dress.name}</h3>
              <p className="product-price">${dress.price.toFixed(2)}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
