
import { useState } from "react";
import "./BrowseByModel.css";

const categories = [
  "All",
  "Jumpsuits & Rompers",
  "Masks",
  "Accessories",
  "Lingerie",
  "New Arrivals",
  "Activewear",
  "Outerwear",
  "Plus Size",
  "Apparel",
  "Shirts & Tops",
  "Restocked",
  "Bottoms",
  "Sweatshirts & T-Shirts",
  "Sets",
  "Coats & Jackets",
  "CCProducts",
  "Sleepwear",
  "Jewelry",
  "Made In USA",
  "Dresses",
];

function BrowseByModel({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [applied, setApplied] = useState([]);

  const handleCategory = (category) => {
    if (category === "All") {
      setSelected((prev) =>
        prev.includes("All") ? [] : ["All"]
      );
      return;
    }

    setSelected((prev) => {
      const withoutAll = prev.filter(
        (item) => item !== "All"
      );

      return withoutAll.includes(category)
        ? withoutAll.filter((item) => item !== category)
        : [...withoutAll, category];
    });
  };

  const handleClear = () => {
    setSelected([]);
    setApplied([]);
    onApply([]);
  };

  const handleApply = () => {
    setApplied(selected);
    onApply(selected);
    setIsOpen(false);
  };

  const openModal = () => {
    setSelected(applied);
    setIsOpen(true);
  };

  return (
    <div className="browse-by-container">
      <button
        type="button"
        className="filter-button"
        onClick={openModal}
      >
        Browse By {applied.length > 0 ? `(${applied.length})` : "+"}
      </button>

      {isOpen && (
        <div
          className="browse-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="browse-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="browse-header">
              <h2>Browse By</h2>

              <button
                type="button"
                className="browse-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="browse-categories">
              {categories.map((category) => (
                <label
                  className={`browse-category ${
                    selected.includes(category)
                      ? "chosen"
                      : ""
                  }`}
                  key={category}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(category)}
                    onChange={() => handleCategory(category)}
                  />

                  <span>{category}</span>
                </label>
              ))}
            </div>

            <div className="browse-actions">
              <button
                type="button"
                className="browse-clear"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="button"
                className="browse-apply"
                onClick={handleApply}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseByModel;
