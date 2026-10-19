
import { useState } from "react";
import "./ColorModal.css";

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Red", value: "#D62828" },
  { name: "Pink", value: "#F2A7C6" },
  { name: "Beige", value: "#D8C3A5" },
  { name: "Blue", value: "#2878B5" },
  { name: "Green", value: "#39804A" },
  { name: "Brown", value: "#805333" },
  { name: "Gray", value: "#808080" },
  { name: "Yellow", value: "#F2D34F" },
];

function ColorModal({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [applied, setApplied] = useState([]);

  const toggleColor = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((color) => color !== name)
        : [...prev, name]
    );
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
    <div className="color-filter">
      <button
        type="button"
        className="filter-button"
        onClick={openModal}
      >
        Color {applied.length ? `(${applied.length})` : "+"}
      </button>

      {isOpen && (
        <div
          className="color-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="color-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="color-header">
              <h2>Color</h2>
              <button
                type="button"
                className="color-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="color-options">
              {colors.map((color) => (
                <button
                  type="button"
                  key={color.name}
                  className={`color-option ${
                    selected.includes(color.name) ? "selected" : ""
                  }`}
                  title={color.name}
                  aria-label={color.name}
                  onClick={() => toggleColor(color.name)}
                  style={{ backgroundColor: color.value }}
                >
                  {selected.includes(color.name) && (
                    <span
                      className={
                        color.name === "White" ||
                        color.name === "Yellow" ||
                        color.name === "Beige" ||
                        color.name === "Pink"
                          ? "color-check dark"
                          : "color-check"
                      }
                    >
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>

            <p className="color-selected">
              {selected.length
                ? selected.join(", ")
                : "Choose a color"}
            </p>

            <div className="color-actions">
              <button
                type="button"
                className="color-clear"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="button"
                className="color-apply"
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

export default ColorModal;
