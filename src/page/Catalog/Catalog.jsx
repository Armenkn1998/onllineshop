
import React, { useState } from "react";
import "./Catalog.css";

import ColorModal from "../../components/ColorModal/ColorModal";
import SizeModal from "../../components/SizeModal/SizeModal";
import BrowseByModel from "../../components/BrowsebyModel/BrowsebyModel";
import SortByModal from "../../components/SortByModal/SortByModal";
import dress1 from "../../images/5b51602c2912c11fb979497625b46809478ecda3.png";
import dress2 from "../../images/05ecbe33bbb5c74a8a8db4b2fc46c04b2e31b127.png"
import dress3 from "../../images/6e934df49e8edb545e40a149ca25c75d478d08e9.png"
import dress4 from "../../images/25b0c18edeffc38a9f64430b5678f05cb57d707a.png"
import dress5 from "../../images/502b1440d25192e86b3a9daffc5ef0e479b4735e.png"
import dress6 from "../../images/816e99585b97023b66d7024534a55863b74ad0c0.png"
import dress7 from "../../images/8431b46072673ace7229c4dfd196d3a6fa93ea8e.png"
import dress8 from "../../images/66415e7d7f9d9613cf17d160ae828a88baa27a97.png"
import dress9 from "../../images/a31851b3354334a0bbccc914f6c1472dd7415136.png"
import dress10 from "../../images/b73b96f68bad51fbb331bf7ec3b737eeec12c453.png"
import dress11 from "../../images/c00c353a4462d9f95f34da92157825b8368b1bc0.png"
import dress12 from "../../images/c5778151d5142f61b9ccce32283f8ce476864b08.png"

const dresses = [
  {
    id: 1,
    name: "Elegant Black Dress",
    price: 45,
    category: "Dresses",
    color: "Black",
    image: dress1,
  },
  {
    id: 2,
    name: "Classic White Dress",
    price: 55,
    category: "Dresses",
    color: "White",
    image:dress2,
  },
  {
    id: 3,
    name: "Red Evening Dress",
    price: 60,
    category: "Dresses",
    color: "Red",
    image: dress3,
  },
  {
    id: 4,
    name: "Elegant Summer Dress",
    price: 40,
    category: "Dresses",
    color: "Beige",
    image:dress4,
  },
  {
    id: 5,
    name: "Pink Party Dress",
    price: 50,
    category: "Dresses",
    color: "Pink",
    image: dress5,
  },
  {
    id: 6,
    name: "Luxury Evening Dress",
    price: 75,
    category: "Dresses",
    color: "Black",
    image:dress6,
  },
  {
    id: 7,
    name: "Modern Beige Dress",
    price: 48,
    category: "Dresses",
    color: "Beige",
    image: dress7,
  },
  {
    id: 8,
    name: "Chic Black Outfit",
    price: 65,
    category: "Dresses",
    color: "Black",
    image: dress8,
  },
  {
    id: 9,
    name: "Minimal White Outfit",
    price: 52,
    category: "Dresses",
    color: "White",
    image: dress9,
  },
  {
    id: 10,
    name: "Puff Sleeve Bodycon Print Dress",
    price: 78,
    category: "Dresses",
    color: "Red",
    image: dress10,
  },
  {
    id: 11,
    name: "Buffalo Plaid Tartan Swing Dress",
    price: 24,
    category: "Dresses",
    color: "Red",
    image: dress11,
  },
  {
    id: 12,
    name: "Drop Shoulder With Waist Tie Belted Dress",
    price: 89,
    category: "Dresses",
    color: "Blue",
    image: dress12,
  },
];

function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredDresses = dresses.filter((dress) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes("All") ||
      selectedCategories.includes(dress.category);

    const colorMatch =
      selectedColors.length === 0 ||
      selectedColors.includes(dress.color);

    return categoryMatch && colorMatch;
  });

 
  const sortedDresses = [...filteredDresses].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);

      case "name-desc":
        return b.name.localeCompare(a.name);

      case "price-asc":
        return a.price - b.price;

      case "price-desc":
        return b.price - a.price;

      default:
        return a.id - b.id;
    }
  });

  return (
    <section className="catalog">
      <div className="catalog-heading">
        <hr />

        <div className="catalog-description">
          <p>
            Coats & Jackets&nbsp; Sweatshirts & T-shirts&nbsp;
            Shirts & Tops&nbsp; Dresses&nbsp; Outerwear&nbsp;
            Jumpsuits & Rompers&nbsp; Activewear
          </p>

          <h2>Dresses</h2>

          <p>Home — Apparel — Dresses</p>
        </div>
      </div>

      <div className="catalog-filters">
        <ColorModal onApply={setSelectedColors} />

        <SizeModal />

        <BrowseByModel onApply={setSelectedCategories} />

        <SortByModal onApply={setSortBy}  className="sortbymodel"/>
      </div>

      <div className="product-grid">
        {sortedDresses.length > 0 ? (
          sortedDresses.map((dress) => (
            <div className="product-card" key={dress.id}>
              <div className="product-image">
                <img src={dress.image} alt={dress.name} />
              </div>

              <div className="product-info">
                <h3>{dress.name}</h3>

                <p className="product-price">
                  ${dress.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">
            No products found in this category.
          </p>
        )}
      </div>
      <button className="load-more-btn">Load More</button>
    </section>
  );
}

export default Catalog;
