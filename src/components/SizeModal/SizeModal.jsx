
import { useState } from "react";
import "./SizeModal.css";

function SizeModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    return (
        <>
            <button
                className="filter-button"
                onClick={() => setIsOpen(true)}
            >
                {selectedSize || "Size +"}
            </button>

            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="size-modal" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setIsOpen(false)}>×</button>

                        <h2>Choose size</h2>

                        <div className="sizes">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={selectedSize === size ? "active" : ""}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={!selectedSize}
                            onClick={() => setIsOpen(false)}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default SizeModal;
