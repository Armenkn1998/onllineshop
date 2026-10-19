
import { useState } from "react";
import "./SortByModal.css";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Alphabetically, A–Z", value: "name-asc" },
  { label: "Alphabetically, Z–A", value: "name-desc" },
  { label: "Price, low to high", value: "price-asc" },
  { label: "Price, high to low", value: "price-desc" },
];

function SortByModal({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("featured");
  const [applied, setApplied] = useState("featured");

  const handleApply = () => {
    setApplied(selected);
    onApply(selected);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelected("featured");
    setApplied("featured");
    onApply("featured");
  };

  return (
    <div className="sort-by-container">
      <button
        type="button"
        className="filter-button"
        onClick={() => {
          setSelected(applied);
          setIsOpen(true);
        }}
      >
        Sort By +
      </button>

      {isOpen && (
        <div
          className="sort-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="sort-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sort-header">
              <h2>Sort By</h2>
              <button
                type="button"
                className="sort-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="sort-options">
              {sortOptions.map((option) => (
                <label key={option.value} className="sort-option">
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={selected === option.value}
                    onChange={() => setSelected(option.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>

            <div className="sort-actions">
              <button
                type="button"
                className="sort-clear"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="button"
                className="sort-apply"
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

export default SortByModal;
